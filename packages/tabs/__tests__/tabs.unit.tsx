import * as renderer from 'react-test-renderer'
import React from 'react'
import {mount, shallow} from 'enzyme'

import Tabs from '../tabs'
import TabPane from '../tabPane'

describe('测试 Tabs 以下行为', () => {
  it('Tabs 存在', () => {
    const json = renderer.create(<Tabs>
      <TabPane tab="tab 1" key="key1">
        Content of Tab Pane 1
      </TabPane>
    </Tabs>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('Tabs defaultActiveKey & direction 默认为 "key1" ', () => {
    const wrapper = mount(<Tabs>
      <TabPane tab="tab 1" key="key1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="key2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="key3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>)
    expect(wrapper.find('.am-tabs-wrapper').at(0).hasClass('vertical')).toEqual(false)
    expect(wrapper.find('.am-tabs-nav-item').at(0).hasClass('am-tabs-active')).toEqual(true)
  })
  it('Tabs 组件的子组件只能是 TabPane组件 ', () => {
    const wrapper = mount(<Tabs><div>haha</div></Tabs>)
    expect(wrapper.find('.am-tabs-nav-item').length).toEqual(0)
  })
  it('Tabs 设置 direction 默认为 "vertical" ', () => {
    const wrapper = mount(<Tabs direction="vertical">
      <TabPane tab="tab 1" key="key1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="key2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="key3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>)
    expect(wrapper.props().direction).toEqual('vertical')
    expect(wrapper.find('.am-tabs-wrapper').at(0).hasClass('am-tabs-vertical')).toEqual(true)
  })
  it('Tabs 设置 defaultActiveKey', () => {
    const wrapper = mount(<Tabs defaultActiveKey="key2">
      <TabPane tab="tab 1" key="key1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="key2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="key3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>)
    expect(wrapper.props().defaultActiveKey).toEqual('key2')
  })
  it('Tabs 设置 activeKey', () => {
    const fn = jest.fn()
    const wrapper = mount(<Tabs activeKey="sport2" onChange={fn}>
      <TabPane tab="sport" key="sport2">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="music" key="music2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="art" key="art2">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>)
    expect(wrapper.props().activeKey).toEqual('sport2')
    wrapper.find('.am-tabs-nav-item').at(1).simulate('click')
    expect(fn).toHaveBeenCalled()
  })

  it('Tabs 触发 onChange ,disabled 时不触发', () => {
    const fn = jest.fn()
    const wrapper = mount(<Tabs defaultActiveKey="art3" onChange={fn}>
      <TabPane tab="sport" key="sport3">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="music" key="music3" disabled>
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="art" key="art3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>)
    wrapper.find('.am-tabs-nav-item').at(1).simulate('click')
    expect(fn).not.toHaveBeenCalled()
    wrapper.find('.am-tabs-nav-item').at(0).simulate('click')
    expect(fn).toHaveBeenCalled()
  })
  it('Tabs 设置 自定义类名', () => {
    const wrapper = shallow(<Tabs className="test" style={{marginRight: '30px'}}>
      <TabPane tab="tab 1" key="key1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="key2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="key3">
      Content of Tab Pane 3
    </TabPane>
    </Tabs>)
    expect(wrapper.find('.am-tabs-wrapper').hasClass('test')).toEqual(true)
  })
  it('Tabs 设置 自定义样式', () => {
    const wrapper = shallow(<Tabs style={{marginRight: '30px'}}>
      <TabPane tab="tab 1" key="key1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="key2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="key3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})