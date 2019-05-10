import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import Col, { IProps as IColProps } from './col'
import './style'

const componentName = 'Row'
const sc = createScopedClasses(componentName)
interface IProps extends IStyledProps {
  gutter?: number
  align?: 'left' | 'right' | 'center' | 'spaceBetween' | 'spaceAround'
  verticalAlign?: 'top' | 'center' | 'bottom'
}
class Row extends React.Component<IProps> {
  static displayName = componentName
  public static defaultProps = {
    gutter: 0,
    align: 'left',
    verticalAlign: 'top'
  }
  public static propTypes = {
    gutter: PropTypes.number,
    align: PropTypes.oneOf([
      'left',
      'right',
      'center',
      'spaceBetween',
      'spaceAround'
    ]).isRequired,
    verticalAlign: PropTypes.oneOf(['top', 'center', 'bottom']).isRequired
  }
  constructor(props: IProps) {
    super(props)
  }
  render() {
    console.log(this.props.children)
    const { style, gutter, align, verticalAlign, className } = this.props
    const styles = Object.assign(
      {},
      {
        marginLeft: `${-gutter! / 2}px`,
        marginRight: `${-gutter! / 2}px`,
        ...style
      }
    )
    const rowWrapClass = classes(
      sc(
        '',
        align !== 'left' && `align-${align}`,
        verticalAlign !== 'top' && `verticalAlign-${verticalAlign}`
      ),
      className
    )
    const col = React.Children.map(this.props.children, child => {
      const element = child as React.ReactElement<IColProps | {}>
      return element.type === Col
        ? React.cloneElement(element, {
            gutter
          })
        : element
    }).filter(i => i)
    return (
      <div data-role={componentName} style={styles} className={rowWrapClass}>
        {col}
      </div>
    )
  }
}
export default Row
