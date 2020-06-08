import * as renderer from 'react-test-renderer'
import React from 'react'
// import {shallow} from 'enzyme'

import Footer from '../footer'

describe('测试 Header 以下行为', () => {
  it('Footer 存在', () => {
    const json = renderer.create(<Footer>Footer</Footer>).toJSON()
    expect(json).toMatchSnapshot()
  })
  // it('Footer 设置 自定义类名', () => {
  //   const wrapper = shallow(<Footer className="test">Col-12</Footer>)
  //   expect(wrapper.find('.am-footer').hasClass('test')).toEqual(true)
  // })
  // it('Footer 设置 自定义样式', () => {
  //   const wrapper = shallow(<Footer style={{color: 'red'}}>Col-12</Footer>)
  //   expect(wrapper.render()).toMatchSnapshot()
  // });
})