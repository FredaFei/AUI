import * as renderer from 'react-test-renderer'
import React from 'react'
import { mount} from 'enzyme'

import Collapse from '../collapse'
import Pane from "../pane";

describe('测试 Scroll 以下行为', () => {
  it('Collapse 存在', () => {
    const json = renderer.create(<Collapse/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Collapse 设置 defaultActiveKey', () => {
    const wrapper = mount(<Collapse defaultActiveKey={['1']}>
      <Pane header="This is panel header 1" name="1">
        <p>This is pane content 1</p>
      </Pane>
      <Pane header="This is panel header 2" name="2">
        <p>This is pane content 2</p>
      </Pane>
      <Pane header="This is panel header 3" name="3">
        <p>This is pane content 3</p>
      </Pane>
    </Collapse>)

    expect(wrapper.props().defaultActiveKey.length).toEqual(1)
    expect(wrapper.props().defaultActiveKey['0']).toEqual('1')
  })

})