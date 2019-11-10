import * as React from 'react'
import {Carousel, CarouselItem, Button, ButtonGroup} from '../packages/index'
import {useReducer} from "react";

type Position = 'left' | 'top' | 'bottom' | 'right'
type Animation = 'slide' | 'fade'
type Style = 'number' | 'circle'

interface State {
  animation?: Animation,
  indicator: {
    style?: Style,
    position?: Position
  }
}

interface Action {
  type: string
  position?: Position
  animation?: Animation
  style?: Style
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changePosition':
      return { ...state, indicator: { ...state.indicator, position: action.position } }
      break
    case 'changeAnimation':
      return { ...state, animation: action.animation }
      break
    case 'changeStyle':
      return { ...state, indicator: { ...state.indicator, style: action.style } }
      break
    default:
      return state
      break
  }
}

const initState: State = {
  animation: 'slide',
  indicator: {
    style: 'circle',
    position: 'top'
  }
}
export default function (props: any) {
  const [state, dispatch] = useReducer(reducer, initState)
  const changePosition = (position: Position) => {
    dispatch({ type: 'changePosition', position })
  }
  const changeAnimation = (animation: Animation) => {
    dispatch({ type: 'changeAnimation', animation })
  }
  const changeStyle = (style: Style) => {
    dispatch({ type: 'changeStyle', style })
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Carousel style={{ height: 300 }} autoPlay>
          <CarouselItem style={{ background: '#66e2d5', color: '#fff', fontSize: '20px' }}>page 1</CarouselItem>
          <CarouselItem style={{ background: 'yellow', color: '#fff', fontSize: '20px' }}>page 2</CarouselItem>
          <CarouselItem style={{ background: 'pink', color: '#fff', fontSize: '20px' }}>page 3</CarouselItem>
          <CarouselItem style={{ background: 'rgb(64, 169, 243)', color: '#fff', fontSize: '20px' }}>page
            4</CarouselItem>
        </Carousel>
      </div>
      <div className="exp-section">
        <h3>轮播风格</h3>
        <ButtonGroup>
          <Button onClick={() => changeAnimation('slide')}>Slide</Button>
          <Button onClick={() => changeAnimation('fade')}>Fade</Button>
        </ButtonGroup>
        <Carousel style={{ height: 300, marginTop: '20px' }} animation={state.animation} autoPlay>
          <CarouselItem style={{ background: 'green', color: '#fff', fontSize: '20px' }}>page 1</CarouselItem>
          <CarouselItem style={{ background: '#66e2d5', color: '#fff', fontSize: '20px' }}>page 2</CarouselItem>
          <CarouselItem style={{ background: 'pink', color: '#fff', fontSize: '20px' }}>page 3</CarouselItem>
          <CarouselItem style={{ background: 'rgb(64, 169, 243)', color: '#fff', fontSize: '20px' }}>page
            4</CarouselItem>
        </Carousel>
      </div>
      <div className="exp-section">
        <h3>下标风格</h3>
        <ButtonGroup>
          <Button onClick={() => changeStyle('circle')}>Circle</Button>
          <Button onClick={() => changeStyle('number')}>Number</Button>
        </ButtonGroup>
        <Carousel style={{ height: 300, marginTop: '20px' }} indicator={state.indicator}>
          <CarouselItem style={{ background: 'rgb(64, 169, 243)', color: '#fff', fontSize: '20px' }}>page
            1</CarouselItem>
          <CarouselItem style={{ background: 'green', color: '#fff', fontSize: '20px' }}>page 2</CarouselItem>
          <CarouselItem style={{ background: '#66e2d5', color: '#fff', fontSize: '20px' }}>page 3</CarouselItem>
          <CarouselItem style={{ background: 'pink', color: '#fff', fontSize: '20px' }}>page 4</CarouselItem>
        </Carousel>
      </div>
      <div className="exp-section">
        <h3>下标位置</h3>
        <ButtonGroup>
          <Button onClick={() => changePosition('top')}>Top</Button>
          <Button onClick={() => changePosition('bottom')}>Bottom</Button>
          <Button onClick={() => changePosition('left')}>Left</Button>
          <Button onClick={() => changePosition('right')}>Right</Button>
        </ButtonGroup>
        <Carousel style={{ height: 300, marginTop: '20px' }} indicator={state.indicator}>
          <CarouselItem style={{ background: 'pink', color: '#fff', fontSize: '20px' }}>page 1</CarouselItem>
          <CarouselItem style={{ background: 'green', color: '#fff', fontSize: '20px' }}>page 2</CarouselItem>
          <CarouselItem style={{ background: '#66e2d5', color: '#fff', fontSize: '20px' }}>page 3</CarouselItem>
          <CarouselItem style={{ background: 'rgb(64, 169, 243)', color: '#fff', fontSize: '20px' }}>page
            4</CarouselItem>
        </Carousel>
      </div>
    </div>
  )
}