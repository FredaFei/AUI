``` jsx harmony
import * as React from 'react'
import {useState} from "react";

export default function (props) {
  const [d2, setD2] = useState(new Date('2012-01-01'));
  return (
    <div className="exp-section">
      <DatePicker firstDayOfWeek={0} value={d2} onChange={(day) => setD2(day)}/>
    </div>
  )
}
```