import * as React from 'react'
import Tabs from '../packages/tabs/tabs'
import TabPane from '../packages/tabs/tabPane'

export default function(props: any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
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
        <h3>按钮组合</h3>
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
        <h3>不可用状态</h3>
      </div>
      <div className="exp-section">
        <h3>自定义样式</h3>
        <Tabs defaultActiveKey="music">
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
    </div>
  )
}
