import * as React from 'react'
import md from '!!raw-loader!./home.md'
import Markdown from './markdown'

export default function(props: any) {
  return (
    <div>
      <Markdown source={md}/>
    </div>
  )
}
