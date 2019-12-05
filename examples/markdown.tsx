import * as React from 'react'
import ReactMarkdown from 'react-markdown'

export default function (props:any) {
  return (
    <div className="markdown-content">
      <ReactMarkdown source={props.source} escapeHtml={false}/>
    </div>
  )
}
