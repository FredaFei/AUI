import * as React from 'react'
import * as PropTypes from 'prop-types'
import { isSimpleArrayEqual } from '../utils'
import classes, { createScopedClasses } from '../utils/classnames'
import Icon from '../icon/icon'
import './style'
import { IProps as IPaneProps } from './pane'

const componentName = 'Collapse'
const sc = createScopedClasses(componentName)
interface IProps extends IStyledProps {
  activeKey?: string[]
  defaultActiveKey?: string[]
  accordion?: boolean
  expandIcon?: (panelProps: any) => React.ReactNode
  onChange?: (key: string, e: React.MouseEvent<HTMLElement>) => any
}
interface IState {
  defaultKeys: string[]
  open: boolean
}
class Collapse extends React.Component<IProps, IState> {
  static displayName = componentName;
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
  constructor(props: IProps) {
    super(props)
    this.state = {
      open: false,
      defaultKeys: props.activeKey || props.defaultActiveKey || []
    }
  }
  private keys: string[] = []
  public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
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
  public componentDidUpdate(nextProps: IProps, prevState: IState) {
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
        className={classes(['am-icon-animation', active && 'active'])}
      />
    )
    return IconContent
  }
  renderCollapseHead = () => {
    const { defaultKeys } = this.state
    return React.Children.map(
      this.props.children as any[],
      (child: React.ReactElement<IPaneProps>) => {
        if (!child) {
          return false
        }
        console.log(child)
        const key = child.key as string
        this.keys.push(key)
        const active = defaultKeys.includes(key)
        const { visibleIcon, disabled, header } = child.props
        return (
          <div
            key={key}
            className={classes(sc('item'), {
              disabled,
              active
            })}
          >
            <div
              className={sc('item-name')}
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                this.handleClick(key, e, disabled || false)
              }
            >
              {visibleIcon && this.renderExpandIcon(active)}
              {header}
            </div>
            <div className={sc('item-content')}>
              {!disabled &&
                React.cloneElement(
                  child as React.ReactElement<IPaneProps>,
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
    const collapseClasses = classes(sc('wrapper'), [className])
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
