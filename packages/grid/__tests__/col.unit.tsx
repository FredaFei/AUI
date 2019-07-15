import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow, mount} from 'enzyme'

import Col from '../col'
import Row from "../row";

describe('测试 Col 以下行为', () => {
  it('Col 存在', () => {
    const json = renderer.create(<Col>col-12</Col>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Col 设置 span', () => {
    const wrapper = mount(<Col span={12}>col-12</Col>)
    expect(wrapper.find('.am-col').hasClass('am-col-span-12')).toEqual(true)
  })
  it('Col 设置 gutter', () => {
    const wrapper = mount(<Row gutter={10}>
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
    expect(wrapper.exists('.am-col-gutter')).toEqual(true)
  })
  it('Col 设置 span,gutter,offset 默认均为0', () => {
    const wrapper = mount(
      <Row>
        <Col>col-8</Col>
      </Row>)
    const {props} = wrapper.props().children
    expect(props.span).toEqual(0)
    expect(props.gutter).toEqual(0)
    expect(props.offset).toEqual(0)
  })
  it('Col 设置 offset', () => {
    const wrapper = mount(<Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>)
    const {props} = wrapper.props().children[0]
    expect(props.offset).toEqual(6)
    expect(wrapper.find('.am-col-offset-6').length).toEqual(2)
  })
  it('Col 设置 自定义类名', () => {
    const wrapper = shallow(<Col className="test">Col-12</Col>)
    expect(wrapper.find('.am-col').hasClass('test')).toEqual(true)
  })
  it('Col 设置 自定义样式', () => {
    const wrapper = shallow(<Col style={{color: 'red'}}>Col-12</Col>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})