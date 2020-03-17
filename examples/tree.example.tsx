import * as React from 'react'
import Tree from '../packages/tree/tree'

import content1 from "./markdown/tree-demo-1.md";
import CodeBox from "./codeBox";
import Markdown from "./markdown";
import doc from "./markdown/tree-doc.md";

export default function (props: any) {
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Tree />
        <CodeBox content={content1}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}
