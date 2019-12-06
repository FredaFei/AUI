``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props) {
  const [text, setText] = useState('default')
  const i = 5
  const onCloseMessage = (key) => {
    return () => setText(key)
  }
  const onMessage = (key) => {
    if (key === 'open') {
      message.open({
        content: 'This is a normal message',
        style: {color: 'red'}
      })
      return
    }
    message[key](`This is a ${key} message`, i - 1, onCloseMessage(key))
  }
  return (
    <div className="exp-section">
      <Button onClick={() => onMessage('open')}>message open</Button>
      <Button onClick={() => onMessage('success')}>success</Button>
      <Button onClick={() => onMessage('info')}>info</Button>
      <Button onClick={() => onMessage('warning')}>warning</Button>
      <Button onClick={() => onMessage('error')}>error</Button>
      <Button onClick={() => onMessage('loading')}>loading</Button>
      <h4 style={{marginTop: '20px'}}>
        current text: <span style={{color: '#1890ff'}}>{text}</span>
      </h4>
    </div>
  )
}
```