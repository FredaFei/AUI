import * as React from "react"
import {range} from '../utils/collection'
import classes, {createScopedClasses} from '../utils/classnames'
import {useEffect, useRef, useState,TouchEventHandler} from "react";
import Item, {Props as PropsItem} from './carouselItem'

const componentName = 'Carousel'
const sc = createScopedClasses(`${componentName.toLocaleLowerCase()}`)

import './style'

interface Props extends IStyledProps {
  animation?: 'slide' | 'fade'
  indicator?: indicator
  duration?: number
  autoPlay?: boolean
}

interface indicator {
  position?: 'left' | 'top' | 'bottom' | 'right'
  style?: 'number' | 'circle'
}

interface Touch {
  clientX: number
  clientY: number
}

const initTouch = { clientX: 0, clientY: 0 }

const Carousel: React.FunctionComponent<Props> = props => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [direction, setDirection] = useState<string>('')
  const [prev, setPrev] = useState<number>(0)
  const viewRef = useRef<HTMLDivElement>(null)
  const { className, animation, indicator, autoPlay, duration, ...rest } = props

  const timer = useRef<number | undefined>(undefined)
  const max = useRef<number>(0)

  useEffect(() => {
    return pause
  }, [])
  useEffect(() => {
    playAutomatically()
  }, [currentIndex])

  const pause = () => {
    window.clearTimeout(timer.current);
    timer.current = undefined
  }
  const play = (next: number) => {
    if (next === currentIndex) {return}
    let dir = next > currentIndex ? 'forward' : 'backward'
    if (next >= max.current) {
      dir = 'forward'
      next = 0
    }
    if (next < 0) {next = max.current - 1}
    setPrev(currentIndex)
    setDirection(dir)
    setCurrentIndex(next)
  }
  const playAutomatically = () => {
    if (!autoPlay) {return}
    if (timer.current) {pause()}
    const run = () => {
      play(currentIndex + 1)
      timer.current = setTimeout(run, duration)
    }
    timer.current = setTimeout(run, duration)
  }
  const [startTouch, setStartTouch] = useState<Touch>(initTouch)

  const onTouchStart: TouchEventHandler = (e) => {
    pause()
    if (e.touches.length > 1) {return }
    const { clientX, clientY } = e.touches[0]
    setStartTouch({ clientX, clientY })
  }
  const onTouchEnd: TouchEventHandler = (e) => {
    let { clientX: x1, clientY: y1 } = startTouch;
    let { clientX: x2, clientY: y2 } = e.changedTouches[0];
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let deltaY = Math.abs(y2 - y1);
    let rate = distance / deltaY;
    if (rate > 2) {
      if (x2 > x1) {
        play(currentIndex - 1)
      } else {
        play(currentIndex + 1)
      }
    }
  }
  const renderCarsouselItem = () => {
    const nodes = React.Children.map(props.children, (child, index) => {
      const element = child as React.ReactElement<PropsItem | {}>
      return element.type === Item && React.cloneElement(element, {
        current: index === currentIndex,
        prev: index === prev && prev !== currentIndex,
      })
    })
    max.current = nodes.length
    return nodes
  }

  const renderDots = () => {
    const cls = `position-${indicator!.position} style-${indicator!.style}`
    return range(0, max.current - 1).map(index => (
      <span className={classes('dot', cls, index === currentIndex && 'active')} key={index} onClick={() => play(index)}>
        {indicator!.style === 'number' ? index + 1 : ''}
      </span>
    ))
  }
  const dotsClass = `position-${indicator!.position} style-${indicator!.style}`
  return <div className={classes(sc('wrapper'), className)} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
    <div className={sc('view', animation && `${animation}`, direction && `${direction}`)} {...rest} ref={viewRef}>{renderCarsouselItem()}</div>
    <div className={classes(sc('dots'), dotsClass)}>{renderDots()}</div>
  </div>
}
export default Carousel
Carousel.defaultProps = {
  animation: 'slide',
  autoPlay: false,
  indicator: {
    position: 'bottom',
    style: 'circle'
  },
  duration: 2000
}
