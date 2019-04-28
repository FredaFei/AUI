import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'

const componentName = 'Aside'
const sc = createScopedClasses(componentName)

interface IProps extends IStyledProps { }

const Aside: React.FunctionComponent<IProps> = props => {
  const { className, ...rest } = props
  return (
    <div className={classes(sc(''), className)} {...rest}>
      {props.children}
    </div>
  )
}
Aside.displayName = componentName
export default Aside 