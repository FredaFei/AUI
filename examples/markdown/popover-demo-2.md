``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <div className="exp-section">
      <Popover content={<div style={{padding: '4px'}}>hello popover</div>} trigger="hover">
        <Button>hover me</Button>
      </Popover>
    </div>
  )
}
```