import * as React from 'react'
import { useState } from 'react'
import Button from '../packages/button/button'
import message from '../packages/message/message'

export default function(props: any) {
  const [text, setText] = useState('default')
  const i = 5
  const onCloseMessage = key => {
    return () => setText(key)
  }
  const onMessage = key => {
    if (key === 'open') {
      message.open({ content: 'This is a normal message',style: {color:'red'} })
      return false
    }
    message[key](`This is a ${key} message`, i - 1, onCloseMessage(key))
  }
  const onManualClose = () => {
    message.info('This is message', 0, () => {
      message.success('我已经关闭了！')
    })
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础调用</h3>
        <Button onClick={() => onMessage('open')}>message open</Button>
        <Button onClick={() => onMessage('success')}>success</Button>
        <Button onClick={() => onMessage('info')}>info</Button>
        <Button onClick={() => onMessage('warning')}>warning</Button>
        <Button onClick={() => onMessage('error')}>error</Button>
        <Button onClick={() => onMessage('loading')}>loading</Button>
        <h4 style={{ marginTop: '20px' }}>
          current text: <span style={{ color: '#1890ff' }}>{text}</span>
        </h4>
      </div>
      <div className="exp-section">
        <h3>基础调用</h3>
        <Button onClick={onManualClose}>手动关闭</Button>
      </div>
    </div>
  )
}
