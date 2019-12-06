``` jsx harmony
import * as React from 'react'

export default function (props) {
  const onChange = (checked)=> {
    console.log(`我是${checked}`)
  }
  return (
    <div className="exp-section">
      <Switch defaultChecked onChange={onChange}/>
    </div>
  )
}
```