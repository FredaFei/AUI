import * as React from 'react'
import { useState, Fragment } from 'react'
import Form, { FormValue } from '../packages/form/form'
import validator,{ noErrors} from '../packages/form/validator'
import Button from '../packages/button/button'

export default function(props: any) {
  const [formData, setFormData] = useState<FormValue>({
    name: '',
    password: 'xxxxx'
  })
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } }
  ])
  const [errors, setErrors] = useState({})
  const onChange = (value: FormValue) => {
    setFormData(value)
  }
  const onSubmit = () => {
    const rules = [
      { key: 'username', required: true, label: '用户名' },
      { key: 'username', minLength: 6, label: '用户名' },
      { key: 'username', maxLength: 16, label: '用户名' },
      { key: 'password', required: true, label: '密码' },
      { key: 'password', minLength: 6, label: '密码' },
      { key: 'password', maxLength: 16, label: '密码' },
      { key: 'password', pattern: /^[a-zA-Z0-9]+$/, label: '密码' }
    ]
    const errors = validator(formData, rules)
    console.log('errors')
    console.log(errors)
    if (noErrors(errors)){
      // todo
      return false
    }
    setErrors(errors)
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Form
          value={formData}
          fields={fields}
          errors={errors}
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
