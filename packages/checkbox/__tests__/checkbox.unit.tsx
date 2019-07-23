import * as renderer from 'react-test-renderer'
import React from 'react'
import { mount} from 'enzyme'

import Checkbox from '../checkbox'

describe('测试 Checkbox 以下行为', () => {
  it('Checkbox 存在', () => {
    const json = renderer.create(<Checkbox checked={false} onChange={()=>{}}>apple</Checkbox>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Checkbox 设置 checked', () => {
    const wrapper = mount(<Checkbox checked={false} onChange={()=>{}}>apple</Checkbox>)
    wrapper.setProps({checked: true})
    expect(wrapper.props().checked).toEqual(true)
  })
  it('Checkbox 设置 disabled', () => {
    const wrapper = mount(<Checkbox disabled onChange={()=>{}}>apple</Checkbox>)
    expect(wrapper.props().disabled).toEqual(true)
    wrapper.setProps({disabled: false})
    expect(wrapper.props().disabled).toEqual(false)
  })
  it('Checkbox 设置 indeterminate', () => {
    const fn = jest.fn()
    const wrapper = mount(<Checkbox indeterminate={false} onChange={fn} checked={false}>apple</Checkbox>)
    expect(wrapper.props().indeterminate).toEqual(false)
    wrapper.setProps({indeterminate: true})
    expect(wrapper.props().indeterminate).toEqual(true)
  })
  it('Checkbox 设置 onChange', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Checkbox checked={false} onChange={onChange}>apple</Checkbox>)
    wrapper.find('.am-checkbox').simulate('change')
    expect(onChange).toHaveBeenCalled();
  })
})