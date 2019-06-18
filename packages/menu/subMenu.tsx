import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'

import './style'

const componentName = 'SubMenu'
const sc = createScopedClasses(componentName)

export interface IProps extends IStyledProps{
}

const SubMenu: React.FunctionComponent<IProps> = props => {

  return (
    <div className={sc('wrapper')}>
      {props.children}
    </div>
  )
}

SubMenu.displayName = componentName
SubMenu.defaultProps = {
}
SubMenu.propTypes = {}

export default SubMenu
