```jsx harmony
import * as React from 'react'

import * as React from 'react'
import {useState} from "react";

function range(start, end) {
  const temp = []
  for (let i = start; i <= end; i++) {
    temp.push(i)
  }
  return temp
}

const page = 15
let index = 1
export default function (props) {
  const [source, setSource] = useState(range(1, index * page))
  const onPullDown = () => {
    console.log('on down refresh')
    index = 1
    setSource(range(1, index * page))
  }
  const onPullUp = () => {
    console.log('on up load more')
    index += 1
    setSource(range(1, index * page))
  }
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Scroll style={{height: '300px'}} onPullDown={onPullDown} onPullUp={onPullUp}>
          <ul>{source.map(i => <li key={i}>hello, scroll {i}</li>)}</ul>
        </Scroll>
      </div>

    </div>
  )
}
```

