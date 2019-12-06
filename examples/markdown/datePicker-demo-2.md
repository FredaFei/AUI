``` jsx harmony
import * as React from 'react'

export default function (props) {
  const onChange = (date) => {
    console.log(date)
  }
  return (
    <div className="exp-section">
      <DatePicker onChange={onChange}/>
    </div>
  )
}
```