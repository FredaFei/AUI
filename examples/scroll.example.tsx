import * as React from 'react'
import {Scroll} from '../packages/index'
import {useState} from "react";
import {range} from '../packages/utils/collection'

import content1 from "./markdown/scroll-demo-1.md";
import doc from "./markdown/scroll-doc.md";
import Markdown from './markdown'
import CodeBox from "./codeBox";


const page = 15
let index = 1
export default function (props: any) {
  const [source, setSource] = useState(range(1, index * page))
  const onPullDown = () => {
    console.log('on down refresh')
    index = 1
    setSource(range(1, index * page))
  }
  const onPullUp = () => {
    console.log('on up load more')
    index += 1
    setSource(range(1, index * page))
  }
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Scroll style={{height: '300px'}} onPullDown={onPullDown} onPullUp={onPullUp}>
          <ul>{source.map(i => <li key={i}>hello, scroll {i}</li>)}</ul>
        </Scroll>
        <CodeBox content={content1}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}