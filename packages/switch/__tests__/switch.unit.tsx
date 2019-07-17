import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow, mount} from 'enzyme'

import Switch from '../switch'

describe('测试 Switch 以下行为', () => {
  it('Switch 存在', () => {
    const json = renderer.create(<Switch defaultChecked/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Switch 设置 defaultChecked', () => {
    const wrapper = mount(<Switch defaultChecked/>)
    expect(wrapper.props().defaultChecked).toEqual(true)
    expect(wrapper.state('checked')).toEqual(true)
    expect(wrapper.find('.am-switch').hasClass('am-switch-active')).toEqual(true)
  })
  it('Switch 设置 checked', () => {
    const checked = true
    const wrapper = mount(<Switch checked={checked}/>)
    expect(wrapper.props().checked).toEqual(true)
    expect(wrapper.find('.am-switch').hasClass('am-switch-active')).toEqual(true)
  })
  it('Switch 设置 disabled', () => {
    const fn = jest.fn();
    const wrapper = mount(<Switch disabled defaultChecked onChange={fn}/>)
    expect(wrapper.props().disabled).toEqual(true)
    expect(wrapper.find('.am-switch').hasClass('am-switch-disabled')).toEqual(true)
    wrapper.find('.am-switch').simulate('click')
    expect(fn.mock.calls.length).toEqual(0);
  })
  it('Switch 手动点击，自动触发 state.checked & props.onChange', () => {
    const fn = jest.fn();
    const wrapper = mount(<Switch defaultChecked onChange={fn}/>)
    expect(wrapper.props().defaultChecked).toEqual(true)
    wrapper.find('.am-switch').simulate('click')
    expect(fn.mock.calls.length).toEqual(1);
    expect(wrapper.state('checked')).toEqual(false)
    expect(wrapper.find('.am-switch').hasClass('am-switch-active')).toEqual(false)
  })
  it('Switch 手动触发 onChange', () => {
    const wrapper = mount(<Switch checked={true}/>)
    wrapper.setProps({checked: false});
    expect(wrapper.props().checked).toEqual(false)
    expect(wrapper.find('.am-switch').hasClass('am-switch-active')).toEqual(false)
  })
  it('Switch 设置 自定义类名', () => {
    const wrapper = shallow(<Switch defaultChecked className="test"/>)
    expect(wrapper.find('.am-switch').hasClass('test')).toBe(true)
  })
  it('Switch 设置 自定义样式', () => {
    const wrapper = shallow(<Switch defaultChecked style={{marginRight: '30px'}}/>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})