``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <div className="exp-section">
      <Collapse accordion>
        <Pane header="This is panel header 1" name="1">
          <p>This is pane content 1</p>
        </Pane>
        <Pane header="This is panel header 2" name="2">
          <p>This is pane content 2</p>
        </Pane>
        <Pane header="This is panel header 3" name="3" disabled>
          <p>This is pane content 3</p>
        </Pane>
      </Collapse>
    </div>
  )
}
```