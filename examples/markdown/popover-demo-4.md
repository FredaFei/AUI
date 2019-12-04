```html
<div>
  <Popover content="hello" container={div}>
    <Button>click me</Button>
  </Popover>
</div>
```
```javascript
  import * as React from 'react'
  import {useRef} from "react"
  
  const div = useRef(null);
```