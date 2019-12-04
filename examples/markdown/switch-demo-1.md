```html
<div>
  <Switch defaultChecked onChange={onChange}/>
</div>
```
```javascript
  import * as React from 'react'
  import { useState } from 'react'
  
  const [checked, setChecked] = useState(true)

  const onChange = (checked) => {
    console.log(`我是${checked}`)
  }
```