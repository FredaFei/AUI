``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props) {
  const [error] = useState('用户名不能为空')
  return (
    <div className="custom-input">
      <Input label="用户名：" labelPosition="top" error={error} errorPosition="right" type="text"/>
      <Input label="用户名：" labelPosition="left" error={error} errorPosition="right" type="text"/>
      <Input label="用户名：" labelPosition="left" error={error} errorPosition="bottom" type="text"/>
    </div>
  )
}
```
