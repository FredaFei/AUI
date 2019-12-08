``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props) {
  return <div>
    <Input addOnBefore="Http://" addOnAfter=".com" />
    <Input addOnAfter={<Icon name="settings" />} />
    <Input addOnAfter="搜索" className="custom-input-search" />
    <Input before={<Icon name="settings" />} />
    <Input after={<Icon name="thumbs-up" />} />
    <Input before={<Icon name="date"/>} after={<Icon name="error" />} />
  </div>
}
```
