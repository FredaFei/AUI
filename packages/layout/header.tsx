import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'

const componentName = 'Header'
const sc = createScopedClasses(componentName)

interface IProps extends StyledProps { }

const Header: React.FunctionComponent<IProps> = props => {
  const { className, ...rest } = props
  return (
    <div className={classes(sc(''), className)} {...rest}>
      {props.children}
    </div>
  )
}
Header.displayName = componentName
export default Header