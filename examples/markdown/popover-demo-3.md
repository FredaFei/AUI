```html
<div>
  <ClickOutside handler={onClickOutside}>
    <Popover content="hello ooo" trigger="manual" open={open} container={div}>
      <Button onClick={onClick}>click me</Button>
    </Popover>
  </ClickOutside>
</div>
```

```javascript
  import * as React from 'react'
  import {useRef} from "react"
  
  const [open, setOpen] = useState(false)
  const div = useRef(null)
  
  const onClick = () => {
    setOpen(!open)
  }
  const onClickOutside = () => {
    setOpen(false)
  }
  
```