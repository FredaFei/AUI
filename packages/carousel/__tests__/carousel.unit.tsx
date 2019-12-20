import * as renderer from 'react-test-renderer'
import React from 'react'
import {mount} from 'enzyme'

import Carousel from '../index'
import CarouselItem from '../carouselItem'

describe('测试 Carousel 以下行为', () => {
  it('Carousel 存在', () => {
    const json = renderer.create(<Carousel style={{ height: 300 }}>
      <CarouselItem style={{ background: '#66e2d5', color: '#fff', fontSize: '20px' }}>page 1</CarouselItem>
      <CarouselItem style={{ background: 'yellow', color: '#fff', fontSize: '20px' }}>page 2</CarouselItem>
    </Carousel>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Carousel 默认属性 animation/autoPlay/duration/indicator', () => {
    const wrapper = mount(<Carousel style={{ height: 300 }}>
      <CarouselItem style={{ background: '#66e2d5', color: '#fff', fontSize: '20px' }}>page 1</CarouselItem>
      <CarouselItem style={{ background: 'yellow', color: '#fff', fontSize: '20px' }}>page 2</CarouselItem>
    </Carousel>)
    expect(wrapper.props().animation).toEqual('slide')
    expect(wrapper.props().autoPlay).toEqual(false)
    expect(wrapper.props().duration).toEqual(2000)
    expect(JSON.stringify(wrapper.props().indicator)).toEqual(JSON.stringify({ position: 'bottom', style: 'circle' }))
  })
  it('Carousel 设置 autoPlay', () => {
    const wrapper = mount(<Carousel style={{ height: 300 }} autoPlay>
      <CarouselItem style={{ background: '#66e2d5', color: '#fff', fontSize: '20px' }}>page 1</CarouselItem>
      <CarouselItem style={{ background: 'yellow', color: '#fff', fontSize: '20px' }}>page 2</CarouselItem>
    </Carousel>)
    expect(wrapper.props().autoPlay).toEqual(true)
  })
  it('Carousel 设置 indicator', () => {
    const wrapper = mount(<Carousel style={{ height: 300 }} indicator={{ position: 'left', style: 'number' }}>
      <CarouselItem style={{ background: '#66e2d5', color: '#fff', fontSize: '20px' }}>page 1</CarouselItem>
      <CarouselItem style={{ background: 'yellow', color: '#fff', fontSize: '20px' }}>page 2</CarouselItem>
    </Carousel>)
    console.log(wrapper.props().indicator);
    expect(JSON.stringify(wrapper.props().indicator)).toEqual(JSON.stringify({ position: 'left', style: 'number' }))
  })
  it('Carousel 设置 duration', () => {
    const wrapper = mount(<Carousel style={{ height: 300 }} duration={3000}>
      <CarouselItem style={{ background: '#66e2d5', color: '#fff', fontSize: '20px' }}>page 1</CarouselItem>
      <CarouselItem style={{ background: 'yellow', color: '#fff', fontSize: '20px' }}>page 2</CarouselItem>
    </Carousel>)
    expect(wrapper.props().duration).toEqual(3000)
  })
  it('Carousel 设置 animation', () => {
    const wrapper = mount(<Carousel style={{ height: 300 }} animation="fade">
      <CarouselItem style={{ background: '#66e2d5', color: '#fff', fontSize: '20px' }}>page 1</CarouselItem>
      <CarouselItem style={{ background: 'yellow', color: '#fff', fontSize: '20px' }}>page 2</CarouselItem>
    </Carousel>)
    expect(wrapper.props().animation).toEqual('fade')
  })
})