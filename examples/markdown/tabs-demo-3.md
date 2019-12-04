```html
<div>
  <Tabs activeKey={tabs} onChange={onChange}>
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
```
```javascript
  import * as React from 'react'
  import {useState} from 'react'
  
  const [tabs, setTabs] = useState('music2')
  
  const onChange = (value)=>{
    setTabs(value)
  }
```