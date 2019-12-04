import * as React from 'react'
import {useState} from 'react'
import Button from '../packages/button/button'
import Dialog, {alert, confirm, modal} from '../packages/dialog/dialog'

import content1 from "./markdown/dialog-demo-1.md";
import content2 from "./markdown/dialog-demo-2.md";
import CodeBox from "./codeBox";

export default function (props: any) {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
  const onClose1 = () => {
    setX(!x)
  }
  const onClose2 = () => {
    setY(!y)
  }
  const onAlert = () => {
    alert({
      content: <h3>this is a content</h3>,
      onYes() {
        console.log('alert yes')
      }
    })
  }
  const onConfirm = () => {
    confirm({
      content: <div><h3>this is a content</h3></div>,
      title: 'this is a title',
      onYes() {
        console.log('confirm yes')
      },
      onNo() {
        console.log('confirm no')
      }
    })
  }
  const onModal = () => {
    const close = modal({
      content: (
        <div>
          <h3>this is a content</h3>
          <Button onClick={e => {close()}}>close</Button>
        </div>
      ),
      title: 'this is a title',
      onYes() {
        console.log('modal yes')
      },
      onNo() {
        console.log('modal no')
      }
    })
  }
  return (
    <div className="exp-sections-wrapper">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Button onClick={() => setX(true)}>Open Dialog</Button>
        <Button onClick={() => setY(true)}>
          Open Dialog with customized footer
        </Button>
        <Dialog visible={x} title="温馨提示" onClose={onClose1}>
          <div>打雷啦...</div>
          <div>下雨啦...</div>
          <div>收衣服啦...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
        </Dialog>

        <Dialog visible={y} title="编辑日志" onClose={onClose2}
                footer={
                  <React.Fragment>
                    <Button onClick={() => {onClose2()}}>取消</Button>
                    <Button className="exp-section-btn" onClick={() => {onClose2()}}>提交</Button>
                  </React.Fragment>
                }>
          <div>打雷啦...</div>
          <div>下雨啦...</div>
          <div>收衣服啦...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
        </Dialog>
        <CodeBox content={content1}/>
      </div>
      <h3>动态调用</h3>
      <div className="exp-section">
        <Button onClick={onModal}>modal</Button>
        <Button onClick={onAlert}>alert</Button>
        <Button onClick={onConfirm}>confirm</Button>
        <CodeBox content={content2}/>
      </div>
    </div>
  )
}
