import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import {MenuContext} from './menu'
import './style'
import {useContext} from 'react';

const componentName = 'MenuItem'
const sc = createScopedClasses(componentName)

export interface Props extends StyledProps {
  name: string
  disabled?: boolean
}

const MenuItem: React.FunctionComponent<Props> = props => {
  const { name, disabled } = props
  const { layout, updateSelected, selectedKey } = useContext(MenuContext)

  const onMenuItemClick = () => {
    if (disabled) {return}
    updateSelected!(name, true)
  }
  return (
    <div className={classes(sc(''), props.className, { active: selectedKey === name, vertical: layout === 'vertical', disabled })}
         style={props.style} onClick={onMenuItemClick}>
      {props.children}
    </div>
  )
}

MenuItem.displayName = componentName
MenuItem.defaultProps = {
  disabled: false
}

export default MenuItem
