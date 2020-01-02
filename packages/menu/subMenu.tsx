import * as React from 'react'
import {ReactNode, useContext, useEffect, useRef} from "react";
import classes, {createScopedClasses} from '../utils/classnames'
import {MenuContext} from './menu'

import './style'
import Icon from "../icon/icon"
import ClickOutside from '../clickOutside/clickOutside'
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
  const {disabled, name} = props
  const [visible, setVisible] = useState(false)
  const refDiv = useRef<HTMLDivElement>(null)
  const {layout, namePath} = useContext(MenuContext)
  useEffect(() => {
    // setVisible(open || false)
    // return ()=>{
    //   setVisible(false)
    //   close()
    // }
  }, [])

  const onNavTitleClick = () => {
    if (disabled) {return}
    setVisible(prevState => !prevState)
  }

  const close = () => {
    // todo hover
    layout !== 'vertical' && setVisible(false)
  }
  const active = () => namePath.includes(name as string)

  const vertical = layout === 'vertical'

  return (

    <ClickOutside handler={close} exclude={refDiv}>
      <div className={classes(sc(''), props.className, {active: active(), visible,vertical,disabled })}
           style={props.style}>
        <div className={classes(sc('label'), {active: active(), visible})} onClick={onNavTitleClick}>
          <span className={sc('title')}>{props.title}</span>
          <span className={classes(sc('icon'), {visible,vertical})}><Icon
            name="right"/></span>
        </div>
        <div
          className={classes(sc('popover'), {visible, vertical})} ref={refDiv}>{props.children}</div>
      </div>
    </ClickOutside>
  )
}

SubMenu.displayName = componentName
SubMenu.defaultProps = {}

export default SubMenu
