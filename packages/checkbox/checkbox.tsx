import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import Icon from '../icon/icon'
import './style'

export interface IProps {
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  checked?: boolean
  value?: any
  name?: string
  indeterminate?: boolean
  onChange?: any
}
interface IState {
  position: object
}
const componentName = 'Checkbox'
class Checkbox extends React.Component<IProps, IState> {
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
    if (!targetEl || !rippleEl) {
      return false
    }
    rippleEl.classList.remove('active')
    const { width, height } = targetEl.getBoundingClientRect()
    const R = width < height ? height : width
    this.setState({
      position: {
        width: `${R * 2}px`,
        height: `${R * 2}px`
      }
    })
    rippleEl.classList.add('active')
  }
  public onRadioClick = (value: any): any => {
    const { disabled, onChange } = this.props
    if (disabled) {
      return false
    }
    this.onRippleEffect()
    onChange && (onChange as React.MouseEventHandler)(value)
  }
  public onInputChange = (value: any, e): any => {
    e.preventDefault()
    const rippleEl = this.rippleElement.current
    rippleEl && rippleEl.classList.remove('active')
    const { disabled, onChange } = this.props
    if (disabled) {
      return false
    }
    onChange && (onChange as React.MouseEventHandler)(value)
  }
  renderCheckbox = () => {
    const { position } = this.state
    const { disabled, style, className, value, checked, children } = this.props
    const iconName = checked ? 'check' : 'line'
    const styles = Object.assign({}, { ...style })
    const wrapClass = classNames(componentName, 'wrapper', [
      { disabled },
      className
    ])
    const bodyClass = classNames('checkbox-body', {
      disabled
    })
    return (
      <label data-role={componentName} style={styles} className={wrapClass}>
        <span className={bodyClass} ref={this.radioBodyElement}>
          <Icon
            name={iconName}
            className={classNames('', ['icon-checkbox'], { checked, disabled })}
          />
          <input
            type="checkBox"
            value={value}
            defaultChecked={checked}
            onChange={e => this.onRadioClick(value)}
          />
          <span className="ripple" style={position} ref={this.rippleElement} />
        </span>
        <span
          className={classNames('checkbox-inner', { disabled })}
          onClick={e => this.onInputChange(value, e)}
        >
          {children ? children : value}
        </span>
      </label>
    )
  }
  render() {
    return this.renderCheckbox()
  }
}
export default Checkbox
