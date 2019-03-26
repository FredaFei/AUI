import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import './style'

type ColProps = {
  gutter?: number
  span?: number
  offset?: number
  style?: React.CSSProperties
  className?: string
}
type RowProps = {
  className?: string
  style?: React.CSSProperties
  gutter?: number
}
const componentName = 'Row'
class Row extends React.Component<RowProps> {
  public static defaultProps = {
    gutter: 0
  }
  public static propTypes = {
    gutter: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string
  }
  constructor(props: RowProps) {
    super(props)
  }
  render() {
    const { style, gutter, className, children, ...rest } = this.props
    const styles = Object.assign(
      {},
      {
        marginLeft: `${-gutter! / 2}px`,
        marginRight: `${-gutter! / 2}px`,
        ...style
      }
    )
    const rowWrapClass = classNames(componentName, [className])

    return (
      <div data-role="row" style={styles} className={rowWrapClass} {...rest}>
        {React.Children.map(children, child => {
          return React.cloneElement(child as React.ReactElement<ColProps>, {
            gutter
          })
        })}
      </div>
    )
  }
}
export default Row
