import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils/'
import Icon from '../icon/icon'
import './style'

type ButtonProps = {
  icon?: string
  className?: string
  iconPosition?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler
}
type ButtonState = {
  position: object
}
const componentName = 'Button'
class Button extends React.Component<ButtonProps, ButtonState> {
  public static defaultProps = {
    icon: '',
    iconPosition: 'left',
    disabled: false
  }
  public static propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    iconPosition: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  }
  private rippleElement: React.RefObject<HTMLDivElement>
  private buttonElement: React.RefObject<HTMLButtonElement>
  constructor(props: ButtonProps) {
    super(props)
    this.rippleElement = React.createRef()
    this.buttonElement = React.createRef()
    this.state = { position: {} }
  }
  public onRippleEffect = (e: React.MouseEvent): any => {
    const targetEl = this.buttonElement.current
    const rippleEl = this.rippleElement.current
    if (!targetEl) {
      return false
    }
    rippleEl && rippleEl.classList.remove('active')
    const { pageX, pageY } = e
    const { top, left, width, height } = targetEl.getBoundingClientRect()
    const R = width < height ? height : width
    this.setState({
      position: {
        top: `${pageY - top - R}px`,
        left: `${pageX - left - R}px`,
        width: `${R * 2}px`,
        height: `${R * 2}px`
      }
    })
    rippleEl && rippleEl.classList.add('active')
  }
  public handleClick = (e: React.MouseEvent): any => {
    const { disabled, onClick } = this.props
    if (disabled) {
      return false
    }
    this.onRippleEffect(e)
    onClick && (onClick as React.MouseEventHandler)(e)
  }
  renderButton = () => {
    const styles = Object.assign({})
    const { position } = this.state
    const { icon, iconPosition, disabled, className, children } = this.props
    const buttonWrapClass = classNames(componentName, [
      className,
      disabled && 'icon-disabled'
    ])
    const buttonBodyClass = classNames('button-body', [
      icon && iconPosition && `icon-${iconPosition}`
    ])
    let renderButtonBody = () => {
      if (icon) {
        return (
          <div className={buttonBodyClass}>
            <Icon name={icon} className="button-icon-name" />
            <span className="am-button-content">{children}</span>
          </div>
        )
      } else {
        return <span className="am-button-content">{children}</span>
      }
    }
    return (
      <button
        data-role="button"
        style={styles}
        className={buttonWrapClass}
        onClick={this.handleClick}
        ref={this.buttonElement}
      >
        {renderButtonBody()}
        <div className="ripple" style={position} ref={this.rippleElement} />
      </button>
    )
  }
  render() {
    return this.renderButton()
  }
}
export default Button
