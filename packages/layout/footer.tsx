import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'

const componentName = 'Footer'
const sc = createScopedClasses(componentName)

interface Props extends StyledProps { }

const Footer: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={classes(sc(''), className)} {...rest}>
      {props.children}
    </div>
  )
}
Footer.displayName = componentName
export default Footer