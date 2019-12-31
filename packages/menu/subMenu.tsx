import * as React from 'react'
import {ReactNode, useContext} from "react";
import classes, {createScopedClasses} from '../utils/classnames'
import {MenuContext} from './menu'

import './style'
import Icon from "../icon/icon"
import {useState} from "react";

const componentName = 'SubMenu'
const sc = createScopedClasses(componentName)

export interface Props extends StyledProps {
  name: string
  title: string | ReactNode
  disabled?: boolean
  selectedKey?: string
}

const SubMenu: React.FunctionComponent<Props> = props => {
  const { disabled, name } = props
  const [visible, setVisible] = useState(false)
  const { layout, namePath, open } = useContext(MenuContext)
  const onNavTitleClick = () => {
    if (disabled) {return}
    setVisible(prevState => !prevState)
  }

  const active = () => namePath.includes(name as string)
  return (
    <div className={classes(sc(''), props.className, { open, visible,disabled })} style={props.style}>
      <div className={classes(sc('label'), { active: active() })} onClick={onNavTitleClick}>
        <span className={sc('title')}>{props.title}</span>
        <span className={sc('icon')}><Icon name="right"/></span>
      </div>
      <div
        className={classes(sc('popover'), { active: visible, vertical: layout === 'vertical' })}>{props.children}</div>
    </div>
  )
}

SubMenu.displayName = componentName
SubMenu.defaultProps = {}

export default SubMenu
