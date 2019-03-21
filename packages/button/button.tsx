import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils/'
import './style'

// interface IButtonProps {
//   icon?: string
//   style?: React.CSSProperties
//   className?: string
//   iconPosition?: string
//   disabled?: boolean
//   onClick?: React.MouseEventHandler
// }
export type ButtonProps = {
  onClick?: React.MouseEventHandler
}
export type ButtonState = {
  position: object
}
const componentName = 'Button'
class Button extends React.Component<ButtonProps, ButtonState> {
  // const { icon, style, iconPosition, disabled, className, onClick } = props
  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
  }
  constructor(props: ButtonProps) {
    super(props)
    this.state = { position: { left: 0, top: 0 } }
  }
  private rippleElement: HTMLElement | null
  rippleRef = (node: HTMLElement) => {
    this.rippleElement = node
  }
  public componentDidMount() {
    document.addEventListener('click', this.onRippleEffect, false)
  }
  public onRippleEffect = e => {
    const targetEl: HTMLElement = e.target
    if (
      targetEl.tagName.toLowerCase() !== 'button' ||
      targetEl.getAttribute('data-role') !== 'button'
    ) {
      return false
    }
    this.rippleElement && this.rippleElement.classList.remove('active')
    const { top, left, width, height } = targetEl.getBoundingClientRect()
    const { pageX, pageY } = e
    this.setState({
      position: {
        top: `${pageY - top - height / 2 - document.body.scrollTop}px`,
        left: `${pageX - left - width / 2 - document.body.scrollLeft}px`,
        width: `${width}px`,
        height: `${height}px`
      }
    })
    this.rippleElement && this.rippleElement.classList.add('active')
  }
  public handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = e => {
    const { onClick} = this.props
    if (onClick){
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e)
    }
  }
  renderButton = () => {
    const classes = classNames(componentName, {})
    const styles = Object.assign({})
    const { position } = this.state
    return (
      <button
        data-role="button"
        style={styles}
        className={classes}
        onClick={this.handleClick}
      >
        click me
        <span className="ripple" style={position} ref={this.rippleRef} />
      </button>
    )
  }
  render() {
    return this.renderButton()
  }
}
export default Button
