import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import scrollbarWidth from './scrollbar-width'
import './style'
import {UIEventHandler, useEffect, useRef, useState,} from "react";
import {TouchEventHandler} from "react";

const componentName = 'Scroll'
const sc = createScopedClasses(componentName)

export interface IProps extends IStyledProps {
  onPullUp?: () => void
  onPullDown?: () => void
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

  const [translateY, _setTranslateY] = useState(0)

  const setTranslateY = (y: number) => {
    if (pullDownRef.current) {
      if (y < 0) {y = 0}
      if (y > 150) {y = 150}
    }
    if (y < -150 && pullUpRef.current) {y = 0}
    console.log(1);
    console.log(y);
    console.log(2);
    _setTranslateY(y)
  }

  const lastYRef = useRef(0)
  const moveCountRef = useRef(0)
  const pullDownRef = useRef<boolean>(false)
  const pullUpRef = useRef<boolean>(false)

  const onTouchStart: TouchEventHandler = (e) => {
    if (e.touches.length > 1) {return }
    const scrollTop = containerRef.current!.scrollTop
    if (scrollTop === 0) { pullDownRef.current = true}
    lastYRef.current = e.touches[0].clientY
    moveCountRef.current = 0
  }
  const onTouchMove: TouchEventHandler = (e) => {
    const deltaY = e.touches[0].clientY - lastYRef.current
    console.log(deltaY);
    moveCountRef.current += 1

    if (moveCountRef.current === 1 && deltaY < 0) {
      // 上拉
      pullDownRef.current = false
      pullUpRef.current = true
      // return
    }
    if (!pullDownRef.current) {return}
    setTranslateY(lastYRef.current + deltaY)
    lastYRef.current = e.touches[0].clientY
  }
  const onToucheEnd: TouchEventHandler = () => {
    console.log(`pullDownRef.current ${pullDownRef.current}`);
    console.log(`pullUpRef.current ${pullUpRef.current}`);
    if (pullDownRef.current) {
      setTranslateY(0)
      props.onPullDown && props.onPullDown()
      pullDownRef.current = false
    }
    if (pullUpRef.current) {
      setTranslateY(0)
      props.onPullUp && props.onPullUp()
      pullUpRef.current = false
    }
  }
  return (
    <div className={classes(sc('wrapper'), props.className)} {...rest}>
      <div className={sc('inner')} style={{
        right: -scrollbarWidth(), transform: `translateY(${translateY}px)`
      }}
           ref={containerRef}
           onTouchStart={onTouchStart}
           onTouchMove={onTouchMove}
           onTouchEnd={onToucheEnd}
           onScroll={onScroll}>
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
