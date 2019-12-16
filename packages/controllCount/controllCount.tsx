import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'

import './style'
import {useEffect, useRef, useState} from "react";
import {FocusEventHandler} from "react";

const componentName = 'ControllCount'
const sc = createScopedClasses(componentName)

interface Props extends StyledProps {
  count?: number
  maxCount?: number
  minCount?: number
  readOnly?: boolean
  onChange?: (count: number) => void
}

const ControllCount: React.FunctionComponent<Props> = props => {
  const [stateCount, setStateCount] = useState(1)

  const inputRef = useRef<HTMLInputElement>(null)
  const {count, minCount, maxCount, onChange, readOnly, ...rest} = props

  useEffect(() => {
    const defaultCount = 'count' in props ? count : 1
    setStateCount(defaultCount as number)
    inputRef.current!.value = defaultCount + ''
  }, [])
  const computedNum = (val: number) => {
    if (!validateCount(val, true)) {return}
    const currentCount = stateCount + val
    setStateCount(()=>currentCount)
    inputRef.current!.value = currentCount + ''
    onChange && onChange(currentCount)
  }
  const validateCount = (val: number, isBtnClick?: boolean) => {
    if (isBtnClick) {
      if (val < 0 && stateCount === minCount) {return}
      if (val > 0 && stateCount >= maxCount!) {return}
    } else {
      if (val === 0) {return}
      if (val > maxCount!) {return}
    }
    return true
  }
  const onBlur: FocusEventHandler = (e) => {
    const value = +(e.target as HTMLInputElement).value
    if (!/^\d+$/.test(value.toString())) {
      inputRef.current!.value = stateCount + ''
      return
    }
    if (!validateCount(value)) {
      inputRef.current!.value = stateCount + ''
      return
    }
    setStateCount(()=>value)
    onChange && onChange(value)
  }
  return (
    <div className={sc('')} {...rest}>
      <button className={classes(sc('btn', 'next'), {disabled: stateCount <= 1})} onClick={() => computedNum(-1)}>-
      </button>
      <input type="text" ref={inputRef} onBlur={onBlur} readOnly={readOnly}/>
      <button className={classes(sc('btn', 'next'), {disabled: stateCount >= maxCount!})}
              onClick={() => computedNum(1)}>+
      </button>
    </div>
  )
}

ControllCount.displayName = componentName
ControllCount.defaultProps = {
  count: 1,
  minCount: 1,
  readOnly: false,
  maxCount: 10,
}

export default ControllCount
