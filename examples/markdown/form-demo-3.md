``` jsx harmony
import * as React from 'react'
import {useState, Fragment} from 'react'

const style = {width: '40%'}

function validateFormExample(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ])
  const [errors, setErrors] = useState({})
  const onChange = (value) => {
    setFormData(value)
  }
  const onSubmit = () => {
    const rules = [
      {key: 'username', required: true, label: '用户名'},
      {key: 'username', minLength: 6, label: '用户名'},
      {key: 'username', maxLength: 16, label: '用户名'},
      {key: 'password', required: true, label: '密码'},
      {key: 'password', minLength: 6, label: '密码'},
      {key: 'password', maxLength: 16, label: '密码'},
      {key: 'password', pattern: /^[a-zA-Z0-9]+$/, label: '密码'}
    ]
    validator(
      formData,
      rules,
      (errors) => {
        if (noErrors(errors)) {
          // todo
          return false
        }
        setErrors(errors)
      }
    )
  }
  return (
    <Form value={formData} fields={fields} errors={errors} onChange={onChange} onSubmit={onSubmit}  style={style}
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

export default function (props) {
  return (
    <div className="exp-section">
      {validateFormExample(props)}
    </div>
  )
}
```