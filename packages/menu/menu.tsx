import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'

import './style'
import {useRef, useEffect, useState} from "react";

const componentName = 'Menu'
const sc = createScopedClasses(componentName)

export interface Props extends StyledProps {
  selected: string
  layout?: 'horizontal' | 'vertical'
  onChange?: (value: string) => void
}

interface Items {
  [key: string]: { hasChild: any; parents: any }
}

interface Context {
  selectedKey: string
  items: Items
  namePath: string[]
  isMenuItemClick: boolean
  layout?: Props['layout']
  updateSelected: (value:string,isItemClick:boolean)=>void
  updateNamePath: Props['onChange']
}


export const MenuContext = React.createContext<Context>({
  items: {}, namePath: [], layout: 'horizontal', selectedKey: '',
  isMenuItemClick: false,
  updateSelected: (value:string,isItemClick:boolean)=>{},
  updateNamePath: (name: string) => {},
});

const Menu: React.FunctionComponent<Props> = props => {
  const { layout, selected, onChange } = props

  const [selectedKey, setSelectedKey] = useState('')
  const [namePath, _setNamePath] = useState<string[]>([])
  const isMenuItemClick = useRef<boolean>(false)
  const items = useRef<Items>({})

  useEffect(() => {
    React.Children.map(props.children, child => {
      getItems(child as React.ReactElement)
    })
    const defaultSelected = 'selected' in props ? selected : ''
    setNamePath(defaultSelected)
    setSelectedKey(defaultSelected as string)
  }, [])

  const getItems = (element: React.ReactElement, parents?: string) => {
    const { name, children } = element.props
    items.current[name] = items.current[name] || {}
    if (Array.isArray(children)) {
      items.current[name].parents = parents
      items.current[name].hasChild = true
      children.map(item => getItems(item, name))
    } else {
      items.current[name] = { hasChild: false, parents: parents || '' }
    }
  }
  const updateSelectedKey = (name: string,isItemClick:boolean) => {
    setSelectedKey(name)
    setNamePath(name)
    isMenuItemClick.current = isItemClick
    onChange && onChange(name)
  }
  const setNamePath = (name: string) => {
    let _namePath = []
    if (!items.current[name]['hasChild']) {
      _namePath = []
      close()
    }
    let parent = items.current[name]['parents']
    while (parent) {
      _namePath.unshift(parent)
      parent = items.current[parent]['parents']
    }
    _setNamePath(_namePath)
  }

  return (
    <MenuContext.Provider value={{
      selectedKey, items: items.current, namePath,
      layout, isMenuItemClick: isMenuItemClick.current,
      updateSelected: updateSelectedKey,
      updateNamePath: setNamePath
    }}>
      <div className={classes(sc('wrapper'), `${layout}`, props.className)} style={props.style}>
        {props.children}
      </div>
    </MenuContext.Provider>
  )
}

Menu.displayName = componentName
Menu.defaultProps = {
  layout: 'horizontal'
}

export default Menu
