``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props) {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="custom-input">
      <Input value={value} onChange={onChange} size="big"/>
      <Input value={value} onChange={onChange}/>
      <Input value={value} onChange={onChange} size="small"/>
    </div>
  )
}
```
