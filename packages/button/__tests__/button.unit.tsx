import * as renderer from 'react-test-renderer'
import React from 'react'
import {configure, render, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});
import Button from '../button'

describe('Button', () => {
  it('Button 存在', () => {
    const json = renderer.create(<Button>hello</Button>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Button 带 icon,iconPosition默认left', () => {
    const wrapper = render(<Button icon="settings">设置</Button>)
    console.log(wrapper)
    // expect(wrapper.props().icon).toBe('settings')
    // expect(wrapper.props().iconPosition).toBe('left')
  })
  it('Button 带 icon,iconPosition可设置', () => {
    const wrapper = shallow(<Button iconPosition="right">设置</Button>)
    console.log(wrapper)
    expect(wrapper.props().iconPosition).toBe('right')
  })
  it('Button 设置 onClick', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
    wrapper.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('Button 设置 自定义类名', () => {
    const wrapper = shallow(<Button className="test">设置</Button>)
    expect(wrapper.find('button').hasClass('test')).toBe(true)
  })
  it('Button 设置 自定义样式', () => {
    const wrapper = shallow(<Button style={{color: 'red'}}>设置</Button>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})