import * as React from 'react'
// import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

const componentName = 'Col'
const sc = createScopedClasses(componentName)
export interface IProps extends IStyledProps {
  gutter?: number
  span?: number
  offset?: number
}

const Col: React.FunctionComponent<IProps> = props => {
  const { gutter, span, offset, className, style, children } = props
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

Col.displayName = componentName
Col.defaultProps = {
  span: 0,
  offset: 0,
  gutter: 0
}

export default Col
