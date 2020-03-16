import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'

const componentName = 'Header'
const sc = createScopedClasses(componentName)

interface Props extends StyledProps { }

const Header: React.FunctionComponent<Props> = props => {
  const { className, ...rest } = props
  return (
    <div className={classes(sc(''), className)} {...rest}>
      {props.children}
    </div>
  )
}
Header.displayName = componentName
export default Header