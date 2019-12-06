``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function () {
  const onClose1 = (): void => {
    message['info']('This is message',() => {
      message['success']('我已经关闭了！')
    })
  }
  const onClose2 = (): void => {
    message['info']('This is message', 0, () => {
      message['success']('我已经关闭了！')
    })
  }
  return (
    <div className="exp-section">
      <Button onClick={onClose1}>自动关闭时回调执行</Button>
      <Button onClick={onClose2}>手动时回调执行</Button>
    </div>
  )
}
```