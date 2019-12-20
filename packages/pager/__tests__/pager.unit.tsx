import * as renderer from 'react-test-renderer'
import React from 'react'
import {mount} from 'enzyme'

import Pager from '../pager'

describe('测试 Pager 以下行为', () => {
  it('Pager 存在', () => {
    const json = renderer.create(<Pager defaultCurrent={4} total={10}/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Pager 设置 defaultCurrent & total', () => {
    const wrapper = mount(<Pager defaultCurrent={4} total={5}/>)
    expect(wrapper.props().defaultCurrent).toEqual(4)
    expect(wrapper.props().total).toEqual(5)
  })
  it('Pager 设置 快捷跳转', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Pager onChange={onChange} visibleQuickJumper total={10}/>)
    const input = wrapper.find('.am-pager-input-page').at(0);
    input.simulate('keypress', {keyCode: 13, which: 13,target: { value: 12}})
    expect(onChange).toHaveBeenCalled();
    input.simulate('keypress', {keyCode: 13, which: 13,target: { value: 3}})
    expect(onChange).toHaveBeenCalled();
  });

  it('Pager 手动触发 onChange', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Pager visibleQuickJumper current={3} total={10} onChange={onChange}/>)
    wrapper.find('.am-pager-list-item').at(1).simulate('click')
    expect(onChange).toHaveBeenCalledWith(2);
  })
  it('Pager 点击加载更多页', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Pager current={6} total={10} onChange={onChange}/>)
    wrapper.find('.am-pager-split').at(1).simulate('click')
    expect(onChange).toHaveBeenCalledWith(10);
    wrapper.setProps({ current: 6 });
    wrapper.find('.am-pager-split').at(0).simulate('click')
    expect(onChange).toHaveBeenCalledWith(1);

  })
  it('Pager 点击上一页', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Pager visibleQuickJumper current={3} total={10} onChange={onChange}/>)
    wrapper.find('.am-pager-prev').simulate('click')
    expect(onChange).toHaveBeenCalledWith(2);
  })
  it('Pager 点击下一页', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Pager visibleQuickJumper current={3} total={10} onChange={onChange}/>)
    wrapper.find('.am-pager-next').simulate('click')
    expect(onChange).toHaveBeenCalledWith(4);
  })
})