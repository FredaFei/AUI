import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import './style'

export interface IProps {
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  checkedValue?: any
  value?: any
  name?: string
  onClick?: React.MouseEventHandler
  children?: any
}
interface IState {
  position: object
}
const componentName = 'Radio'
class Radio extends React.Component<IProps, IState> {
  public static defaultProps = {
    disabled: false
  }
  public static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object
  }
  private rippleElement: React.RefObject<HTMLSpanElement>
  private radioBodyElement: React.RefObject<HTMLSpanElement>
  constructor(props: IProps) {
    super(props)
    this.rippleElement = React.createRef()
    this.radioBodyElement = React.createRef()
    this.state = {
      position: {}
    }
  }
  public onRippleEffect = (): any => {
    const targetEl = this.radioBodyElement.current
    const rippleEl = this.rippleElement.current
    if (!targetEl) {
      return false
    }
    rippleEl && rippleEl.classList.remove('active')
    const { width, height } = targetEl.getBoundingClientRect()
    const R = width < height ? height : width
    this.setState({
      position: {
        width: `${R * 2}px`,
        height: `${R * 2}px`
      }
    })
    rippleEl && rippleEl.classList.add('active')
  }
  public onRadioClick = (value: any): any => {
    const { disabled, onClick } = this.props
    if (disabled) {
      return false
    }
    this.onRippleEffect()
    onClick && (onClick as React.MouseEventHandler)(value)
  }
  public onInputChange = (value: any, e): any => {
    e.preventDefault()
    const rippleEl = this.rippleElement.current
    rippleEl && rippleEl.classList.remove('active')
    const { disabled, onClick } = this.props
    if (disabled) {
      return false
    }
    onClick && (onClick as React.MouseEventHandler)(value)
  }
  renderRadio = () => {
    const { position } = this.state
    const {
      disabled,
      style,
      className,
      value,
      name,
      checkedValue,
      children
    } = this.props
    const styles = Object.assign({}, { ...style })
    const active = value === checkedValue
    const radioWrapClass = classNames(componentName, 'wrapper', [className])
    const buttonBodyClass = classNames('radio-body', { active, disabled })
    return (
      <label
        data-role={componentName}
        style={styles}
        className={radioWrapClass}
      >
        <span className={buttonBodyClass} ref={this.radioBodyElement}>
          <input
            type="radio"
            value={value}
            name={name}
            defaultChecked={active}
            onClick={e => this.onRadioClick(value)}
          />
          <span className="ripple" style={position} ref={this.rippleElement} />
        </span>
        <span
          className={classNames('radio-inner', { disabled })}
          onClick={e => this.onInputChange(value, e)}
        >
          {children ? children : value}
        </span>
      </label>
    )
  }
  render() {
    return this.renderRadio()
  }
}
export default Radio
