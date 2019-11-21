import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'

const componentName = 'Main'
const sc = createScopedClasses(componentName)

interface IProps extends StyledProps {}

const Main: React.FunctionComponent<IProps> = props => {
  const { className, ...rest } = props
  return (
    <div className={classes(sc(''), className)} {...rest}>
      {props.children}
    </div>
  )
}
Main.displayName = componentName
export default Main
