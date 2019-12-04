```html
<div>
  <Radio checked disabled onChange={onChange3}>apple</Radio>
  <Radio checked={false} disabled onChange={onChange3}>peach</Radio>
</div>
```
```javascript
  import * as React from 'react'
  import { useState } from 'react'
  
  const onChange3 = (e) => {
    console.log(e)
  }
```