import * as React from 'react'
import { useState} from 'react'
import Tabs from '../packages/tabs/tabs'
import TabPane from '../packages/tabs/tabPane'

export default function(props: any) {
  const [tabs, setTabs] = useState('music2')
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <p>不设置defaultActiveKey值时，默认展示第一个</p>
        <Tabs>
          <TabPane tab="tab 1" key="key1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="key2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="key3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <div className="exp-section">
        <h3>垂直布局</h3>
        <Tabs direction="vertical">
          <TabPane tab="sport" key="sport1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="music" key="music1">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="art" key="art1">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <div className="exp-section">
        <h3>手动更新</h3>
        <Tabs activeKey={tabs} onChange={value => { setTabs(value)}}>
          <TabPane tab="sport" key="sport2">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="music" key="music2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="art" key="art2">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <div className="exp-section">
        <h3>禁用</h3>
        <Tabs defaultActiveKey="art3">
          <TabPane tab="sport" key="sport3">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="music" key="music3" disabled>
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="art" key="art3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}
