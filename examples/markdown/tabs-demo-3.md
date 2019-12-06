``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props) {
  const [tabs, setTabs] = useState('music2')
  return (
    <div className="exp-section">
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
  )
}
```