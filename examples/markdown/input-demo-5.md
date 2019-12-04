```html
<div>
  <div className="custom-input">
    <Input onEnter={onEnter} />
    <div>enter event value: {enterVal}</div>
  </div>
  <div className="custom-input">
    <Input onKeyDown={onKeyDown} />
    <div>enter event value: {keyDownVal}</div>
  </div>
</div>
```
```javascript
  import * as React from 'react'
  import {useState} from 'react'
  
  const [enterVal, setEnterVal] = useState('')
  const [keyDownVal, setKeyDownVal] = useState('')
  const onEnter = (e) => {
    setEnterVal(e.target.value)
  }
  const onKeyDown = (e) => {
    setKeyDownVal(e.target.value)
  }
```