import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow} from 'enzyme'

import Header from '../header'

describe('测试 Header 以下行为', () => {
  it('Header 存在', () => {
    const json = renderer.create(<Header>Header</Header>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Header 设置 自定义类名', () => {
    const wrapper = shallow(<Header className="test">Col-12</Header>)
    expect(wrapper.find('.am-header').hasClass('test')).toEqual(true)
  })
  it('Header 设置 自定义样式', () => {
    const wrapper = shallow(<Header style={{color: 'red'}}>Col-12</Header>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})