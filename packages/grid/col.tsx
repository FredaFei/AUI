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
const componentName = 'Col'
class Col extends React.Component<ColProps> {
  public static defaultProps = {
    span: 0,
    offset: 0,
    gutter: 0
  }
  public static propTypes = {
    gutter: PropTypes.number,
    span: PropTypes.number,
    offset: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string
  }
  constructor(props: ColProps) {
    super(props)
  }
  renderCol = () => {
    const {
      gutter,
      span,
      offset,
      className,
      style,
      children,
      ...rest
    } = this.props
    const styles = Object.assign(
      {},
      {
        paddingLeft: `${gutter! / 2}px`,
        paddingRight: `${gutter! / 2}px`,
        ...style
      }
    )
    const colWrapClass = classNames(componentName, [
      className,
      `col-span-${span}`,
      `col-offset-${offset}`
    ])
    return (
      <div data-role="col" style={styles} className={colWrapClass} {...rest}>
        {children}
      </div>
    )
  }
  render() {
    return this.renderCol()
  }
}
export default Col
