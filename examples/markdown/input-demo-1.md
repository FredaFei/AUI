```html
<div>
  <Input value={value} onChange={onChange} size="big" />
  <Input value={value} onChange={onChange}  />
  <Input value={value} onChange={onChange} size="small" />
</div>
```
```javascript
  import * as React from 'react'
  import {useState} from 'react'
  
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
```