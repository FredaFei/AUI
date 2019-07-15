import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow} from 'enzyme'

import Main from '../main'

describe('测试 Main 以下行为', () => {
  it('Main 存在', () => {
    const json = renderer.create(<Main>Main</Main>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Main 设置 自定义类名', () => {
    const wrapper = shallow(<Main className="test">Col-12</Main>)
    expect(wrapper.find('.am-main').hasClass('test')).toEqual(true)
  })
  it('Main 设置 自定义样式', () => {
    const wrapper = shallow(<Main style={{color: 'red'}}>Col-12</Main>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})