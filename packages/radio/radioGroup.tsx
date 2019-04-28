import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import './style'
import { IProps as RadioProps } from './radio'

interface IProps {
  className?: string
  style?: React.CSSProperties
  value?: any
  defaultValue?: any
  name?: string
  onChange?: React.MouseEventHandler
}
interface IState {
  checkedValue: any
}
const componentName = 'RadioGroup'
class RadioGroup extends React.Component<IProps, IState> {
  public static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object
  }
  constructor(props: IProps) {
    super(props)
    this.state = { checkedValue: props.value || props.defaultValue || '' }
  }
  public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if (
      'defaultValue' in nextProps &&
      nextProps.defaultValue !== prevState.checkedValue
    ) {
      return { checkedValue: nextProps.defaultValue }
    }
    if ('value' in nextProps && nextProps.value !== prevState.checkedValue) {
      return { checkedValue: nextProps.value }
    }
    return null
  }

  public onGroupClick = (value: any) => {
    const { onChange } = this.props
    this.setState({ checkedValue: value })
    onChange && onChange(value)
  }
  renderRadioGroup = () => {
    const { style, className, name } = this.props
    const { checkedValue } = this.state
    const styles = Object.assign({}, { ...style })
    const classes = classNames(componentName, 'wrapper', [className])
    return (
      <div data-role={componentName} style={styles} className={classes}>
        {React.Children.map(
          this.props.children as any[],
          (child: React.ReactElement<RadioProps>) => {
            return React.cloneElement(child, {
              onClick: this.onGroupClick,
              name,
              checkedValue
            })
          }
        )}
      </div>
    )
  }
  render() {
    return this.renderRadioGroup()
  }
}
export default RadioGroup
