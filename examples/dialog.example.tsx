import * as React from 'react'
import { useState } from 'react'
import Button from '../packages/button/button'
import Dialog from '../packages/dialog/dialog'

export default function(props: any) {
  const [state, setState] = useState({ visible: false })
  return (
    <div className="exp-box">
      <Button onClick={() => setState({ visible: !state.visible })}>
        click me
      </Button>
      <Dialog visible={state.visible} />
    </div>
  )
}
