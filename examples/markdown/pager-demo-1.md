```html
<div>
  <Pager defaultCurrent={4} total={5} onChange={onChange}}/>
  <Pager current={page1} total={11} onChange={onChange1}/>
</div>
```
```javascript
  import * as React from 'react'
  import { useState } from 'react'
  
  const [page1, setPage1] = useState(2)

  const onChange = (pager) => {
    console.log(page)
  }
  const onChange1 = (pager) => {
    setPage1(page)
  }
```