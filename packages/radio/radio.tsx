import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import './style'

export interface IProps {
  className?: string
  style?: React.CSSProperties
  checked?: boolean
  disabled?: boolean
  checkedValue?: any
  value?: any
  name?: string
  onClick?: React.MouseEventHandler
}
interface IState {
  position: object
  selected: boolean
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
    this.state = { position: {}, selected: props.checked || false }
  }
  public onRippleEffect = (e: React.MouseEvent): any => {
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
  public onRadioClick = (e: React.MouseEvent): any => {
    const { disabled, onClick } = this.props
    if (disabled) {
      return false
    }
    this.onRippleEffect(e)
    console.log(e.target)
    // this.setState(state => ({ selected: !state.selected }))
    onClick && (onClick as React.MouseEventHandler)(e)
  }
  public onInputChange = (e: React.MouseEvent) => {
    e.preventDefault()
    if (this.state.selected) {
      return false
    }
    console.log(e.target)
    this.setState(state => ({ selected: !state.selected }))
  }
  renderRadio = () => {
    const { position, selected } = this.state
    const { disabled, style, className, value, name, checkedValue } = this.props
    const styles = Object.assign({}, { ...style })
    const radioWrapClass = classNames(componentName, 'wrapper', [className], {
      disabled
    })
    const buttonBodyClass = classNames('radio-body', [selected && 'active'])
    return (
      <label
        data-role={componentName}
        style={styles}
        className={radioWrapClass}
      >
        <span
          className={buttonBodyClass}
          ref={this.radioBodyElement}
          onClick={this.onRadioClick}
        >
          <input type="radio" value={value} name={name} checked={value === checkedValue} />
          <span
            className="ripple"
            style={position}
            ref={this.rippleElement}
          />
        </span>
        <span
          className={classNames('radio-inner')}
          onClick={this.onInputChange}
        >
          {value}
        </span>
      </label>
    )
  }
  render() {
    return this.renderRadio()
  }
}
export default Radio
