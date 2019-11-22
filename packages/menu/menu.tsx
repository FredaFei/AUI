import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'

import './style'
import {useEffect, useRef, useState} from "react";

const componentName = 'Menu'
const sc = createScopedClasses(componentName)

export interface Props extends StyledProps {
  selected?: string
  layout?: 'horizontal' | 'inline' | 'vertical'
  onSelect?: (value: string) => any
}

const Menu: React.FunctionComponent<Props> = props => {
  const {layout, onSelect, selected} = props

  const names = useRef<string[]>([])
  const [selectedKey, setSelectedKey] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const defaultSelected = 'selected' in props ? selected : names.current[0] ? names.current[0] : ''
    setSelectedKey(defaultSelected as string)
  }, [])

  const onUpdateSelect = (key: string) => {
    setSelectedKey(key)
    onSelect && onSelect(key as string)
  }
  // const close = ()=>{
  //   setVisible(false)
  // }
  const onClose = (key: boolean) => {
    setVisible(key)
  }
  const menuItem = React.Children.map(props.children, child => {
    const element = child as React.ReactElement
    if (!element.type) {return null}
    const name = element.props.name
    !names.current.includes(name) && names.current.push(name)
    return React.cloneElement(child as React.ReactElement, {
      layout,
      selectedKey,
      onSelect: onUpdateSelect,
      onClose,
      visible
    })
  })
  return (
    <div className={classes(sc('wrapper'), `${layout}`, props.className)} style={props.style}>
      {menuItem}
    </div>
  )
}

Menu.displayName = componentName
Menu.defaultProps = {
  layout: 'horizontal'
}
Menu.propTypes = {}

export default Menu
