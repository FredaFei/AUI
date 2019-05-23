import * as React from 'react'
import { useState } from 'react'
import Radio from '../packages/radio/radio'

const groups = [
  { name: 'fruit', value: 'apple' },
  { name: 'fruit', value: 'peach' },
  { name: 'fruit', value: 'orange' },
  { name: 'fruit', value: 'pear' }
]

export default function(props: any) {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(['peach'])

  const onChange1 = (e: React.FormEvent) => {
    setChecked1((e.target as HTMLInputElement).checked)
  }
  const onChange2 = (e: React.FormEvent) => {
    setChecked2([(e.target as HTMLInputElement).value])
  }
  const onChange3 = () => {}
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Radio onChange={onChange1} checked={checked1}>
          apple
        </Radio>
      </div>
      <div className="exp-section">
        <h3>单选组合</h3>
        <div>
          {groups.map(i => (
            <Radio
              key={i.value}
              value={i.value}
              checked={checked2.includes(i.value)}
              onChange={onChange2}
              name={i.name}
            >
              {i.value}
            </Radio>
          ))}
        </div>
        <p>当前选中的水果: {JSON.stringify(checked2)}</p>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
        <Radio checked disabled onChange={onChange3}>
          apple
        </Radio>
      </div>
    </div>
  )
}
