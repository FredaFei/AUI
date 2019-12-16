import * as React from 'react'
import ControllCount from '../packages/controllCount/controllCount'

import content1 from "./markdown/controllCount-demo-1.md";
import content2 from "./markdown/controllCount-demo-2.md";
import doc from "./markdown/controllCount-doc.md";
import Markdown from './markdown'
import CodeBox from "./codeBox";
import {useState} from "react";

export default function (props: any) {
  const [count] = useState(2)

  const onChange = (val:number)=>{
    console.log(val);
  }
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <ControllCount style={{width: '140px'}} onChange={onChange}>首页</ControllCount>
        <CodeBox content={content1}/>
      </div>
      <h3>input 不可输入</h3>
      <div className="exp-section">
        <ControllCount count={count} style={{width: '140px'}} readOnly onChange={onChange}>首页</ControllCount>
        <CodeBox content={content2}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}