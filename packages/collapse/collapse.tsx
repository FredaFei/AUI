import * as React from 'react'
import * as PropTypes from 'prop-types'
import { isSimpleArrayEqual, classNames } from '../utils'
import Icon from '../icon/icon'
import './style'

type CollapseProps = {
  activeKey?: string[]
  defaultActiveKey?: string[]
  accordion?: boolean
  expandIcon?: (panelProps: any) => React.ReactNode
  className?: string
  style?: React.CSSProperties
  onChange?: (key: string, e: React.MouseEvent<HTMLElement>) => any
}
type CollapseState = {
  defaultKeys: string[]
  open: boolean
}
type PaneProps = {
  header: React.ReactNode
  key: string
  active?: boolean
  visibleIcon?: boolean
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}
const componentName = 'Collapse'
class Collapse extends React.Component<CollapseProps, CollapseState> {
  public static defaultProps = {
    accordion: false,
    disabled: false
  }
  public static propTypes = {
    activeKey: PropTypes.array,
    defaultActiveKey: PropTypes.array,
    accordion: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
  }
  constructor(props: CollapseProps) {
    super(props)
    this.state = {
      open: false,
      defaultKeys: props.activeKey || props.defaultActiveKey || []
    }
  }
  private keys: string[] = []
  public static getDerivedStateFromProps(
    nextProps: CollapseProps,
    prevState: CollapseState
  ) {
    const { activeKey } = nextProps
    const { defaultKeys } = prevState
    if (!('activeKey' in nextProps)) {
      return null
    }
    if (Array.isArray(activeKey) && Array.isArray(defaultKeys)) {
      if (!isSimpleArrayEqual(activeKey, defaultKeys)) {
        return null
      }
    }
    return { defaultKeys: activeKey }
  }
  componentDidMount() {
    if (!('activeKey' in this.props) && !('defaultActiveKey' in this.props)) {
      this.setState({
        defaultKeys: [this.keys[0]]
      })
    }
  }
  public componentDidUpdate(
    prevProps: CollapseProps,
    prevState: CollapseState
  ) {
    // todo
  }

  public handleClick = (
    key: string,
    e: React.MouseEvent<HTMLElement>,
    disabled: boolean
  ): any => {
    if (disabled) {
      return false
    }
    const { accordion, onChange } = this.props
    let copyDefaultKeys = [...this.state.defaultKeys]
    let index = copyDefaultKeys.indexOf(key)
    if (index >= 0) {
      //close
      copyDefaultKeys.splice(index, 1)
    } else {
      // open
      if (accordion) {
        copyDefaultKeys = [key]
      } else {
        copyDefaultKeys.push(key)
      }
    }

    this.setState({
      defaultKeys: copyDefaultKeys
    })
    onChange && onChange(key, e)
  }
  renderExpandIcon = (active: boolean) => {
    const { expandIcon } = this.props
    const IconContent = expandIcon ? (
      expandIcon(active)
    ) : (
      <Icon
        name="right"
        className={classNames('', ['am-icon-animation', active && 'active'])}
      />
    )
    return IconContent
  }
  renderCollapseHead = () => {
    const { accordion, children } = this.props
    const { defaultKeys } = this.state
    return React.Children.map(
      children,
      (child: React.ReactElement<PaneProps>) => {
        if (!child) {
          return false
        }
        const key = child.key as string
        this.keys.push(key)
        const active = defaultKeys.includes(key)
        const { visibleIcon, disabled, header } = child.props
        return (
          <div
            key={key}
            className={classNames(componentName, 'item', {
              disabled,
              active
            })}
          >
            <div
              className="am-collapse-item-name"
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                this.handleClick(key, e, disabled || false)
              }
            >
              {visibleIcon && this.renderExpandIcon(active)}
              {header}
            </div>
            <div className="am-collapse-item-content">
              {!disabled &&
                React.cloneElement(
                  child as React.ReactElement<PaneProps>,
                  {}
                )}
            </div>
          </div>
        )
      }
    )
  }
  renderCollapse = () => {
    const { className, style } = this.props
    const styles = Object.assign({}, { ...style })
    const collapseClasses = classNames(componentName, 'wrapper', [className])
    return (
      <div data-role={componentName} className={collapseClasses} style={styles}>
        {this.renderCollapseHead()}
      </div>
    )
  }
  render() {
    return this.renderCollapse()
  }
}
export default Collapse
