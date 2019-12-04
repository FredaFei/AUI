```javascript
import * as React from 'react'
import {useState, Fragment} from 'react'

const style = {width: '40%'}
const names = ['jan', 'lily', 'bob', 'jerry']

function checkName(value,success,fail) {
  setTimeout(() => {
    console.log('我已经知道结果了')
    if (!names.includes(value)) {
      success()
    } else {
      fail('该用户名已存在')
    }
  }, 500)
}


function radioGroupExample() {
  const [checked, setChecked] = useState([''])
  const onChange = (e) => {
    setChecked([(e.target as HTMLInputElement).value])
  }
  const groups = [
    {name: 'gender', value: 'boy'},
    {name: 'gender', value: 'girl'}
  ]
  return (
    <Fragment>
      {groups.map(i => (
        <Radio key={i.value} value={i.value} checked={checked.includes(i.value)} onChange={onChange} name={i.name}>
          {i.value}
        </Radio>
      ))}
    </Fragment>
  )
}

function customFormExample(props) {
  const [formData, setFormData] = useState({
    username: 'jerry',
    age: '',
    gender: '',
    switch: '',
    password: '',
    password2: ''
  })
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'age', label: '年龄', input: {type: 'number'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
    {name: 'password2', label: '确认密码', input: {type: 'password'}},
    {
      name: 'gender',
      label: '性别',
      input: radioGroupExample
    },
    {
      name: 'switch',
      label: 'switch',
      input: () => <Switch/>
    }
  ])
  const [errors, setErrors] = useState({})
  const onChange = (value) => {
    setFormData(value)
  }
  const onSubmit = ()=> {
    const rules = [
      {key: 'username', required: true, label: '用户名'},
      {
        key: 'username',
        validator: (value) => {
          return new Promise<string>((resolve, reject) => {
            checkName(value, resolve, (message) => reject(message))
          })
        },
        label: '用户名'
      },
      {key: 'username', minLength: 6, label: '用户名'},
      {key: 'password', required: true, label: '密码'},
      {key: 'password', minLength: 3, label: '密码'},
      {key: 'password', maxLength: 8, label: '密码'},
      {key: 'password', pattern: /^[a-zA-Z0-9]+$/, label: '密码'},
      {key: 'password2', required: true, label: '确认密码'},
      {key: 'password2', minLength: 6, label: '确认密码'},
      {key: 'password2', maxLength: 8, label: '确认密码'},
      {key: 'password2', pattern: /^[a-zA-Z0-9]+$/, label: '确认密码'},
      {
        key: 'password2',
        validator: (value) => {
          if (value !== formData['password']) {
            return '两次的密码不一致'
          }
          return ''
        },
        label: '确认密码'
      }
    ]
    validator(
      formData,
      rules,
      (errors) => {
        if (noErrors(errors)) {
          console.log('submit')
          return false
        }
        console.log(errors)
        setErrors(errors)
      }
    )
  }
  return (
    <Form value={formData} fields={fields} errors={errors} onChange={onChange} onSubmit={onSubmit}  style={style}
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

```