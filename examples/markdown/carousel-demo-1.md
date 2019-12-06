``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <div className="exp-section">
      <Carousel style={{height: 300}} autoPlay>
        <CarouselItem style={{background: '#66e2d5', color: '#fff', fontSize: '20px'}}>page 1</CarouselItem>
        <CarouselItem style={{background: 'yellow', color: '#fff', fontSize: '20px'}}>page 2</CarouselItem>
        <CarouselItem style={{background: 'pink', color: '#fff', fontSize: '20px'}}>page 3</CarouselItem>
        <CarouselItem style={{background: 'rgb(64, 169, 243)', color: '#fff', fontSize: '20px'}}>page 4</CarouselItem>
      </Carousel>
    </div>
  )
}
```