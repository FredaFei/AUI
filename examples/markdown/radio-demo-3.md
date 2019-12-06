``` jsx harmony
import * as React from 'react'

export default function (props) {
  const onChange3 = (e) => {
    console.log(e)
  }
  return (
    <div className="exp-section">
      <Radio checked disabled onChange={onChange3}>
        apple
      </Radio>
      <Radio checked={false} disabled onChange={onChange3}>
        peach
      </Radio>
    </div>
  )
}
```