import * as React from 'react'
import { useState } from 'react'
import Button from '../packages/button/button'
import Dialog from '../packages/dialog/dialog'

export default function(props: any) {
  const [state, setState] = useState({ visible: true })
  return (
    <div className="exp-box">
      <Button onClick={() => setState({ visible: !state.visible })}>
        click me
      </Button>
      <Dialog visible={state.visible} title="this is a title">
        <h3>content 1</h3>
        <h3>content 2</h3>
        <h3>content 3</h3>
        <h3>content 4</h3>
        <h1>...</h1>
      </Dialog>
    </div>
  )
}
