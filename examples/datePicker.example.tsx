import * as React from 'react'
import {DatePicker} from '../packages/index'
import {useState} from "react";

import content1 from "./markdown/datePicker-demo-1.md";
import content2 from "./markdown/datePicker-demo-2.md";
import content3 from "./markdown/datePicker-demo-3.md";
import content4 from "./markdown/datePicker-demo-4.md";
import CodeBox from "./codeBox";
import Markdown from "./markdown";
import doc from "./markdown/datePicker-doc.md";

export default function (props: any) {
  const [d1, setD1] = useState<Date | string>(new Date());
  const [d2, setD2] = useState<Date | string>(new Date('2012-01-01'));
  const onChange = (date: Date | string) => {
    console.log(date)
  }
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <DatePicker value={d1} onChange={(day: Date | string) => setD1(day)}/>
        <CodeBox content={content1}/>
      </div>
      <h3>禁用</h3>
      <div className="exp-section">
        <DatePicker onChange={onChange}/>
        <CodeBox content={content2}/>
      </div>
      <h3>自定义日期星期</h3>
      <div className="exp-section">
        <DatePicker firstDayOfWeek={0} value={d2} onChange={(day: Date | string) => setD2(day)}/>
        <CodeBox content={content3}/>
      </div>
      <h3>日期默认为空</h3>
      <div className="exp-section">
        <DatePicker value={new Date()} disabled/>
        <CodeBox content={content4}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}