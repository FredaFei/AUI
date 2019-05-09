import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import { IProps as IPaneProps } from './tabPane'
import './style'

const componentName = 'Tabs'
const sc = createScopedClasses(componentName)
interface IProps {
  activeKey?: string
  defaultActiveKey?: string
  direction?: string
  className?: string
  style?: React.CSSProperties
  onChange?: (key: string, e: React.MouseEvent<HTMLElement>) => any
}
interface IState {
  defaultKey: string
}
class Tabs extends React.Component<IProps, IState> {
  static displayName = componentName
  public static defaultProps = {
    direction: 'horizontal'
  }
  public static propTypes = {
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    direction: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
  }
  private lineElement: React.RefObject<HTMLDivElement>
  private tabsHeadElement: React.RefObject<HTMLDivElement>
  constructor(props: IProps) {
    super(props)
    this.lineElement = React.createRef()
    this.tabsHeadElement = React.createRef()
    this.state = {
      defaultKey: props.activeKey || props.defaultActiveKey || ''
    }
  }
  private keys: string[] = []
  public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if (
      'activeKey' in nextProps &&
      nextProps.activeKey !== prevState.defaultKey
    ) {
      return { defaultKey: nextProps.activeKey }
    }
    return null
  }
  componentDidMount() {
    if (!('defaultActiveKey' in this.props) && !('activeKey' in this.props)) {
      this.setState({
        defaultKey: this.keys[0]
      })
    } else {
      this.calculateLineStyle(this._getNavItemIndex())
    }
  }
  public componentDidUpdate(nextProps: IProps, prevState: IState) {
    if (this.state.defaultKey !== prevState.defaultKey) {
      this.calculateLineStyle(this._getNavItemIndex())
    }
  }
  public _getNavItemIndex = (): number => {
    return this.keys.indexOf(this.state.defaultKey) || 0
  }
  public calculateLineStyle(index: number): any {
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

  public handleClick = (
    key: string,
    e: React.MouseEvent<HTMLElement>,
    disabled: boolean
  ): any => {
    if (disabled) {
      return false
    }
    this.setState({
      defaultKey: key
    })
    const { onChange } = this.props
    onChange && onChange(key, e)
  }
  public renderTabsNav = (): React.ReactNode[] => {
    const { direction } = this.props
    const { defaultKey } = this.state
    return React.Children.map(
      this.props.children as any[],
      (child: React.ReactElement) => {
        if (!child) {
          return null
        }
        const key = child.key as string
        this.keys.push(key)
        const active = defaultKey === key
        return (
          <div
            data-role="tabsNavItem"
            key={key}
            className={sc(
              'nav-item',
              [
                direction === 'vertical' && 'vertical',
                child.props.disabled && 'disabled'
              ],
              { active }
            )}
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              this.handleClick(key, e, child.props.disabled)
            }
          >
            {child.props.tab}
          </div>
        )
      }
    )
  }
  public renderTabsPane = (): React.ReactNode[] => {
    const { defaultKey } = this.state
    return React.Children.map(
      this.props.children as any[],
      (child: React.ReactElement<IPaneProps>) => {
        if (!child) {
          return null
        }
        const key = child.key as string
        this.keys.push(key)
        const active = defaultKey === key
        return React.cloneElement(child as React.ReactElement<IPaneProps>, {
          active
        })
      }
    )
  }
  renderTabs = () => {
    const { className, style, direction } = this.props
    const vertical = direction === 'vertical'
    const tabsClasses = classes(sc('wrapper', { vertical }), className)
    const tabsNavClasses = sc('nav', { vertical })
    return (
      <div data-role="tabs" className={tabsClasses} style={style}>
        <div className={tabsNavClasses} ref={this.tabsHeadElement}>
          {this.renderTabsNav()}
          <div className="line" ref={this.lineElement} />
        </div>
        <ul className="am-tabs-pane-body">{this.renderTabsPane()}</ul>
      </div>
    )
  }
  render() {
    return this.renderTabs()
  }
}
export default Tabs
