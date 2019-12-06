``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props) {
  const [checked1, setChecked1] = useState(false)

  const onChange1 = (e) => {
    setChecked1(e.target.checked)
  }
  return (
    <div className="exp-section">
      <Radio onChange={onChange1} checked={checked1}>apple</Radio>
    </div>
  )
}
```