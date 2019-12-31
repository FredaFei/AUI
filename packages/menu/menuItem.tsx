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
  visible?: boolean
  onSelect?: (value: string) => any
  onClose?: (value: boolean) => any
}

const MenuItem: React.FunctionComponent<Props> = props => {
  const {name, onClose, disabled} = props
  const {layout, updateSelected, selectedKey} = useContext(MenuContext)


  const onMenuItemClick = () => {
    if (disabled) {return}
    onClose && onClose(false)
    updateSelected!(name)
  }
  return (
    <div className={classes(sc(''), props.className,
      {active: selectedKey === name, vertical: layout === 'vertical', disabled})}
         style={props.style} onClick={onMenuItemClick}>
      {props.children}
    </div>
  )
}

MenuItem.displayName = componentName
MenuItem.defaultProps = {}
MenuItem.propTypes = {}

export default MenuItem
