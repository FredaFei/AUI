import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import './style'
import {useEffect, useRef, useState} from "react";

const componentName = 'Switch'
const sc = createScopedClasses(componentName)

interface Props extends StyledProps {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean, e: React.MouseEvent<HTMLElement>) => any
}

const initPosition = {
  width: '',
  height: '',
  marginLeft: '',
  marginTop: ''
}

interface Position {
  [key: string]: string
}

const Switch: React.FunctionComponent<Props> = props => {
  const [position, setPosition] = useState<Position>(initPosition)
  const [currentSelected, setCurrentSelected] = useState(false)
  const {defaultChecked, checked, disabled, onChange, style, className} = props

  const isActive = (currentSelected || checked) && 'active'
  const isDisabled = disabled && 'disabled'
  const wrapperClass = classes(sc('', isActive, isDisabled), className)

  const rippleParentRef = useRef<HTMLSpanElement>(null)
  const rippleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const selected = 'defaultChecked' in props ? defaultChecked : 'checked' in props ? checked : false
    setCurrentSelected(selected as boolean)
  }, [])
  useEffect(() => {
    'checked' in props && setCurrentSelected(checked as boolean)
    return () => {}
  }, [checked])

  const onRippleEffect = (): any => {
    const targetEl = rippleParentRef.current
    const rippleEl = rippleRef.current
    rippleEl!.classList.remove('active')
    const {width} = targetEl!.getBoundingClientRect()
    setPosition({
      width: `${width * 2}px`,
      height: `${width * 2}px`,
      marginLeft: `-${width}px`,
      marginTop: `-${width}px`
    })
    rippleEl!.classList.add('active')
  }
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    const {disabled} = props
    if (disabled) {return}
    if (checked) {return}
    onRippleEffect()
    setCurrentSelected(() => !currentSelected)
    onChange && onChange(!currentSelected, event)
  }

  return <label className={wrapperClass} style={style} onClick={onClick}>
        <span className={classes(sc('core'), [isActive])} ref={rippleParentRef}>
          <span className={classes(sc('ripple'), [isActive])} style={position} ref={rippleRef}/>
        </span>
  </label>
}

export default Switch
