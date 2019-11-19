import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'
import './style'
import {Props as PaneProps} from './pane'
import {useEffect, useRef, useState} from "react";

const componentName = 'Collapse'
const sc = createScopedClasses(componentName)

interface Props extends IStyledProps {
  activeKey?: string[]
  defaultActiveKey?: string[]
  accordion?: boolean
  expandIcon?: (active: boolean) => React.ReactNode
  onChange?: (key: string, e: React.MouseEvent<HTMLElement>) => any
}

type Selected = Array<string>

const Collapse: React.FunctionComponent<Props> = props => {
  const [selected, setSelected] = useState<Selected>([])
  const initializingRef = useRef<boolean>(true)
  const {className, defaultActiveKey, activeKey, accordion, expandIcon} = props

  useEffect(() => {
    if (!initializingRef.current) {return}
    const selected = 'defaultActiveKey' in props ? defaultActiveKey : 'activeKey' in props ? activeKey : []
    setSelected(selected as Selected)
  }, [])
  const keysRef = useRef<Selected>([])

  const handleClick = (key: string, e: React.MouseEvent<HTMLElement>, disabled: boolean): any => {
    if (disabled) {return false}
    let copyDefaultKeys = [...selected]
    let index = copyDefaultKeys.indexOf(key)
    if (index >= 0) {
      //close
      copyDefaultKeys.splice(index, 1)
    } else {
      // open
      if (accordion) {
        copyDefaultKeys = [key]
      } else {
        copyDefaultKeys.push(key)
      }
    }

    initializingRef.current = false
    setSelected(copyDefaultKeys)
    props.onChange && props.onChange(key, e)
  }
  const renderExpandIcon = (active: boolean) => {
    return expandIcon ? expandIcon(active) :
      <Icon name="right" className={classes('am-icon-animation', active ? 'active' : '')}/>
  }
  const renderCollapseHead = () => {
    console.log(props.children)
    return React.Children.map(props.children as any[], (child: React.ReactElement<PaneProps>) => {
        if (!child) {return false}
        console.log(child);
        const {visibleIcon, disabled, header, name} = child.props
        const active = selected.includes(name)
        keysRef.current.push(name)
        return <div key={name} className={classes(sc('item'), {disabled, active})}>
          <div className={sc('item-name')}
               onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(name, e, disabled || false)}>
            {visibleIcon && renderExpandIcon(active)}
            {header}
          </div>
          <div className={sc('item-content')}>
            {!disabled && React.cloneElement(child as React.ReactElement<PaneProps>, {})}
          </div>
        </div>
      }
    )
  }
  return <div data-role={componentName}
              className={classes(sc('wrapper'), className)}>{renderCollapseHead()}</div>
}

Collapse.displayName = componentName
Collapse.defaultProps = {
  accordion: false
}

export default Collapse
