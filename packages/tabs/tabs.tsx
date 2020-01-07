import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import TabPane, {Props as PaneProps} from './tabPane'
import './style'
import {useEffect, useRef, useState} from "react";

const componentName = 'Tabs'
const sc = createScopedClasses(componentName)

export interface Props extends StyledProps {
  activeKey?: string
  defaultActiveKey?: string
  lineWidthOrHeight?: string | number
  direction?: 'horizontal' | 'vertical'
  onChange?: (key: string) => any
}

interface Layout {
  key: string
  active?: boolean
}

type TLayout = (a: React.ReactElement<PaneProps>, b: Layout) => {}

const Tabs: React.FunctionComponent<Props> = props => {
  const [activeTabKey, setActiveTabKey] = useState<string>('')

  const {className, direction, lineWidthOrHeight, defaultActiveKey, activeKey, style} = props

  const keysRef = useRef<Array<string>>([])
  const lineRef = useRef<HTMLDivElement>(null)
  const tabsHeadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const active = 'defaultActiveKey' in props ? defaultActiveKey : 'activeKey' in props ? activeKey : (keysRef.current[0] || '')
    setActiveTabKey(active as string)
    calculateLineStyle(getCurrentTabsIndex(active as string))
  }, [])

  const getCurrentTabsIndex = (value: string): number => {
    const index = keysRef.current.indexOf(value)
    return index >= 0 ? index : 0
  }

  const calculateLineStyle = (index: number): any => {
    if (index < 0) {
      return false
    }
    const {direction} = props
    const lineElement = lineRef.current
    const tabsHeadElement = tabsHeadRef.current
    if (!lineElement || !tabsHeadElement || !tabsHeadElement.children) {
      return false
    }
    const el = tabsHeadElement.children[index]
    let {left: left1, top: top1} = tabsHeadElement.getBoundingClientRect()
    let {width, left: left2, height, top: top2} = el.getBoundingClientRect()

    const lineWidth = lineWidthOrHeight ? +lineWidthOrHeight : width
    const lineHeight = lineWidthOrHeight ? +lineWidthOrHeight : height
    if (direction === 'horizontal') {
      lineElement.style.width = `${lineWidth}px`
      lineElement.style.left = `${left2 - left1 + (width - lineWidth) / 2}px`
    } else {
      lineElement.style.height = `${lineHeight}px`
      lineElement.style.top = `${top2 - top1 + (height - lineHeight) / 2}px`
    }
  }

  const handleClick = (key: string, disabled: boolean): any => {
    if (disabled) {
      return false
    }
    setActiveTabKey(key)
    calculateLineStyle(getCurrentTabsIndex(key))
    props.onChange && props.onChange(key)
  }
  const renderTabsNav = (child: React.ReactElement, options: Layout) => {
    const itemClass = {
      disabled: child.props.disabled,
      active: options.active
    }
    return (
      <div
        data-role="tabsNavItem"
        key={`nav-${options.key}`}
        className={sc('nav-item', itemClass)}
        onClick={() => handleClick(options.key, child.props.disabled)}
      >{child.props.tab}</div>
    )
  }

  const renderTabsPane = (child: React.ReactElement, options: Layout) => {
    return React.cloneElement(child, {
      active: options.active
    })
  }
  const renderLayout = (layout: TLayout) => {
    const children = React.Children.map(props.children, child => {
      const element = child as React.ReactElement<PaneProps>
      if (element.type !== TabPane) {
        console.warn('Tabs 组件的子组件只能是 TabPane组件')
        return null
      }
      const key = element.key as string
      keysRef.current.push(key)
      return element.type === TabPane && layout(element, {key, active: activeTabKey === key})
    })
    return children.filter(i => i)
  }

  return (
    <div data-role={componentName} className={classes(sc('wrapper', {vertical: direction === 'vertical'}), className)}
         style={style}>
      <div className={sc('nav')} ref={tabsHeadRef}>
        {renderLayout(renderTabsNav)}
        <div className={sc('nav-line')} ref={lineRef}/>
      </div>
      <ul className="am-tabs-pane-body">
        {renderLayout(renderTabsPane)}
      </ul>
    </div>
  )
}

Tabs.displayName = componentName
Tabs.defaultProps = {
  direction: 'horizontal'
}
export default Tabs
