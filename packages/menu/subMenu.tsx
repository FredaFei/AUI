import * as React from 'react'
import {ReactNode, useContext} from "react";
import classes, {createScopedClasses} from '../utils/classnames'
import {MenuContext} from './menu'

import './style'
import Icon from "../icon/icon"

const componentName = 'SubMenu'
const sc = createScopedClasses(componentName)

export interface Props extends StyledProps {
  name: string
  title: string | ReactNode
  disabled?: boolean
  selectedKey?: string
}

const SubMenu: React.FunctionComponent<Props> = props => {
  const {disabled} = props

  const {layout, namePath, selectedKey, visible,toggleVisible} = useContext(MenuContext)

  // const close = () => {
  // }
  const onNavTitleClick = () => {
    if (disabled) {return}
    toggleVisible()
  }

  const active = () => namePath.includes(selectedKey as string)

  return (
    <div className={classes(sc(''), props.className, {visible, disabled})} style={props.style}>
      <div className={classes(sc('label'), {active: active()})} onClick={onNavTitleClick}>
        <span className={sc('title')}>{props.title}</span>
        <span className={sc('icon')}><Icon name="right"/></span>
      </div>
      <div className={classes(sc('popover'), {active: visible, vertical: layout === 'vertical'})}>{props.children}</div>
    </div>
  )
}

SubMenu.displayName = componentName
SubMenu.defaultProps = {}

export default SubMenu
