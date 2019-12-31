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
  [key:string]: Array<any>
}

interface Context {
  selectedKey: string
  items: Items
  namePath: string[]
  visible: boolean
  layout?: Props['layout']
  updateSelected: Props['onChange']
  toggleVisible: () => void
}

export const MenuContext = React.createContext<Context>({
  items: {}, namePath: [], layout: 'horizontal', selectedKey: '',
  visible: false,
  toggleVisible: () => {},
  updateSelected: (name: string) => {},
});

const Menu: React.FunctionComponent<Props> = props => {
  const {layout, selected, onChange} = props

  const [selectedKey, setSelectedKey] = useState('')
  const [visible, setVisible] = useState(false)

  const items = useRef<Items>({})
  const namePath = useRef<string[]>([])

  useEffect(() => {
    const defaultSelected = 'selected' in props ? selected : ''
    setSelectedKey(defaultSelected as string)

    React.Children.map(props.children, child => {
      // const element = child as React.ReactElement
      // xx(child as React.ReactElement)
      console.log(items.current)
    })
  }, [])

  // const xx = (element: React.ReactElement) => {
  //   console.log(element)
  //   const {name, children} = element.props
  //   // Array.isArray(children) && xx(children)
  //   items.current[name] = items.current[name] || []
  //   if (Array.isArray(children)) {
  //     items.current[name] = [name,null]
  //     // children.map(item=>xx(item))
  //   } else {
  //     items.current[name] = [false,null]
  //   }
  // }
  const updateSelectedKey = (name: string) => {
    setSelectedKey(name)
    onChange && onChange(name)
    // todo 是否有后代节点
    // toggleVisible()
    // namePath.current = []
  }
  const toggleVisible = () => {
    setVisible((prevState) => !prevState)
  }


  return (
    <MenuContext.Provider value={{
      selectedKey, items: items.current, namePath: namePath.current,
      layout, visible, toggleVisible,
      updateSelected: updateSelectedKey
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
