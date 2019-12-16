```jsx harmony
import * as React from 'react'

export default function (props) {
  const onChange = (val)=>{
    console.log(val);
  }
  return (
    <div className="exp-section">
      <ControllCount style={{width: '140px'}} onChange={onChange}>首页</ControllCount>
    </div>
  )
}
```

