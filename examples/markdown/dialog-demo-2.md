``` jsx harmony
import * as React from 'react'

export default function (props: any) {
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
    <div className="exp-section">
      <Button onClick={onModal}>modal</Button>
      <Button onClick={onAlert}>alert</Button>
      <Button onClick={onConfirm}>confirm</Button>
    </div>
  )
}
```