import * as React from 'react'
import {useState} from 'react'
import Pager from '../packages/pager/pager'

import content1 from "./markdown/pager-demo-1.md";
import content2 from "./markdown/pager-demo-2.md";
import CodeBox from "./codeBox";
import Markdown from "./markdown";
import doc from "./markdown/pager-doc.md";

export default function (props: any) {
  const [page1, setPage1] = useState(2)
  const [page2, setPage2] = useState(1)
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Pager defaultCurrent={4} total={5} onChange={page => {console.log(page)}}/>
        <Pager current={page1} total={11} onChange={page => setPage1(page)}/>
        <CodeBox content={content1}/>
      </div>
      <h3>可跳转</h3>
      <div className="exp-section">
        <Pager visibleQuickJumper current={page2} total={10} onChange={page => setPage2(page)}/>
        <CodeBox content={content2}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}
