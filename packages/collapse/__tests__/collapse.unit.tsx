import * as renderer from 'react-test-renderer'
import React from 'react'
import { mount} from 'enzyme'

import Collapse from '../collapse'
import Pane from "../pane";
import Icon from "../../icon/icon";

describe('测试 Collapse 以下行为', () => {
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
  it('Collapse 设置 activeKey', () => {
    const wrapper = mount(<Collapse
      activeKey={['1', '3']}
      className="custom-desk"
      expandIcon={active => (
        <Icon
          name="upload"
          rotate={active ? 90 : 0}
          className="am-icon-animation"
        />
      )}
    >
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
    expect(wrapper.props().activeKey.length).toEqual(2)
    expect(wrapper.props().activeKey['0']).toEqual('1')
    expect(wrapper.props().activeKey['1']).toEqual('3')
  })
  it('Collapse 设置 accordion', () => {
    const wrapper = mount(<Collapse accordion defaultActiveKey={['1']}>
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
    expect(wrapper.props().accordion).toEqual(true)
    expect(wrapper.find('.am-collapse-item').at(0).hasClass('active')).toEqual(true)
    wrapper.find('.am-collapse-item-name').at(1).simulate('click')
    expect(wrapper.find('.am-collapse-item').at(0).hasClass('active')).toEqual(false)
    expect(wrapper.find('.am-collapse-item').at(1).hasClass('active')).toEqual(true)
  })
  it('Collapse 设置 onChange', () => {
    const fn = jest.fn()
    const wrapper = mount(<Collapse defaultActiveKey={['1']} onChange={fn}>
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
    wrapper.find('.am-collapse-item-name').at(2).simulate('click')
    expect(fn).toHaveBeenCalled()
  })

})