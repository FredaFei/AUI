import * as React from 'react'
// import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

const componentName = 'ClickOutside'
const sc = createScopedClasses(componentName)
export interface IProps extends IStyledProps {
}

const ClickOutside: React.FunctionComponent<IProps> = props => {
  const {  className, style, children } = props
  return (
    <div data-role={componentName} style={style} className={classes(sc(),className)}>
      {children}
    </div>
  )
}

ClickOutside.displayName = componentName
ClickOutside.defaultProps = {
}

export default ClickOutside
