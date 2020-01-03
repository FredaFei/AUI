import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow, mount} from 'enzyme'

import Menu from '../menu'
import MenuItem from '../menuItem'
import SubMenu from '../subMenu'

describe('测试 Menu 以下行为', () => {
  it('Menu 存在', () => {
    const json = renderer.create(<Menu>
      <MenuItem name="menu1">menu 1</MenuItem>
      <MenuItem name="menu2">menu 2</MenuItem>
    </Menu>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Menu 参数 layout 默认值为“horizontal”', () => {
    const wrapper = mount(<Menu>
      <MenuItem name="menu1">menu 1</MenuItem>
      <MenuItem name="menu2">menu 2</MenuItem>
    </Menu>)
    expect(wrapper.props().layout).toEqual('horizontal')
  })
  it('Menu 设置 selected', () => {
    const wrapper = mount(<Menu selected="menu3-2-2">
      <SubMenu title="sub1" name="sub1">
        <MenuItem name="menu3-1">menu 3--1</MenuItem>
        <MenuItem name="menu3-2">menu 3--2</MenuItem>
        <MenuItem name="menu3-3">menu 3--3</MenuItem>
        <SubMenu title="submenu 2" name="sub2">
          <MenuItem name="menu3-2-1">menu 3-2-1</MenuItem>
          <MenuItem name="menu3-2-2">menu 3-2-2</MenuItem>
          <MenuItem name="menu3-3-3">menu 3-2-3</MenuItem>
        </SubMenu>
      </SubMenu>
      <MenuItem name="menu1">menu 1</MenuItem>
      <MenuItem name="menu2">menu 2</MenuItem>
    </Menu>)
    expect(wrapper.props().selected).toEqual('menu3-2-2')
  })
  it('Menu 点击menuItem 触发onChange', () => {
    const fn = jest.fn()
    const wrapper = mount(<Menu selected="menu3-2-2" onChange={fn}>
      <SubMenu title="sub1" name="sub1">
        <MenuItem name="menu3-1">menu 3--1</MenuItem>
        <MenuItem name="menu3-2">menu 3--2</MenuItem>
        <MenuItem name="menu3-3">menu 3--3</MenuItem>
        <SubMenu title="submenu 2" name="sub2">
          <MenuItem name="menu3-2-1">menu 3-2-1</MenuItem>
          <MenuItem name="menu3-2-2">menu 3-2-2</MenuItem>
          <MenuItem name="menu3-3-3">menu 3-2-3</MenuItem>
        </SubMenu>
      </SubMenu>
      <MenuItem name="menu1" className="test-menu-1">menu 1</MenuItem>
      <MenuItem name="menu2">menu 2</MenuItem>
    </Menu>)
    wrapper.find('.test-menu-1').at(0).simulate('click')
    expect(fn).toHaveBeenCalledWith('menu1')
  })

  it('Menu 点击menuItem 触发onChange', () => {
    const fn = jest.fn()
    const wrapper = mount(<Menu selected="menu3-2-2" onChange={fn}>
      <SubMenu title="sub1" name="sub1">
        <MenuItem name="menu3-1">menu 3--1</MenuItem>
        <MenuItem name="menu3-2">menu 3--2</MenuItem>
        <MenuItem name="menu3-3">menu 3--3</MenuItem>
        <SubMenu title="submenu 2" name="sub2">
          <MenuItem name="menu3-2-1">menu 3-2-1</MenuItem>
          <MenuItem name="menu3-2-2">menu 3-2-2</MenuItem>
          <MenuItem name="menu3-3-3">menu 3-2-3</MenuItem>
        </SubMenu>
      </SubMenu>
      <MenuItem name="menu1" className="test-menu-1">menu 1</MenuItem>
      <MenuItem name="menu2">menu 2</MenuItem>
    </Menu>)
    wrapper.find('.test-menu-1').at(0).simulate('click')
    expect(fn).toHaveBeenCalledWith('menu1')
  })

  it('MenuItem 设置 disalbed 值为“true”', () => {
    const fn = jest.fn()
    const wrapper = mount(<Menu onChange={fn}>
      <MenuItem name="menu1" disabled>menu 1</MenuItem>
      <MenuItem name="menu2">menu 2</MenuItem>
    </Menu>)
    wrapper.find('.am-menuItem').at(0).simulate('click')
    expect(fn).not.toHaveBeenCalled()
    wrapper.find('.am-menuItem').at(1).simulate('click')
    expect(fn).toHaveBeenCalledWith('menu2')
  })
  it('SubMenu 设置 disalbed 值为“true”', () => {
    const fn = jest.fn()
    const wrapper = mount(<Menu onChange={fn}>
      <SubMenu title="sub1" name="sub1" disabled>
        <MenuItem name="menu3-1">menu 3--1</MenuItem>
        <MenuItem name="menu3-2">menu 3--2</MenuItem>
        <MenuItem name="menu3-3">menu 3--3</MenuItem>
        <SubMenu title="submenu 2" name="sub2">
          <MenuItem name="menu3-2-1">menu 3-2-1</MenuItem>
          <MenuItem name="menu3-2-2">menu 3-2-2</MenuItem>
          <MenuItem name="menu3-3-3">menu 3-2-3</MenuItem>
        </SubMenu>
      </SubMenu>
      <MenuItem name="menu1" disabled>menu 1</MenuItem>
      <MenuItem name="menu2">menu 2</MenuItem>
    </Menu>)
    wrapper.find('.am-subMenu-label').at(0).simulate('click')
    expect(fn).not.toHaveBeenCalled()
  })

  it('Menu 设置 自定义类名', () => {
    const wrapper = shallow(<Menu className="test">
      <MenuItem name="menu1">menu 1</MenuItem>
      <MenuItem name="menu2">menu 2</MenuItem>
    </Menu>)
    expect(wrapper.find('.am-menu-wrapper').hasClass('test')).toEqual(true)
  })
  it('Menu 设置 自定义样式', () => {
    const wrapper = shallow(<Menu className="test" style={{color: 'red'}}>
      <MenuItem name="menu1">menu 1</MenuItem>
      <MenuItem name="menu2">menu 2</MenuItem>
    </Menu>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})