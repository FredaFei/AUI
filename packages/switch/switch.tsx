import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

const componentName = 'Switch'
const sc = createScopedClasses(componentName)

interface IProps extends IStyledProps {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean, e: React.MouseEvent<HTMLElement>) => any
}
interface IState {
  checked: boolean
  position: object
}

class Switch extends React.Component<IProps, IState> {
  static displayName = componentName
  public static defaultProps = {
    disabled: false,
    defaultChecked: false
  }
  public static propTypes = {
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
  }
  private rippleElement: React.RefObject<HTMLSpanElement>
  private rippleParentElement: React.RefObject<HTMLLabelElement>
  constructor(props: IProps) {
    super(props)
    this.rippleElement = React.createRef()
    this.rippleParentElement = React.createRef()
    this.state = {
      checked: props.defaultChecked || false,
      position: {}
    }
  }
  public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if ('checked' in nextProps && nextProps.checked !== prevState.checked) {
      return { checked: nextProps.checked }
    }
    return null
  }
  public onRippleEffect = (): any => {
    const targetEl = this.rippleParentElement.current
    const rippleEl = this.rippleElement.current
    if (!targetEl || !rippleEl) {
      return false
    }
    rippleEl.classList.remove('active')
    const { width, height } = targetEl.getBoundingClientRect()
    const R = width < height ? height : width
    this.setState({
      position: {
        width: `${R * 2}px`,
        height: `${R * 2}px`,
        marginLeft: `-${R}px`,
        marginTop: `-${R}px`
      }
    })
    rippleEl.classList.add('active')
  }
  public onClick = (event: React.MouseEvent<HTMLElement>): any => {
    const { disabled, onChange } = this.props
    if (disabled) {
      return false
    }
    this.onRippleEffect()
    this.setState(state => ({ checked: !state.checked }))
    onChange && onChange(this.state.checked, event)
  }
  render() {
    const { position, checked } = this.state
    const { disabled, style, className } = this.props
    const isActive = checked && 'active'
    const isDisabled = disabled && 'disabled'
    const wrapperClass = classes(sc(''), [className, isActive, isDisabled])
    const styles = Object.assign({}, style)
    return (
      <label className={wrapperClass} style={styles} onClick={this.onClick}>
        <span
          className={classes(sc('core'), [isActive])}
          ref={this.rippleParentElement}
        >
          <span
            className={classes(sc('ripple'), [isActive])}
            style={position}
            ref={this.rippleElement}
          />
        </span>
      </label>
    )
  }
}
export default Switch
