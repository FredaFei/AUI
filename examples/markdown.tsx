import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "./codeBlock";

export default function (props:any) {
  return (
    <div className="markdown-content">
      <ReactMarkdown source={props.source}
                     escapeHtml={false}
                     renderers={{
                       code: CodeBlock
                     }}></ReactMarkdown>
    </div>
  )
}
