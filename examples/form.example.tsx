import * as React from 'react'
import { useState, Fragment } from 'react'
import Form, { FormValue, FormFields } from '../packages/form/form'
import validator,{ noErrors} from '../packages/form/validator'
import Button from '../packages/button/button'

const names = ['jan','lily','bob','jerry']

function checkName(value: string, success: () => void, fail: () => void) {
  setTimeout(() => {
    console.log('我已经知道结果了')
    if (!names.includes(value)) {
      success()
    } else {
      fail()
    }
  }, 3000)
}

export default function(props: any) {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  })
  const [fields] = useState<FormFields[]>([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } }
  ])
  const [errors, setErrors] = useState({})
  const onChange = (value: FormValue) => {
    setFormData(value)
  }
  const onSubmit = ():any => {
    const rules = [
      { key: 'username', required: true, label: '用户名' },
      { key: 'username', validator: {
        validate: (value:string)=>{
          console.log('我要调用 validate')
          return new Promise<void>((resolve, reject)=>{
            checkName(value,resolve,reject)
          })
        }
      }, label: '用户名' },
      { key: 'username', minLength: 6, label: '用户名' },
      { key: 'username', maxLength: 16, label: '用户名' },
      { key: 'password', required: true, label: '密码' },
      { key: 'password', minLength: 6, label: '密码' },
      { key: 'password', maxLength: 16, label: '密码' },
      { key: 'password', pattern: /^[a-zA-Z0-9]+$/, label: '密码' }
    ]
    validator(formData, rules,(errors:any):any=>{
      if (noErrors(errors)) {
        // todo
        return false
      }
      console.log('验证结束，结果是')
      console.log(errors)
      setErrors(errors)
    })
    
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
        <Form
          layout="vertical"
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
        <h3>不可用状态</h3>
      </div>
      <div className="exp-section">
        <h3>自定义样式</h3>
        <Form
          layout="inline"
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
    </div>
  )
}
