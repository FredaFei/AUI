import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import './style'

interface IProps {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  style?: React.CSSProperties
  className?: string
  onChange?: (checked: boolean, e: React.MouseEvent<HTMLElement>) => any
}
interface IState {
  checked: boolean
}
const componentName = 'Switch'

class Switch extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      checked: props.defaultChecked || props.checked || false
    }
  }
  onClick = e => {
    console.log(e)
    const { disabled, onChange } = this.props
    if (disabled) {
      return false
    }
    this.setState(state => ({ checked: !state.checked }))
    onChange && onChange(this.state.checked, e)
  }
  render() {
    const {
      defaultChecked,
      checked,
      disabled,
      style,
      className,
      onChange
    } = this.props
    const active = this.state.checked && 'active'
    const disabled = disabled && 'disabled'
    const classes = classNames(componentName, [className], { active, disabled })
    const styles = Object.assign({}, style)
    return (
      <label className={classes} style={styles} onClick={this.onClick}>
        <span className={classNames('switch-core', { active, disabled })} />
        {/* <span className="ripple" /> */}
      </label>
    )
  }
}
Switch.defaultProps = {
  disabled: false,
  checked: false
}
Switch.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
}
export default Switch
