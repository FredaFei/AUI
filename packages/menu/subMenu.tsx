import * as React from 'react'
import {ReactNode, useContext, useEffect, useRef} from "react";
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
}

const SubMenu: React.FunctionComponent<Props> = props => {
  const { disabled, name } = props
  const [visible, setVisible] = useState(false)
  const refDiv = useRef<HTMLDivElement>(null)
  const { layout, namePath, isMenuItemClick } = useContext(MenuContext)
  useEffect(() => {
    if (layout === 'horizontal' && isMenuItemClick) {
      setVisible(false)
    }
  }, [namePath])

  const onNavTitleClick = () => {
    if (disabled) {return}
    setVisible(prevState => !prevState)
  }
  const active = () => namePath.includes(name as string)

  const vertical = layout === 'vertical'
  return (
    <div className={classes(sc(''), props.className, { active: active(), visible, vertical, disabled })}
         style={props.style}>
      <div className={classes(sc('label'), { active: active(), visible })} onClick={onNavTitleClick}>
        <span className={sc('title')}>{props.title}</span>
        <span className={classes(sc('icon'), { visible, vertical })}><Icon name="right"/></span>
      </div>
      <div className={classes(sc('popover'), { visible, vertical })} ref={refDiv}>{props.children}</div>
    </div>
  )
}

SubMenu.displayName = componentName
SubMenu.defaultProps = {
  disabled: false
}

export default SubMenu
