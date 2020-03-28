``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <div className="exp-section">
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
  )
}
```