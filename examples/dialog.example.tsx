import * as React from 'react'
import { useState } from 'react'
import Button from '../packages/button/button'
import Dialog, { alert, confirm, modal } from '../packages/dialog/dialog'

export default function(props: any) {
  const [state, setState] = useState({ visible: false })
  const [x, setX] = useState(false)
  const onClose = () => {
    setState({ visible: !state.visible })
  }
  const onClose2 = () => {
    setX(!x)
  }
  const onAlert = () => {
    alert('haha',()=>{
      console.log('alert no')
    })
  }
  const onConfirm = () => {
    confirm(
      'confirm content',
      () => {
        console.log('confirm yes')
      },
      () => {
        console.log('confirm no')
      }
    )
  }
  const onModal = () => {
    const close = modal(
      <div>
        <h4>haha</h4>
        <button onClick={() => { close()}}>close</button>
      </div>,
      () => {
        console.log('confirm yes')
      },
      () => {
        console.log('confirm no')
      }
    )
  }
  return (
    <div className="exp-box">
      <Button onClick={onModal}>modal</Button>
      <Button onClick={onAlert}>alert</Button>
      <Button onClick={onConfirm}>confirm</Button>
      <Button onClick={onClose}>click me</Button>
      <Button onClick={onClose2}>click me 2</Button>
      <Dialog
        className="l"
        visible={x}
        // title="this is a title"
        onClose={onClose2}
        onConfirm={() => {
          alert('confirm')
        }}
        mask={{ visible: false }}
        footer={null}
      >
        <h3>content 1</h3>
        <h3>content 2</h3>
        <h1>...</h1>
      </Dialog>
      <Dialog
        visible={state.visible}
        title="this is a title"
        mask={{ closable: false, visible: true }}
        onClose={onClose}
        footer={
          <React.Fragment>
            <Button
              onClick={() => {
                onClose()
                console.log('no')
              }}
            >
              no
            </Button>
            <Button
              onClick={() => {
                onClose()
                console.log('yes')
              }}
            >
              yes
            </Button>
          </React.Fragment>
        }
      >
        <h3>content 1</h3>
        <h3>content 2</h3>
        <h3>content 3</h3>
        <h3>content 4</h3>
        <h1>...</h1>
      </Dialog>
    </div>
  )
}
