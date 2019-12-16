import * as renderer from 'react-test-renderer'
import React from 'react'
import { mount} from 'enzyme'

import Scroll from '../scroll'

describe('测试 Scroll 以下行为', () => {
  it('Scroll 存在', () => {
    const json = renderer.create(<Scroll/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Scroll 设置 pullingHeight', () => {
    const wrapper = mount(<Scroll pullingHeight={200}>apple</Scroll>)
    expect(wrapper.props().pullingHeight).toEqual(200)
  })

})