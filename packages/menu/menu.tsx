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
  open: boolean
  layout?: Props['layout']
  updateSelected: Props['onChange']
  updateNamePath: Props['onChange']
  close: () => void
}

export const MenuContext = React.createContext<Context>({
  items: {}, namePath: [], layout: 'horizontal', selectedKey: '',
  open: false,
  close: () => {},
  updateSelected: (name: string) => {},
  updateNamePath: (name: string) => {},
});

const Menu: React.FunctionComponent<Props> = props => {
  const {layout, selected, onChange} = props

  const [selectedKey, setSelectedKey] = useState('')
  const [open, setOpen] = useState(false)
  const [namePath, _setNamePath] = useState<string[]>([])
  // const openRef = useRef<boolean>(false)

  const items = useRef<Items>({})

  useEffect(() => {
    React.Children.map(props.children, child => {
      getItems(child as React.ReactElement)
      console.log(items.current)
    })
    const defaultSelected = 'selected' in props ? selected : ''
    setNamePath(defaultSelected)
    setSelectedKey(defaultSelected as string)
  }, [])

  const getItems = (element: React.ReactElement, parents?: string) => {
    console.log(element)
    const {name, children} = element.props
    items.current[name] = items.current[name] || {}
    if (Array.isArray(children)) {
      items.current[name].parents = parents
      items.current[name].hasChild = true
      children.map(item => getItems(item, name))
    } else {
      items.current[name] = {hasChild: false, parents: parents || ''}
    }
  }
  const updateSelectedKey = (name: string) => {
    setSelectedKey(name)
    onChange && onChange(name)
    // todo 是否有后代节点
    setNamePath(name)
    // toggleVisible()
    // namePath.current = []
  }
  const setNamePath = (name: string) => {
    console.log(name);
    // console.log(namePath);
    console.log(items.current);
    console.log('hasChild');
    console.log(items.current[name]['hasChild'])
    let _namePath = []
    if (!items.current[name]['hasChild']) {
      console.log('nochild');
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
  const close = () => {
    setOpen(false)
  }


  return (
    <MenuContext.Provider value={{
      selectedKey, items: items.current, namePath,
      layout, open, close,
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
