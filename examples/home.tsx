import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import md from '!!raw-loader!./home.md'

export default function(props: any) {
  return (
    <div>
      <ReactMarkdown source={md} escapeHtml={false} />
    </div>
  )
}
