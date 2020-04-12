import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow, mount} from 'enzyme'

import DatePicker from '../datePicker'

describe('测试 DatePicker 以下行为', () => {
  it('DatePicker 存在', () => {
    const json = renderer.create(<DatePicker/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('DatePicker disabled/firstDayOfWeek, 默认值', () => {
    const wrapper = mount(<DatePicker/>)
    expect(wrapper.props().firstDayOfWeek).toEqual(1)
    expect(wrapper.props().disabled).toEqual(false)
  })
  it('DatePicker 设置 disabled/firstDayOfWeek/value', () => {
    const date = new Date()
    const wrapper = mount(<DatePicker value={date} disabled firstDayOfWeek={0}/>)
    expect(wrapper.props().firstDayOfWeek).toEqual(0)
    expect(wrapper.props().disabled).toEqual(true)
    expect(wrapper.props().value).toEqual(date)
  })
  // todo
  xit('DatePicker 点击 input,触发 open & onChange 事件', (done) => {
    const onChange = jest.fn()
    const wrapper = mount(<DatePicker value={new Date()} onChange={onChange}/>)
    const trigger = wrapper.find('.am-input').at(0)
    trigger.simulate('focus')
    // expect(onChange).toHaveBeenCalled();
  })

  it('DatePicker 设置 自定义类名', () => {
    const wrapper = shallow(<DatePicker className="test"/>)
    expect(wrapper.find('.am-datePicker-wrapper').hasClass('test')).toBe(true)
  })
  it('DatePicker 设置 自定义样式', () => {
    const wrapper = mount(<DatePicker style={{color: 'red'}}/>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})