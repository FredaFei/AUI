``` jsx harmony
import * as React from 'react'
import {useState} from "react";

export default function (props) {
  const [d1, setD1] = useState(new Date());
  return (
    <div className="exp-section">
      <DatePicker value={d1} onChange={(day) => setD1(day)}/>
    </div>
  )
}
```