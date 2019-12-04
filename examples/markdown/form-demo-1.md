```javascript
import * as React from 'react'
import {useState, Fragment} from 'react'

const style = {width: '40%'}
  
function baseFormExample(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ])
  const [errors] = useState({})
  const onChange = (value) => {
    setFormData(value)
  }
  const onSubmit = () => {}
  return (
    <Form value={formData} fields={fields} errors={errors} onChange={onChange} onSubmit={onSubmit} style={style}
          buttons={
            <Fragment>
              <Button type="submit">提交</Button>
            </Fragment>
          }
    />
  )
}
```