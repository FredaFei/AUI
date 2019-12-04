```html
<div>
  <Button onClick={onManualClose}>手动关闭</Button>
</div>
```

```javascript
  import * as React from 'react'

  const onManualClose = () => {
    message['info']('This is message', 0, () => {
      message['success']('我已经关闭了！')
    })
  }

```