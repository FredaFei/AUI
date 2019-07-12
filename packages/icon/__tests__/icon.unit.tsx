import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow,mount} from 'enzyme'

import Icon from '../icon'

describe('测试 Icon 以下行为', () => {
  it('Icon 存在', () => {
    const json = renderer.create(<Icon name="settings"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Icon 设置 rotate', () => {
    const wrapper = mount(<Icon name="settings" rotate={30}/>)
    expect(wrapper.props().rotate).toBe(30)
  })
  it('Icon 设置 spin', () => {
    const wrapper = shallow(<Icon name="settings" spin/>)
    expect(wrapper.find('svg').hasClass('am-icon-spin')).toBe(true)
  })
  it('Icon 设置 loading', () => {
    const wrapper = shallow(<Icon name="loading"/>)
    expect(wrapper.find('svg').hasClass('am-icon-spin')).toBe(true)
  })
  it('Icon 设置 onClick', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Icon name="settings" onClick={mockCallBack}/>);
    wrapper.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('Icon 设置 自定义类名', () => {
    const wrapper = shallow(<Icon name="left" className="test" />)
    expect(wrapper.find('svg').hasClass('test')).toBe(true)
  })
  it('Icon 设置 自定义样式', () => {
    const wrapper = shallow(<Icon name="left" style={{color: 'red'}} />)
    expect(wrapper.render()).toMatchSnapshot()
  });
})