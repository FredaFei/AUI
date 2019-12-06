import * as React from 'react'
import ReactMarkdown from "react-markdown"
import Icon from "../packages/icon/icon"
import CodeBlock from "./codeBlock"

import {useState} from "react"

interface Props {
  [key: string]: string
}

export default function (props: Props) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="code-box">
      <div className="code-title" onClick={() => setVisible(!visible)}>
        <Icon name={visible ? 'code-open' : 'code-close'}/>
        <span>查看代码</span>
      </div>
      {visible && <ReactMarkdown source={props.content}
                                 escapeHtml={false}
                                 renderers={{
                                   code: CodeBlock
                                 }}></ReactMarkdown>
      }
    </div>
  );
}