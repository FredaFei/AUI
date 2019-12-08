``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props) {
  const [page2, setPage2] = useState(1)
  return (
    <div className="exp-section">
      <Uploader visibleQuickJumper current={page2} total={10} onChange={page => setPage2(page)}/>
    </div>
  )
}
```