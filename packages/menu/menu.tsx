import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'

import './style'

const componentName = 'Menu'
const sc = createScopedClasses(componentName)

export interface IProps extends IStyledProps{
}

const Menu: React.FunctionComponent<IProps> = props => {

  return (
    <div className={sc('wrapper')}>
      {props.children}
    </div>
  )
}

Menu.displayName = componentName
Menu.defaultProps = {
}
Menu.propTypes = {}

export default Menu
