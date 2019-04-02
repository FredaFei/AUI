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
  onChange?: (key: string) => any
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
  public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value || []
      }
    }
    return null
  }
  public componentDidUpdate(nextProps: IProps, prevState: IState) {
    const { defaultValue } = nextProps
    const { checkedValue } = prevState
    console.log(defaultValue)
    console.log(checkedValue)
  }
  public onGroupClick = value => {
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
            return React.cloneElement(child, {
              onChange: this.onGroupClick,
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
