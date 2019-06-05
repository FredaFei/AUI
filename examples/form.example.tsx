import * as React from 'react'
import { useState, Fragment } from 'react'
import Form, { FormValue, FormFields } from '../packages/form/form'
import Button from '../packages/button/button'
import ButtonGroup from '../packages/button/buttonGroup'
import Radio from '../packages/radio/radio'
import Switch from '../packages/switch/switch'
import validator, { noErrors } from '../packages/form/validator'

const names = ['jan', 'lily', 'bob', 'jerry']

function checkName(
  value: string,
  success: () => void,
  fail: (message: string) => void
) {
  setTimeout(() => {
    console.log('我已经知道结果了')
    if (!names.includes(value)) {
      success()
    } else {
      fail('该用户名已存在')
    }
  }, 500)
}

function baseFormExample(props: any) {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  })
  const [fields] = useState<FormFields[]>([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } }
  ])
  const [errors] = useState({})
  const onChange = (value: FormValue) => {
    setFormData(value)
  }
  const onSubmit = (): any => {}
  return (
    <Form
      value={formData}
      fields={fields}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      buttons={
        <Fragment>
          <Button type="submit">提交</Button>
        </Fragment>
      }
    />
  )
}

function layoutFormExample(props: any) {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  })
  const [fields] = useState<FormFields[]>([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } }
  ])
  const [errors] = useState({})
  const [layout, setLayout] = useState('vertical')
  const [layouts] = useState(['horizontal', 'vertical', 'inline'])
  const onChange = (value: FormValue) => {
    setFormData(value)
  }
  const onSubmit = (): any => {}
  return (
    <div>
      <ButtonGroup style={{ marginBottom: '20px' }}>
        {layouts.map(i => (
          <Button
            key={i}
            style={layout === i ? { background: '#66e2d5', color: '#fff' } : {}}
            onClick={() => setLayout(i)}
          >
            {i}
          </Button>
        ))}
      </ButtonGroup>
      <Form
        layout={layout}
        value={formData}
        fields={fields}
        errors={errors}
        onChange={onChange}
        onSubmit={onSubmit}
        buttons={
          <Fragment>
            <Button type="submit">提交</Button>
          </Fragment>
        }
      />
    </div>
  )
}

function validateFormExample(props: any) {
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
  const onSubmit = (): any => {
    const rules = [
      { key: 'username', required: true, label: '用户名' },
      { key: 'username', minLength: 6, label: '用户名' },
      { key: 'username', maxLength: 16, label: '用户名' },
      { key: 'password', required: true, label: '密码' },
      { key: 'password', minLength: 6, label: '密码' },
      { key: 'password', maxLength: 16, label: '密码' },
      { key: 'password', pattern: /^[a-zA-Z0-9]+$/, label: '密码' }
    ]
    validator(
      formData,
      rules,
      (errors: any): any => {
        if (noErrors(errors)) {
          // todo
          return false
        }
        setErrors(errors)
      }
    )
  }
  return (
    <Form
      value={formData}
      fields={fields}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      buttons={
        <Fragment>
          <Button type="submit">提交</Button>
          <Button type="reset" onClick={() => setErrors({})}>
            取消
          </Button>
        </Fragment>
      }
    />
  )
}
function radioGroupExample() {
  const [checked, setChecked] = useState([''])
  const onChange = (e: React.FormEvent) => {
    setChecked([(e.target as HTMLInputElement).value])
  }
  const groups = [
    { name: 'gender', value: 'boy' },
    { name: 'gender', value: 'girl' }
  ]
  return (
    <Fragment>
      {groups.map(i => (
        <Radio
          key={i.value}
          value={i.value}
          checked={checked.includes(i.value)}
          onChange={onChange}
          name={i.name}
        >
          {i.value}
        </Radio>
      ))}
    </Fragment>
  )
}

function customFormExample(props: any) {
  const [formData, setFormData] = useState<FormValue>({
    username: 'jerry',
    age: '',
    gender: '',
    switch: '',
    password: '',
    password2: ''
  })
  const [fields] = useState<FormFields[]>([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'age', label: '年龄', input: { type: 'number' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
    { name: 'password2', label: '确认密码', input: { type: 'password' } },
    {
      name: 'gender',
      label: '性别',
      input: radioGroupExample
    },
    {
      name: 'switch',
      label: 'switch',
      input: () => <Switch />
    }
  ])
  const [errors, setErrors] = useState({})
  const onChange = (value: FormValue) => {
    setFormData(value)
  }
  const onSubmit = (): any => {
    const rules = [
      { key: 'username', required: true, label: '用户名' },
      {
        key: 'username',
        asyncValidator: {
          validate: (value: string, callback: (error?: string) => any) => {
            return new Promise<void>((resolve, reject) => {
              checkName(value, resolve, reject)
            }).then(
              () => {
                callback()
              },
              val => {
                callback(val)
              }
            )
          }
        },
        label: '用户名'
      },
      { key: 'username', minLength: 6, label: '用户名' },
      { key: 'password', required: true, label: '密码' },
      { key: 'password', minLength: 6, label: '密码' },
      { key: 'password', maxLength: 8, label: '密码' },
      { key: 'password', pattern: /^[a-zA-Z0-9]+$/, label: '密码' },
      { key: 'password2', required: true, label: '确认密码' },
      { key: 'password2', minLength: 6, label: '确认密码' },
      { key: 'password2', maxLength: 8, label: '确认密码' },
      { key: 'password2', pattern: /^[a-zA-Z0-9]+$/, label: '确认密码' },
      {
        key: 'password2',
        validator: {
          validate: (value: string, callback: (error?: string) => any) => {
            if (value !== formData['password']) {
              callback('两次的密码不一致')
            }
            callback()
          }
        },
        label: '确认密码'
      }
    ]
    validator(
      formData,
      rules,
      (errors: any): any => {
        if (noErrors(errors)) {
          // todo
          console.log('submit')
          return false
        }
        console.log(errors)
        setErrors(errors)
      }
    )
  }
  return (
    <Form
      value={formData}
      fields={fields}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      errorDisplayMode="all"
      buttons={
        <Fragment>
          <Button type="submit">提交</Button>
          <Button type="reset" onClick={() => setErrors({})}>
            取消
          </Button>
        </Fragment>
      }
    />
  )
}

export default function(props: any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        {baseFormExample(props)}
      </div>
      <div className="exp-section">
        <h3>表单布局</h3>
        {layoutFormExample(props)}
      </div>
      <div className="exp-section">
        <h3>表单验证</h3>
        {validateFormExample(props)}
      </div>
      <div className="exp-section">
        <h3>自定义表单元素和验证</h3>
        {customFormExample(props)}
      </div>
    </div>
  )
}
