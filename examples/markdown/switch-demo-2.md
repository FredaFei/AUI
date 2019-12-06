``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props) {
  const [checked, setChecked] = useState(true)
  const onToggleSwitch = ()=> {
    setChecked(!checked)
  }
  return (
    <div className="exp-section">
      <Switch checked={checked} style={{marginRight: '30px'}}/>
      <Button onClick={onToggleSwitch}>toggle</Button>
    </div>
  )
}
```