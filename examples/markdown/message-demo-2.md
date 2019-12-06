``` jsx harmony
import * as React from 'react'

export default function (props) {
  const onManualClose = () => {
    message['info']('This is message',0)
  }
  return (
    <div className="exp-section">
      <Button onClick={onManualClose}>手动关闭</Button>
    </div>
  )
}
```