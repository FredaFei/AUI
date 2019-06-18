import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'

import './style'

const componentName = 'MenuItem'
const sc = createScopedClasses(componentName)

export interface IProps extends IStyledProps{
}

const MenuItem: React.FunctionComponent<IProps> = props => {

  return (
    <div className={sc('wrapper')}>
      {props.children}
    </div>
  )
}

MenuItem.displayName = componentName
MenuItem.defaultProps = {
}
MenuItem.propTypes = {}

export default MenuItem
