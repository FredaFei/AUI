import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

const componentName = 'Col'
const sc = createScopedClasses(componentName)
export interface IProps extends IStyledProps {
  gutter?: number
  span?: number
  offset?: number
}
class Col extends React.Component<IProps> {
  static displayName = componentName
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
  constructor(props: IProps) {
    super(props)
  }
  renderCol = () => {
    const { gutter, span, offset, className, style, children } = this.props
    const styles = Object.assign(
      {},
      {
        paddingLeft: `${gutter! / 2}px`,
        paddingRight: `${gutter! / 2}px`,
        ...style
      }
    )
    const colWrapClass = classes(sc(''), [
      className,
      gutter && `row-gutter`,
      `col-span-${span}`,
      `col-offset-${offset}`
    ])
    return (
      <div data-role={componentName} style={styles} className={colWrapClass}>
        {children}
      </div>
    )
  }
  render() {
    return this.renderCol()
  }
}
export default Col
