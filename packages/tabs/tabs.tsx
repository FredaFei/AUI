import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import TabPane, { IProps as IPaneProps } from './tabPane'
import './style'

const componentName = 'Tabs'
const sc = createScopedClasses(componentName)
interface IProps extends IStyledProps {
  activeKey?: string
  defaultActiveKey?: string
  direction?: string
  onChange?: (key: string) => any
}
interface ILayout {
  key: string
  active?: boolean
}

type TLayout = (a: React.ReactElement<IPaneProps>, b: ILayout) => {}
interface IState {
  activeTabKey: string
}
class Tabs extends React.Component<IProps, IState> {
  static displayName = componentName
  public static defaultProps = {
    direction: 'horizontal'
  }
  public static propTypes = {
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    direction: PropTypes.string
  }
  private lineElement: React.RefObject<HTMLDivElement>
  private tabsHeadElement: React.RefObject<HTMLDivElement>
  constructor(props: IProps) {
    super(props)
    this.lineElement = React.createRef()
    this.tabsHeadElement = React.createRef()
    this.state = {
      activeTabKey:
        this.props.defaultActiveKey || this.props.activeKey || this.keys[0]
    }
  }
  componentDidMount() {
    if(!this.state.activeTabKey){
      this.setState({
        activeTabKey:
          this.props.defaultActiveKey || this.props.activeKey || this.keys[0]
      })
    }
    this.calculateLineStyle(this.getCurrentTabsIndex(this.state.activeTabKey))
  }
  public componentDidUpdate(nextProps: IProps, prevState: IState) {
    if (this.state.activeTabKey !== prevState.activeTabKey) {
      this.calculateLineStyle(
        this.getCurrentTabsIndex(this.state.activeTabKey)
      )
    }
  }
  private keys: string[] = []
  public getCurrentTabsIndex = (value: string): number => {
    return this.keys.indexOf(value) || 0
  }
  public calculateLineStyle(index: number): any {
    if (index < 0) {
      return false
    }
    const { direction } = this.props
    const lineElement = this.lineElement.current
    const tabsHeadElement = this.tabsHeadElement.current
    if (!lineElement || !tabsHeadElement || !tabsHeadElement.children) {
      return false
    }
    const el = tabsHeadElement.children[index]
    let { left: left1, top: top1 } = tabsHeadElement.getBoundingClientRect()
    let { width, left: left2, height, top: top2 } = el.getBoundingClientRect()
    if (direction === 'horizontal') {
      lineElement.style.width = `${width}px`
      lineElement.style.left = `${left2 - left1}px`
    } else {
      lineElement.style.height = `${height}px`
      lineElement.style.top = `${top2 - top1}px`
    }
  }

  public handleClick = (key: string, disabled: boolean): any => {
    if (disabled) {
      return false
    }
    this.setState({
      activeTabKey: key
    })
    this.calculateLineStyle(this.getCurrentTabsIndex(key))
    this.props.onChange && this.props.onChange(key)
  }
  public renderTabsNav = (child: React.ReactElement, options: ILayout) => {
    const itemClass = {
      disabled: child.props.disabled,
      active: options.active
    }
    return (
      <div
        data-role="tabsNavItem"
        key={`nav-${options.key}`}
        className={sc('nav-item', itemClass)}
        onClick={() => this.handleClick(options.key, child.props.disabled)}
      >
        {child.props.tab}
      </div>
    )
  }
  public renderTabsPane = (child: React.ReactElement, options: ILayout) => {
    return React.cloneElement(child, {
      active: options.active
    })
  }
  renderLayout = (layout: TLayout) => {
    const children = React.Children.map(this.props.children, child => {
      const element = child as React.ReactElement<IPaneProps>
      if (element.type !== TabPane) {
        console.error('Tabs 组件的子组件只能是 TabPane组件')
        return null
      }
      const key = element.key as string
      this.keys.push(key)
      const active = this.state.activeTabKey === key
      return element.type === TabPane && layout(element, { key, active })
    })
    return children.filter(i => i)
  }
  render() {
    const { className, style, direction } = this.props
    const vertical = { vertical: direction === 'vertical' }
    const tabsClasses = classes(sc('wrapper', vertical), className)
    return (
      <div data-role="tabs" className={tabsClasses} style={style}>
        <div className={sc('nav')} ref={this.tabsHeadElement}>
          {this.renderLayout(this.renderTabsNav)}
          <div className={sc('nav-line')} ref={this.lineElement} />
        </div>
        <ul className="am-tabs-pane-body">
          {this.renderLayout(this.renderTabsPane)}
        </ul>
      </div>
    )
  }
}
export default Tabs
