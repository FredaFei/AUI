import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow, mount} from 'enzyme'

import Col from '../col'
import Row from "../row";

describe('测试 Row 以下行为', () => {
  it('Row 存在', () => {
    const json = renderer.create(<Row>Row-12</Row>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Row 设置 align,gutter,verticalAlign 默认值分别为left，0，top', () => {
    const wrapper = mount(
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>)
    expect(wrapper.props().align).toEqual('left')
    expect(wrapper.props().gutter).toEqual(0)
    expect(wrapper.props().verticalAlign).toEqual('top')
  })
  it('Row 设置 align', () => {
    const wrapper = mount(
      <Row align="right" verticalAlign="center">
        <Col span={12}>
          <div style={{height: '160px'}}>col-12-1</div>
        </Col>
        <Col span={4}>
          <div style={{height: '80px'}}>col-4-1</div>
        </Col>
      </Row>)
    expect(wrapper.props().align).toEqual('right')
    expect(wrapper.find('.am-row').hasClass('am-row-align-right')).toEqual(true)
  })
  it('Row 设置 verticalAlign', () => {
    const wrapper = mount(
      <Row align="right" verticalAlign="center">
        <Col span={12}>
          <div style={{height: '160px'}}>col-12-1</div>
        </Col>
        <Col span={4}>
          <div style={{height: '80px'}}>col-4-1</div>
        </Col>
      </Row>)
    expect(wrapper.props().verticalAlign).toEqual('center')
    expect(wrapper.find('.am-row').hasClass('am-row-verticalAlign-center')).toEqual(true)
  })
  it('Row 设置 gutter', () => {
    const wrapper = mount(
      <Row gutter={10}>
        <Col span={6}>
          <div>col-6</div>
        </Col>
        <Col span={6}>
          <div>col-6</div>
        </Col>
        <Col span={6}>
          <div>col-6</div>
        </Col>
        <Col span={6}>
          <div>col-6</div>
        </Col>
      </Row>)
    expect(wrapper.props().gutter).toEqual(10)
    expect(wrapper.find('.am-col-gutter').length).toBe(4)
  })

  it('Row 设置 自定义类名', () => {
    const wrapper = shallow(<Row className="test">Row-12</Row>)
    expect(wrapper.find('.am-row').hasClass('test')).toBe(true)
  })
  it('Row 设置 自定义样式', () => {
    const wrapper = shallow(<Row style={{color: 'red'}}>Row-12</Row>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})