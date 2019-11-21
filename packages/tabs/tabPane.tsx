import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

const componentName = 'TabPane'
const sc = createScopedClasses(componentName)

export interface Props extends StyledProps {
  tab: React.ReactNode
  key?: string
  active?: boolean
  disabled?: boolean
}

const TabPane:React.FunctionComponent<Props>=props=>{
  const { className, active, key, children, ...rest } = props
  return (
    <li data-role={componentName} key={key} className={classes(sc('pane-item', { active }), className)} {...rest}>
      {children}
    </li>
  )
}

TabPane.displayName = componentName
TabPane.defaultProps = {}

export default TabPane
