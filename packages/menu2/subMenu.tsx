import * as React from 'react'
import {ReactNode, useRef} from "react";
import classes, {createScopedClasses} from '../utils/classnames'

import './style'
import Icon from "../icon/icon"

const componentName = 'SubMenu'
const sc = createScopedClasses(componentName)

export interface Props extends StyledProps {
  name: string
  title: string | ReactNode
  visible?: boolean
  disabled?: boolean
  vertical?: string
  onSelect?: (value: string) => any
  onClose?: (value: boolean) => any
  layout?: 'horizontal' | 'inline' | 'vertical'
  selectedKey?: string
}

/**
 * todo
 * 多层嵌套
 * */
const SubMenu: React.FunctionComponent<Props> = props => {
  const {onSelect, layout, selectedKey, visible, onClose,disabled} = props

  const childNames = useRef<string[]>([])

  console.log(`sub visible ${visible}`)
  const onNavTitleClick = () => {
    if(disabled){return}
    onClose && onClose(!visible)
  }

  const active = () => childNames.current.includes(selectedKey as string)
  const renderChildren = () => {
    const children = React.Children.map(props.children, child => {
      const element = child as React.ReactElement
      if (!element.type) {return null}
      const name = element.props.name as string
      !childNames.current.includes(name) && childNames.current.push(name)

      return React.cloneElement(child as React.ReactElement, {
        layout,
        selectedKey,
        onSelect, onClose
      })
    })
    return <div className={classes(sc('popover'), {active: visible,vertical: layout === 'vertical'})}>{children}</div>
  }


  return (
    <div className={classes(sc(''), props.className,{visible,disabled})} style={props.style}>
      <div className={classes(sc('label'), {active: active()})} onClick={onNavTitleClick}>
        <span className={sc('title')}>{props.title}</span>
        <span className={sc('icon')}><Icon name="right"/></span>
      </div>
      {renderChildren()}
    </div>
  )
}

SubMenu.displayName = componentName
SubMenu.defaultProps = {}
SubMenu.propTypes = {}

export default SubMenu
