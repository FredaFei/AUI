```html
<div>
  <ButtonGroup>
    <Button onClick={() => changeStyle('circle')}>Circle</Button>
    <Button onClick={() => changeStyle('number')}>Number</Button>
  </ButtonGroup>
  <Carousel style={{height: 300, marginTop: '20px'}} indicator={state.indicator}>
    <CarouselItem style={{background: 'rgb(64, 169, 243)', color: '#fff', fontSize: '20px'}}>page 1</CarouselItem>
    <CarouselItem style={{background: 'green', color: '#fff', fontSize: '20px'}}>page 2</CarouselItem>
    <CarouselItem style={{background: '#66e2d5', color: '#fff', fontSize: '20px'}}>page 3</CarouselItem>
    <CarouselItem style={{background: 'pink', color: '#fff', fontSize: '20px'}}>page 4</CarouselItem>
  </Carousel>
</div>
```
```javascript
  import * as React from 'react'
  import {useReducer} from "react"
  
  const initState = {
    animation: 'slide',
    indicator: {
      style: 'circle',
      position: 'top'
    }
  }
  function reducer(state, action) {
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
  const [state, dispatch] = useReducer(reducer, initState)
  const changeStyle = (style) => {
    dispatch({ type: 'changeStyle', style })
  }
```