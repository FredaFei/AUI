import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow, mount} from 'enzyme'

import Button from '../button'
import ButtonGroup from '../buttonGroup'

describe('测试 ButtonGroup 以下行为', () => {
  it('ButtonGroup 存在', () => {
    const json = renderer.create(
      <ButtonGroup>
        <Button icon="left"></Button>
        <Button>1</Button>
        <Button icon="right"></Button>
      </ButtonGroup>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('ButtonGroup 子组件不是Button组件时', () => {
    const wrapper = mount(
      <ButtonGroup>hello</ButtonGroup>
    )
    expect(wrapper.find('.am-buttonGroup').text()).toEqual('')
  })
  it('ButtonGroup 设置 自定义类名', () => {
    const wrapper = shallow(
      <ButtonGroup className="hello">
        <Button icon="left"></Button>
        <Button>1</Button>
        <Button icon="right"></Button>
      </ButtonGroup>
    )
    expect(wrapper.find('.am-buttonGroup').hasClass('hello')).toBe(true)
  })
  it('ButtonGroup 设置 自定义样式', () => {
    const wrapper = renderer.create(
      <ButtonGroup className="hello" style={{borderColor: 'red'}}>
        <Button icon="left"></Button>
        <Button>1</Button>
        <Button icon="right"></Button>
      </ButtonGroup>
    ).toJSON()
    expect(wrapper).toMatchSnapshot()
  });
})