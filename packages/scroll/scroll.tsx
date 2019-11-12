import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import scrollbarWidth from './scrollbar-width'
import './style'
import {UIEventHandler, useEffect, useRef, useState,} from "react";

const componentName = 'Scroll'
const sc = createScopedClasses(componentName)

export interface IProps extends IStyledProps {
}

// todo
// 下拉刷新上拉加载
const Scroll: React.FunctionComponent<IProps> = props => {
  const [barHeight, setBarHeight] = useState(0)
  const [barTop, _setBarTop] = useState(0)
  const [barVisible, setBarVisible] = useState(false)
  const { children, className, ...rest } = props

  const timeIdRef = useRef<number | null>(null)
  const setBarTop = (top: number) => {
    if (top < 0) {return}
    const scrollHeight = containerRef.current!.scrollHeight
    const viewHeight = containerRef.current!.getBoundingClientRect().height
    const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight
    if (top > maxBarTop) {return}
    _setBarTop(top);
  }
  const onScroll: UIEventHandler = () => {
    const scrollHeight = containerRef.current!.scrollHeight
    const scrollTop = containerRef.current!.scrollTop
    const viewHeight = containerRef.current!.getBoundingClientRect().height
    setBarTop(scrollTop * viewHeight / scrollHeight)
    setBarVisible(true)
    if (timeIdRef.current) {clearTimeout(timeIdRef.current)}
    timeIdRef.current = window.setTimeout(() => {
      setBarVisible(false)
    }, 300)
  };
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const scrollHeight = containerRef.current!.scrollHeight
    const viewHeight = containerRef.current!.getBoundingClientRect().height
    setBarHeight(viewHeight * viewHeight / scrollHeight)
  }, [])

  const firstBarTopRef = useRef(0)
  const firstRef = useRef(0)
  const draggingRef = useRef(false)
  const onMouseDownBar = (e: MouseEvent) => {
    console.log(e);
    draggingRef.current = true
    firstRef.current = e.clientY
    firstBarTopRef.current = barTop
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - firstRef.current
      const newBarTop = firstBarTopRef.current + delta
      setBarTop(newBarTop); // 可能存在滚动条拖动和内容滚动更新不一致的问题
      const scrollHeight = containerRef.current!.scrollHeight
      const viewHeight = containerRef.current!.getBoundingClientRect().height
      containerRef.current!.scrollTop = scrollHeight * newBarTop / viewHeight
    }
  };
  const onMouseUpBar = () => {
    draggingRef.current = false
  };
  const onSelect = (e: Event) => {
    if (draggingRef.current) {e.preventDefault()}
  }
  useEffect(() => {
    document.addEventListener('mouseup', onMouseUpBar)
    document.addEventListener('mousemove', onMouseMoveBar)
    document.addEventListener('selectstart', onSelect)
    return () => {
      document.removeEventListener('mouseup', onMouseUpBar)
      document.removeEventListener('mousemove', onMouseMoveBar)
      document.removeEventListener('selectstart', onSelect)
    }
  }, [])
  return (
    <div className={classes(sc('wrapper'), props.className)} {...rest}>
      <div className={sc('inner')} style={{ right: -scrollbarWidth() }} ref={containerRef} onScroll={onScroll}>
        {children}
      </div>
      <div className={sc('track')}>
        {barVisible &&
        <div className={sc('bar')} style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
             onMouseDown={() => onMouseDownBar}></div>
        }
      </div>
    </div>
  )
}
Scroll.displayName = componentName
Scroll.defaultProps = {}
export default Scroll
