import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'

const componentName = 'Aside'
const sc = createScopedClasses(componentName)

interface Props extends StyledProps { }

const Aside: React.FunctionComponent<Props> = props => {
  const { className, ...rest } = props
  return (
    <div className={classes(sc(''), className)} {...rest}>
      {props.children}
    </div>
  )
}
Aside.displayName = componentName
export default Aside