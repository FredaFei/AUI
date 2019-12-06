``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <div className="exp-section">
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
  )
}
```