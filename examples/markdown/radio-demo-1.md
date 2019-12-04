```html
<div>
  <Radio onChange={onChange1} checked={checked1}>apple</Radio>
</div>
```
```javascript
  import * as React from 'react'
  import { useState } from 'react'
  
  const [checked1, setChecked1] = useState(false)

  const onChange1 = (e) => {
    setChecked1(e.target.checked)
  }
```