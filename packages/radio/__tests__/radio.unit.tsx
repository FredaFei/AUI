import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow, mount} from 'enzyme'

import Radio from '../radio'

describe('测试 Radio 以下行为', () => {
  it('Radio 存在', () => {
    const json = renderer.create(<Radio checked>apple</Radio>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Radio 设置 checked', () => {
    const wrapper = mount(<Radio checked>apple</Radio>)
    expect(wrapper.props().checked).toEqual(true)
    expect(wrapper.find('.am-radio-wrapper').hasClass('am-radio-checked')).toEqual(true)
  })
  it('Radio 设置 disabled', () => {
    const wrapper = mount(<Radio disabled>apple</Radio>)
    expect(wrapper.props().disabled).toEqual(true)
    expect(wrapper.find('.am-radio-wrapper').hasClass('am-radio-disabled')).toEqual(true)
  })
  it('Radio 设置 onChange', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Radio checked={false} onChange={onChange}>apple</Radio>)
    wrapper.find('.am-radio').simulate('change')
    expect(onChange).toHaveBeenCalled();
    wrapper.setProps({checked:true});
    expect(wrapper.props().checked).toEqual(true)
    expect(wrapper.find('.am-radio-wrapper').hasClass('am-radio-checked')).toEqual(true)
  })
  it('Radio 设置 自定义类名', () => {
    const wrapper = shallow(<Radio className="test">apple</Radio>)
    expect(wrapper.find('.am-radio-wrapper').hasClass('test')).toBe(true)
  })
  it('Radio 设置 自定义样式', () => {
    const wrapper = shallow(<Radio style={{marginRight: '30px'}}>apple</Radio>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})