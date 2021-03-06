import * as React from 'react'
import Aside from './aside'
import classes, { createScopedClasses } from '../utils/classnames'

const componentName = 'Layout'
const sc = createScopedClasses(componentName)

interface Props extends StyledProps {}

const Layout: React.FunctionComponent<Props> = props => {
  const { className, children, ...rest } = props
  const childrenArray = children as Array<React.ReactElement>
  const hasAside = childrenArray.some(child => child.type === Aside)
  return (
    <div className={classes(sc('', { hasAside }), className)} {...rest}>
      {children}
    </div>
  )
}

Layout.displayName = componentName
export default Layout
