import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import Icon from "../packages/icon/icon"
import Prism from "./lib/prism"

import {useState} from "react"

interface Props {
  [key: string]: string
}

const CodeBlock = (props: Props) => {
  setTimeout(() => Prism.highlightAll(), 0)
  return <pre className="line-numbers">
          <code className={`language-${props.language}`}>
            {props.value}
          </code>
        </pre>
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
                                 renderers={{
                                   code: CodeBlock
                                 }}></ReactMarkdown>
      }
    </div>
  );
}