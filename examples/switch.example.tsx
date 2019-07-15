import * as React from 'react'
import { useState } from 'react'
import Switch from '../packages/switch/switch'
import Button from '../packages/button/button'

export default function(props: any) {
  const [checked, setChecked] = useState(true)
  const onChange = (checked:boolean): any => {
    console.log(`我是${checked}`)
  }
  const onToggleSwitch = ():any => {
    setChecked(!checked)
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Switch defaultChecked onChange={onChange} />
      </div>
      <div className="exp-section">
        <h3>手动触发 onChange</h3>
        <Switch checked={checked} style={{ marginRight: '30px' }} />
        <Button onClick={onToggleSwitch}>toggle</Button>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
        <Switch disabled defaultChecked style={{ marginRight: '30px' }} />
        <Switch disabled />
      </div>
    </div>
  )
}
