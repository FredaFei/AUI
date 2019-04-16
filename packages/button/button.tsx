import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import Icon from '../icon/icon'
import './style'

const componentName = 'Button'
const sc = createScopedClasses(componentName)
type IProps = {
  icon?: string
  className?: string
  style?: React.CSSProperties
  iconPosition?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler
}
type IState = {
  position: object
}
class Button extends React.Component<IProps, IState> {
  public static defaultProps = {
    icon: '',
    iconPosition: 'left',
    disabled: false
  }
  static propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    iconPosition: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object
  }
  private rippleElement: React.RefObject<HTMLDivElement>
  private buttonElement: React.RefObject<HTMLButtonElement>
  constructor(props: IProps) {
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
    console.log(e)
    console.log(pageX, pageY)
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
  handleClick = (e: React.MouseEvent): any => {
    const { disabled, onClick } = this.props
    if (disabled) {
      return false
    }
    this.onRippleEffect(e)
    onClick && (onClick as React.MouseEventHandler)(e)
  }
  renderButton = () => {
    const { position } = this.state
    const {
      icon,
      iconPosition,
      disabled,
      style,
      className,
      children,
      ...rest
    } = this.props
    const styles = Object.assign({}, { ...style })
    const buttonWrapClass = classes(sc('wrapper'), className, { 'icon-disabled': disabled})
    const buttonBodyClass = classes(sc('body'), [
      icon && iconPosition && `icon-${iconPosition}`
    ])
    let renderButtonBody = () => {
      if (icon) {
        return (
          <div className={buttonBodyClass}>
            <Icon name={icon} className="icon-name" />
            <span className={sc('content')}>{children}</span>
          </div>
        )
      } else {
        return <span className={sc('content')}>{children}</span>
      }
    }
    return (
      <button
        {...rest}
        data-role={componentName}
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
