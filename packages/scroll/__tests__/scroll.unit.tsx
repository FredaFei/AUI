import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow,mount} from 'enzyme'

import Scroll from '../scroll'

describe('测试 Scroll 以下行为', () => {
  it('Scroll 存在', () => {
    const json = renderer.create(<Scroll/>).toJSON()
    expect(json).toMatchSnapshot()
  })

})