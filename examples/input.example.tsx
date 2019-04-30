import * as React from 'react'
import { useState } from 'react'
import Input from '../packages/input/input'

export default function(props: any) {
  const [error, setError] = useState('用户名不能为空')
  const [value, setValue] = useState('')
  const onChange = (e:React.FormEvent)=>{
    setValue((e.target as HTMLInputElement).value)
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Input value={value} onChange={onChange} type="text" />
        <Input value={value} onChange={onChange} type="text" size="big" />
        <Input value={value} onChange={onChange} type="text" size="small" />
        <Input
          value="ha"
          type="password"
          length={10}
          placeholder="placeholder"
          onChange={onChange}
        />
        <Input length={10} maxLength={16} placeholder="placeholder" />
        <Input value="ha" type="password" length={10} disabled />
      </div>
      <div className="exp-section">
        <h3>按钮组合</h3>
        <Input
          label="用户名："
          labelPosition="top"
          error={error}
          errorPosition="right"
          type="text"
        />
        <Input
          label="用户名："
          labelPosition="left"
          error={error}
          errorPosition="bottom"
          type="text"
        />
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
        <Input
          label="用户名："
          labelPosition="top"
          error={error}
          type="text"
        />
      </div>
      <div className="exp-section">
        <h3>自定义样式</h3>
        <Input
          label="用户名："
          labelPosition="top"
          error={error}
          type="text"
        />
      </div>
    </div>
  )
}
