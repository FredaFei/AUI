import * as React from 'react'
import { useState, Fragment } from 'react'
import Form, { FormValue } from '../packages/form/form'
import Button from '../packages/button/button'

export default function(props: any) {
  const [formData, setFormData] = useState<FormValue>({
    name: '',
    password: 'xxxxx'
  })
  const [fields] = useState([
    { name: 'name', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } }
  ])
  const onChange = (value: FormValue) => {
    setFormData(value)
  }
  const onSubmit = () => {
    console.log(formData)
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Form
          value={formData}
          fields={fields}
          onChange={onChange}
          onSubmit={onSubmit}
          buttons={
            <Fragment>
              <Button type="submit">提交</Button>
              <Button type="reset">取消</Button>
            </Fragment>
          }
        />
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
