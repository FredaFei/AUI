import * as renderer from 'react-test-renderer'
import React from 'react'
import { mount} from 'enzyme'

import Scroll from '../scroll'

describe('测试 Scroll 以下行为', () => {
  it('Scroll 存在', () => {
    const json = renderer.create(<Scroll/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Scroll 设置 pullingheight', () => {
    const wrapper = mount(<Scroll pullingheight={200}>apple</Scroll>)
    expect(wrapper.props().pullingheight).toEqual(200)
  })

})