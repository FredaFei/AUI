import * as React from 'react'
import {DatePicker} from '../packages/index'
import {useState} from "react";

export default function (props: any) {
  const [d1, setD1] = useState<Date | string>(new Date());
  const [d2, setD2] = useState<Date | string>(new Date());
  const onChange = (date: Date | string) => {
    console.log(date)
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <DatePicker value={d1} onChange={(day: Date | string) => setD1(day)}/>
      </div>
      <div className="exp-section">
        <h3>日期默认为空</h3>
        <DatePicker onChange={onChange}/>
      </div>
      <div className="exp-section">
        <h3>自定义日期星期</h3>
        <DatePicker firstDayOfWeek={0} value={d2} onChange={(day: Date | string) => setD2(day)}/>
      </div>
    </div>
  )
}