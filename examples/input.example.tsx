import * as React from 'react'
import { useState } from 'react'
import Input from '../packages/input/input'
import Icon from '../packages/icon/icon'

export default function(props: any) {
  const [error] = useState('用户名不能为空')
  const [value, setValue] = useState('')
  const onChange = (e: React.FormEvent) => {
    setValue((e.target as HTMLInputElement).value)
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <p>三种尺寸</p>
        <div className="custom-input">
          <Input value={value} onChange={onChange} type="text" size="big" />
          <Input value={value} onChange={onChange} type="text" />
          <Input value={value} onChange={onChange} type="text" size="small" />
          <Input
            label="用户名"
            labelPosition="left"
            size="small"
            type="text"
          />
          <Input label="用户名" labelPosition="left" size="big" type="text" />
        </div>
      </div>
      <div className="exp-section">
        <h3>错误提示</h3>
        <div className="custom-input">
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
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
        <div className="custom-input">
          <Input
            label="用户名"
            labelPosition="top"
            value="hello"
            disabled
            type="text"
          />
          <Input
            label="密码"
            labelPosition="top"
            value="123456"
            disabled
            type="password"
          />
        </div>
      </div>
      <div className="exp-section">
        <h3>自定义样式</h3>
        <div className="custom-input">
          <Input before="Http://" after=".com" />
          <Input after={<Icon name="settings" />} />
          <Input after="搜索" className="custom-input-search" />
        </div>
      </div>
      <div className="exp-section">
        <h3>支持的类型</h3>
        <div className="custom-input">
          <Input type="text" placeholder="text" />
          <Input type="number" placeholder="number" />
          <Input type="password" placeholder="password" />
          <Input type="email" placeholder="email" />
          <Input type="date" />
          <Input type="time" />
          <Input type="tel" placeholder="tel" />
          <Input type="url" pattern="https://.*" placeholder="url" />
          <Input type="search" placeholder="search" />
        </div>
      </div>
    </div>
  )
}
