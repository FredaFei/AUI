```html
<div>
  <Pager visibleQuickJumper current={page2} total={10} onChange={onChange2}/>
</div>
```
```javascript
  import * as React from 'react'
  import { useState } from 'react'
  
  const [page2, setPage2] = useState(1)
  
  const onChange2 = (pager) => {
    setPage2(page)
  }

```