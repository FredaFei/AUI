import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow, mount} from 'enzyme'

import Input from '../input'
// import Icon from "../../icon/icon";

describe('测试 Input 以下行为', () => {
  it('Input 存在', () => {
    const json = renderer.create(<Input/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Input type/errorPosition/labelPosition 默认值分别为 text、right、top', () => {
    const wrapper = mount(<Input/>)
    expect(wrapper.props().type).toEqual('text')
    expect(wrapper.props().errorPosition).toEqual('right')
    expect(wrapper.props().labelPosition).toEqual('top')
  })
  it('Input 设置 size', () => {
    const wrapper = mount(<Input size="big"/>)
    expect(wrapper.props().size).toEqual('big')
    expect(wrapper.find('.am-input-wrapper').hasClass('am-input-big')).toEqual(true)
    wrapper.setProps({size: 'small'})
    expect(wrapper.props().size).toEqual('small')
    expect(wrapper.find('.am-input-wrapper').hasClass('am-input-small')).toEqual(true)
  })
  it('Input 设置 type', () => {
    const wrapper = mount(<Input type="number"/>)
    expect(wrapper.props().type).toEqual('number')
    expect(wrapper.find('.am-input[type="number"]').exists()).toEqual(true)
    wrapper.setProps({type: 'password'})
    expect(wrapper.props().type).toEqual('password')
    expect(wrapper.find('.am-input[type="password"]').exists()).toEqual(true)
  })
  it('Input 设置 label & labelPosition', () => {
    const wrapper = mount(<Input label="用户名" labelPosition="left"/>)
    expect(wrapper.props().label).toEqual('用户名')
    expect(wrapper.props().labelPosition).toEqual('left')
  })
  it('Input 设置 error & errorPosition', () => {
    const wrapper = mount(<Input label="用户名" labelPosition="left" error="用户名不能为空" errorPosition="right" type="text"/>)
    expect(wrapper.props().error).toEqual('用户名不能为空')
    expect(wrapper.props().errorPosition).toEqual('right')
    wrapper.setProps({error: ''})
    expect(wrapper.props().error).toEqual('')
  })

  // TODO： 事件待完善
  it('Input 设置 onEnter、onKeyDown、onChange 事件', () => {
    const onChange = jest.fn()
    const onEnter = jest.fn()
    const onKeyDown = jest.fn()
    const wrapper = mount(<Input value='hello' onChange={onChange} onEnter={onEnter} onKeyDown={onKeyDown}/>)
    wrapper.props().onEnter()
    wrapper.props().onKeyDown()
    const input = wrapper.find('input')
    input.simulate('change', {target: {value: 'new value'}})
    input.simulate('keypress', {key: 'Enter'})
    input.simulate('keypress', {key: 'Alt'})
    expect(onChange).toHaveBeenCalled();
    expect(onEnter).toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
  })
  it('Input 设置 before & after', () => {
    const wrapper = mount(<Input before="test-before" after="test-after"/>)
    expect(wrapper.props().before).toEqual('test-before')
    expect(wrapper.props().after).toEqual('test-after')
    expect(wrapper.find('.am-input-before').exists()).toEqual(true)
    expect(wrapper.find('.am-input-after').exists()).toEqual(true)
  })
  it('Input 设置 addOnBefore & addOnAfter', () => {
    const wrapper = mount(<Input addOnBefore="test-before" addOnAfter="test-after"/>)
    expect(wrapper.props().addOnBefore).toEqual('test-before')
    expect(wrapper.props().addOnAfter).toEqual('test-after')
    expect(wrapper.find('.am-input-add-on-before').exists()).toEqual(true)
    expect(wrapper.find('.am-input-add-on-after').exists()).toEqual(true)
  })
  it('Input 设置 自定义类名', () => {
    const wrapper = shallow(<Input className="test"/>)
    expect(wrapper.find('.am-input').hasClass('test')).toBe(true)
  })
  it('Input 设置 自定义样式', () => {
    const wrapper = shallow(<Input style={{color: 'red'}}/>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})