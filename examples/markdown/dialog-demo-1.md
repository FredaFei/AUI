``` jsx harmony
import * as React from 'react'
import {useState} from 'react'

export default function (props: any) {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
  const onClose1 = () => {
    setX(!x)
  }
  const onClose2 = () => {
    setY(!y)
  }
  return (
    <div className="exp-section">
      <Button onClick={() => setX(true)}>Open Dialog</Button>
      <Button onClick={() => setY(true)}>Open Dialog with customized footer</Button>
      <Dialog visible={x} title="温馨提示" onClose={onClose1}>
        <div>打雷啦...</div>
        <div>下雨啦...</div>
        <div>收衣服啦...</div>
        <div>Some contents...</div>
        <div>Some contents...</div>
      </Dialog>
      <Dialog visible={y} title="编辑日志" onClose={onClose2}
              mask={{closable:false,visible:true}}
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
    </div>
  )
}
```