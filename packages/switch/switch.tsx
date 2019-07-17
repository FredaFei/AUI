import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, {createScopedClasses} from '../utils/classnames'
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
  static defaultProps = {
    disabled: false,
    defaultChecked: false
  }
  static propTypes = {
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
  }
  _rippleElement: React.RefObject<HTMLSpanElement>
  _rippleParentElement: React.RefObject<HTMLLabelElement>

  constructor(props: IProps) {
    super(props)
    this._rippleElement = React.createRef()
    this._rippleParentElement = React.createRef()
    this.state = {
      checked: props.defaultChecked || false,
      position: {}
    }
  }

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if ('checked' in nextProps && nextProps.checked !== prevState.checked) {
      return {checked: nextProps.checked}
    }
    return null
  }

  onRippleEffect = (): any => {
    const targetEl = this._rippleParentElement.current
    const rippleEl = this._rippleElement.current
    rippleEl!.classList.remove('active')
    const {width} = targetEl!.getBoundingClientRect()
    this.setState({
      position: {
        width: `${width * 2}px`,
        height: `${width * 2}px`,
        marginLeft: `-${width}px`,
        marginTop: `-${width}px`
      }
    })
    rippleEl!.classList.add('active')
  }
  onClick = (event: React.MouseEvent<HTMLElement>): any => {
    const {disabled, onChange} = this.props
    if (disabled) {
      return false
    }
    this.onRippleEffect()
    this.setState(state => ({checked: !state.checked}))
    onChange && onChange(this.state.checked, event)
  }

  render() {
    const {position, checked} = this.state
    const {disabled, style, className} = this.props
    const isActive = checked && 'active'
    const isDisabled = disabled && 'disabled'
    const wrapperClass = classes(sc('', isActive, isDisabled), className)
    const styles = Object.assign({}, style)
    return (
      <label className={wrapperClass} style={styles} onClick={this.onClick}>
        <span
          className={classes(sc('core'), [isActive])}
          ref={this._rippleParentElement}
        >
          <span
            className={classes(sc('ripple'), [isActive])}
            style={position}
            ref={this._rippleElement}
          />
        </span>
      </label>
    )
  }
}

export default Switch
