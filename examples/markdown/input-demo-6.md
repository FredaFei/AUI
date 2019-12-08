``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props) {
  return (
    <div>
      <Input type="text" placeholder="text" />
      <Input type="number" placeholder="number" />
      <Input type="password" placeholder="password" />
      <Input type="email" placeholder="email" />
      <Input type="date" />
      <Input type="time" />
      <Input type="tel" placeholder="tel" />
      <Input type="url" pattern="https://.*" placeholder="url" />
      <Input type="search" placeholder="search" />
    </div>
  )
}
```
