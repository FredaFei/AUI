import * as React from 'react'
import Button from '../packages/button/button'
import Checkbox from '../packages/checkbox/checkbox'
import CheckboxGroup from '../packages/checkbox/group'

export default function(props: any) {
  const onChange = (e: React.FormEvent) => {
    console.log(e)
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Checkbox checked onChange={onChange} disabled> apple </Checkbox>
        <Checkbox checked onChange={onChange} indeterminate> apple </Checkbox>
        <Checkbox checked onChange={onChange}> apple </Checkbox>
        <Checkbox onChange={onChange}> apple </Checkbox>
        <Checkbox onChange={onChange}> apple </Checkbox>
        <Checkbox error="请勾选" onChange={onChange} value="ll"> apple </Checkbox>
      </div>
      <div className="exp-section">
        <h3>按钮组合</h3>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
      </div>
      <div className="exp-section">
        <h3>自定义样式</h3>
      </div>
    </div>
  )
}
