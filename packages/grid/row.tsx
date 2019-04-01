import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils'
import { IProps as IColProps } from './col'
import './style'

interface IProps {
  className?: string
  style?: React.CSSProperties
  gutter?: number
}
const componentName = 'Row'
class Row extends React.Component<IProps> {
  public static defaultProps = {
    gutter: 0
  }
  public static propTypes = {
    gutter: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string
  }
  constructor(props: IProps) {
    super(props)
  }
  render() {
    const { style, gutter, className, children } = this.props
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
      <div data-role={componentName} style={styles} className={rowWrapClass}>
        {React.Children.map(children, child => {
          return React.cloneElement(child as React.ReactElement<IColProps>, {
            gutter
          })
        })}
      </div>
    )
  }
}
export default Row
