import * as renderer from 'react-test-renderer'
import React from 'react'
// import {shallow} from 'enzyme'

import Aside from '../aside'

describe('测试 Aside 以下行为', () => {
  it('Aside 存在', () => {
    const json = renderer.create(<Aside>Aside</Aside>).toJSON()
    expect(json).toMatchSnapshot()
  })
  // it('Aside 设置 自定义类名', () => {
  //   const wrapper = shallow(<Aside className="test">Col-12</Aside>)
  //   expect(wrapper.find('.am-aside').hasClass('test')).toEqual(true)
  // })
  // it('Aside 设置 自定义样式', () => {
  //   const wrapper = shallow(<Aside style={{color: 'red'}}>Col-12</Aside>)
  //   expect(wrapper.render()).toMatchSnapshot()
  // });
})