import * as React from 'react'
import Tabs from '../packages/tabs/tabs'
import TabPane from '../packages/tabs/tabPane'

export default function(props: any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <p>不设置defaultActiveKey值时，默认展示第一个</p>
        <Tabs>
          <TabPane tab="tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <div className="exp-section">
        <h3>垂直布局</h3>
        <Tabs direction="vertical">
          <TabPane tab="sport" key="sport">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="music" key="music">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="art" key="art">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <div className="exp-section">
        <h3>禁用</h3>
        <Tabs defaultActiveKey="art">
          <TabPane tab="sport" key="sport">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="music" key="music" disabled>
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="art" key="art">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}
