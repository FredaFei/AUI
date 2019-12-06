``` jsx harmony
import * as React from 'react'
import {useState, Fragment} from 'react'

function layoutFormExample(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ])
  const [errors] = useState({})
  const [layout, setLayout] = useState()
  const [layouts] = useState(['horizontal', 'vertical', 'inline'])
  const onChange = (value) => {
    setFormData(value)
  }
  const onSubmit = () => {}
  return (
    <div>
      <ButtonGroup style={{marginBottom: '20px'}}>
        {layouts.map((i) => (
          <Button
            key={i}
            style={layout === i ? {background: '#66e2d5', color: '#fff'} : {}}
            onClick={() => setLayout(i)}
          >
            {i}
          </Button>
        ))}
      </ButtonGroup>
      <Form layout={layout} value={formData} fields={fields} errors={errors} onChange={onChange} onSubmit={onSubmit}
             buttons={
              <Fragment>
                <Button type="submit">提交</Button>
              </Fragment>
            }
      />
    </div>
  )
}

export default function (props) {
  return (
    <div className="exp-section">
      {layoutFormExample(props)}
    </div>
  )
}
```