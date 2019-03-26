import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import './style'

type TabsProps = {
  activeKey?: string
  className?: string
  style?: React.CSSProperties
  onChange?: (key: string) => any
}
type TabsState = {}
type TabPaneProps = {
  tab?: string
  key?: string
  active?: boolean
  className?: string
  style?: React.CSSProperties
}
const componentName = 'Tabs'
class Tabs extends React.Component<TabsProps, TabsState> {
  public static defaultProps = {}
  public static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }
  constructor(props: TabsProps) {
    super(props)
  }
  componentDidMount() {
    // this.calculateLineStyle()
  }
  // public calculateLineStyle(el) {
  //   let { left: left1, top: top1 } = this.$refs.tabsHead.getBoundingClientRect()
  //   let {
  //     width,
  //     left: left2,
  //     height,
  //     top: top2
  //   } = el.getBoundingClientRect()
  //   if (this.direction === 'horizontal') {
  //     this.$refs.line.style.width = `${width}px`
  //     this.$refs.line.style.left = `${left2 - left1}px`
  //   } else {
  //     this.$refs.line.style.height = `${height}px`
  //     this.$refs.line.style.top = `${top2 - top1}px`
  //   }
  // }
  // public xx = ()=>{
  //   return this.keys.includes(this.props.activeKey)
  // }
  public handleClick = (key): any => {
    const { onChange } = this.props
    onChange && onChange(key)
  }
  public renderTabsNav = (): React.ReactNode[] => {
    const { children, activeKey } = this.props
    console.log(activeKey)
    return React.Children.map(
      children,
      (child: React.ReactElement<TabPaneProps>) => {
        console.log(child)
        if (!child) {
          return null
        }
        const key = child.key as string
        this.keys.push(key)
        const active = activeKey === key
        return (
          <div
            data-role="tabsNavItem"
            className={classNames('', ['am-tabs-nav-item'], { active })}
            onClick={(e: React.MouseEvent) => this.handleClick(key, e)}
          >
            {child.props.tab}
          </div>
        )
      }
    )
  }
  public renderTabsPane = (): React.ReactNode[] => {
    const { children, activeKey } = this.props
    return React.Children.map(
      children,
      (child: React.ReactElement<TabPaneProps>) => {
        if (!child) {
          return null
        }
        const key = child.key as string
        this.keys.push(key)
        const active = activeKey === key
        return React.cloneElement(child as React.ReactElement<TabPaneProps>, {
          active
        })
      }
    )
  }
  private keys: string[] = []
  renderTabs = () => {
    const { className, style, children, ...rest } = this.props
    const styles = Object.assign({}, { ...style })
    const tabsClasses = classNames(componentName, 'wrapper', [className])
    return (
      <div data-role="tabs" className={tabsClasses} style={styles} {...rest}>
        <div className="am-tabs-nav">
          {this.renderTabsNav()}
          <div className="line" />
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
