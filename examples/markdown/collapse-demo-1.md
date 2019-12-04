```html
<div>
  <Collapse defaultActiveKey={selected1} onChange={onChange}>
    <Pane header="This is panel header 1" name="1">
      <p>This is pane content 1</p>
    </Pane>
    <Pane header="This is panel header 2" name="2">
      <p>This is pane content 2</p>
    </Pane>
    <Pane header="This is panel header 3" name="3">
      <p>This is pane content 3</p>
    </Pane>
  </Collapse>
</div>
```
```javascript
  import * as React from 'react'
  import {useState} from 'react'

  const [selected1] = useState(['1'])
  const onChange = (checked)=> {
    console.log(`我是${checked}`)
  }
```