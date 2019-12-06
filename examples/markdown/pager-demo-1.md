``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props) {
  const [page1, setPage1] = useState(2)
  return (
    <div className="exp-section">
      <Pager defaultCurrent={4} total={5} onChange={page => {console.log(page)}}/>
      <Pager current={page1} total={11} onChange={page => setPage1(page)}/>
    </div>
  )
}
```