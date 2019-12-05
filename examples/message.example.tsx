import * as React from 'react'
import {useState} from 'react'
import Button from '../packages/button/button'
import message from '../packages/message/message'

import content1 from "./markdown/message-demo-1.md";
import content2 from "./markdown/message-demo-2.md";
import CodeBox from "./codeBox";
import Markdown from "./markdown";
import doc from "./markdown/message-doc.md";

export default function (props: any) {
  const [text, setText] = useState('default')
  const i = 5
  const onCloseMessage = (key: string): any => {
    return () => setText(key)
  }
  const onMessage = (key: string): any => {
    if (key === 'open') {
      message.open({
        content: 'This is a normal message',
        style: {color: 'red'}
      })
      return false
    }
    message[key](`This is a ${key} message`, i - 1, onCloseMessage(key))
  }
  const onManualClose = (): void => {
    message['info']('This is message', 0, () => {
      message['success']('我已经关闭了！')
    })
  }
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
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
        <CodeBox content={content1}/>
      </div>
      <h3>基础应用</h3>
      <div className="exp-section">
        <Button onClick={onManualClose}>手动关闭</Button>
        <CodeBox content={content2}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}
