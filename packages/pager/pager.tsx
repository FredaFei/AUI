import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import {range} from '../utils/collection'
import Icon from '../icon/icon'
import Input from '../input/input'
import './style'
import {useEffect, useRef, useState} from "react";

const componentName = 'Pager'
const sc = createScopedClasses(componentName)

interface Props extends IStyledProps {
  current?: number
  defaultCurrent?: number
  total: number
  visibleQuickJumper?: boolean
  onChange?: (page: number) => any
}

const Pager: React.FunctionComponent<Props> = props => {
  const {visibleQuickJumper, className, style} = props
  const [index, setIndex] = useState<number>(1)
  const initializingRef = useRef<boolean>(true)

  const onClickItem = (page: number) => {
    if (page <= props.total && page >= 1) {
      initializingRef.current = false
      setIndex(page)
      props.onChange && props.onChange(page)
    }
  }
  const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    const page = input.value
    input.value = ''
    if (/^\d+$/.test(page)) {
      initializingRef.current = false
      setIndex(parseInt(page) > props.total ? props.total : parseInt(page))
    }
  }

  useEffect(() => {
    if (!initializingRef.current) {return}
    const page = 'defaultCurrent' in props ? props.defaultCurrent : props.current ? props.current : 1
    setIndex(page as number)

  })
  const jumpPages = (index: number): number => {
    const prev = index - 5 <= 0 ? 1 : index - 5
    const next = index + 5 >= props.total ? props.total : index + 5
    return index === 1 ? prev : next
  }
  const items = () => {
    return range(1, props.total)
      .filter(i => i === 1 || i === props.total || Math.abs(i - index) <= 2)
      .reduce(
        (prev, next) => {
          const last = prev[prev.length - 1]
          const x = last !== -1 && last - next < -1
          return prev.concat(x ? [-1, next] : [next])
        },
        [] as number[]
      )
      .map((item, i) => item === -1 ?
          (<li key={`pager-split-${i}`} className={sc('list-item', 'split')} onClick={() => onClickItem(jumpPages(i))}><span>...</span></li>)
            : (<li key={`pager-item-${i}`} className={sc('list-item', {'list-item-active': index === item})} onClick={() => onClickItem(item)}>{item}</li>)
      )
  }

  return (
    <div className={classes(sc('wrapper'), className)} style={style}>
      <span className={sc('prev', {disabled: index === 1})} onClick={() => onClickItem(index - 1)}>
        <Icon name="left"/>
      </span>
      <ul className={sc('list')}>{items()}</ul>
      <span className={sc('next', {disabled: index === props.total})} onClick={() => onClickItem(index + 1)}>
        <Icon name="right"/>
      </span>
      {visibleQuickJumper && (
        <span className={sc('quick-jump')}>跳至
          <Input className={sc('input-page')} type="text" onEnter={onInputEnter}/>页
        </span>
      )}
    </div>
  )
}

Pager.displayName = componentName
Pager.defaultProps = {}
export default Pager
