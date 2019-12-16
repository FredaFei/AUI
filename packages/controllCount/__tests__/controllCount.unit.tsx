import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow, mount} from 'enzyme'

import ControllCount from '../controllCount'

describe('测试 ControllCount 以下行为', () => {
  it('ControllCount 存在', () => {
    const json = renderer.create(<ControllCount/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('ControllCount count/maxCount/minCount/readOnly, 默认值', () => {
    const wrapper = mount(<ControllCount/>)
    expect(wrapper.props().count).toEqual(1)
    expect(wrapper.props().maxCount).toEqual(10)
    expect(wrapper.props().minCount).toEqual(1)
    expect(wrapper.props().readOnly).toEqual(false)
  })
  it('ControllCount 设置 count/maxCount/minCount/readOnly', () => {
    const wrapper = mount(<ControllCount count={4} maxCount={5} minCount={2} readOnly/>)
    expect(wrapper.props().count).toEqual(4)
    expect(wrapper.props().minCount).toEqual(2)
    expect(wrapper.props().maxCount).toEqual(5)
    expect(wrapper.props().readOnly).toEqual(true)
  })

  it('ControllCount 设置 button click,触发 onChange 事件', () => {
    const onChange = jest.fn()
    const wrapper = mount(<ControllCount count={4} onChange={onChange}/>)
    const button1 = wrapper.find('button').at(0)
    const button2 = wrapper.find('button').at(1)
    button1.simulate('click')
    expect(onChange).toHaveBeenCalled();
    button2.simulate('click')
    expect(onChange).toHaveBeenCalled();
  })
  it('ControllCount 设置 button click,不触发 onChange 事件', () => {
    const onChange = jest.fn()
    const wrapper = mount(<ControllCount count={1} onChange={onChange}/>)
    const button1 = wrapper.find('button').at(0)
    button1.simulate('click')
    expect(onChange).not.toHaveBeenCalled();
  })
  it('ControllCount 设置 button click,不触发 onChange 事件', () => {
    const onChange = jest.fn()
    const wrapper = mount(<ControllCount count={10} onChange={onChange}/>)
    const button2 = wrapper.find('button').at(1)
    expect(onChange).not.toHaveBeenCalled();
    button2.simulate('click')
    expect(onChange).not.toHaveBeenCalled();
  })
  it('ControllCount 不触发 onChange 事件', () => {
    const onChange = jest.fn()
    const wrapper = mount(<ControllCount count={4} onChange={onChange} minCount={1} maxCount={10}/>)
    const input = wrapper.find('input')
    input.simulate('blur', {target: {value: 'new value'}})
    expect(onChange).not.toHaveBeenCalled();
    input.simulate('blur', {target: {value: '0'}})
    expect(onChange).not.toHaveBeenCalled();
    input.simulate('blur', {target: {value: '12'}})
    expect(onChange).not.toHaveBeenCalled();
    input.simulate('blur', {target: {value: '2'}})
    expect(onChange).toHaveBeenCalled();
  })

  it('ControllCount 设置 自定义类名', () => {
    const wrapper = shallow(<ControllCount className="test"/>)
    expect(wrapper.find('.am-controllCount').hasClass('test')).toBe(true)
  })
  it('ControllCount 设置 自定义样式', () => {
    const wrapper = shallow(<ControllCount style={{color: 'red'}}/>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})