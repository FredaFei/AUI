import * as React from 'react'
import * as PropTypes from 'prop-types'
import { isSimpleArrayEqual, classNames } from '../utils'
import './style'
import { IProps as ICheckboxProps } from './checkbox'

interface IProps {
  className?: string
  style?: React.CSSProperties
  value?: string[]
  defaultValue?: string[]
  onChange?: (values: string, e: React.MouseEvent<HTMLElement>) => any
}
interface IState {
  checkedValue: string[]
}
const componentName = 'CheckboxGroup'
class CheckboxGroup extends React.Component<IProps, IState> {
  public static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object
  }
  constructor(props: IProps) {
    super(props)
    this.state = { checkedValue: props.defaultValue || props.value || [] }
  }
  getChildContext() {
    return {
      checkboxGroup: { value: this.state.checkedValue, parent: componentName }
    }
  }
  static childContextTypes = {
    checkboxGroup: PropTypes.any
  }
  public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    const { value } = nextProps
    const { checkedValue } = prevState
    if (!('value' in nextProps)) {
      return null
    } else if (value instanceof Array && checkedValue instanceof Array) {
      if (!isSimpleArrayEqual(value, checkedValue)) {
        return { checkedValue: value }
      }
    }
    return null
  }
  public onToggle = (value: string) => {
    const { onChange } = this.props
    const copyValue = [...this.state.checkedValue]
    const index = copyValue.indexOf(value)
    if (index >= 0) {
      copyValue.splice(index, 1)
    } else {
      copyValue.push(value)
    }
    this.setState({ checkedValue: copyValue })
    onChange && onChange(copyValue)
  }
  renderGroup = () => {
    const { style, className, children } = this.props
    const { checkedValue } = this.state
    const styles = Object.assign({}, { ...style })
    const classes = classNames(componentName, 'wrapper', [className])
    return (
      <div data-role={componentName} style={styles} className={classes}>
        {React.Children.map(
          children,
          (child: React.ReactElement<ICheckboxProps>) => {
            console.log(child)
            console.log(children)
            return React.cloneElement(child, {
              onChange: this.onToggle,
              checked: checkedValue.includes(child.props.value)
            })
          }
        )}
      </div>
    )
  }
  render() {
    return this.renderGroup()
  }
}
export default CheckboxGroup
