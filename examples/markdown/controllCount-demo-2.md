```jsx harmony
import * as React from 'react'

export default function (props) {
  const [count2] = useState(2)
  const onChange = (val)=>{
    console.log(val);
  }
  return (
    <div className="exp-section">
      <ControllCount count={count2} style={{width: '140px'}} onChange={onChange}>首页</ControllCount>
    </div>
  )
}
```

