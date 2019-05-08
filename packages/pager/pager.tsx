import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

const componentName = 'Pager'
const sc = createScopedClasses(componentName)
export interface IProps extends IStyledProps {}

const Pager: React.FunctionComponent<IProps> = props => {
  const { children, className, ...rest } = props
  return (
    <div className={classes(sc('wrapper'), className)} {...rest}>
      pager
    </div>
  )
}
Pager.displayName = componentName
export default Pager
