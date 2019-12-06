``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <div className="exp-section">
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
  )
}
```