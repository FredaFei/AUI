import * as React from 'react'
import {useState} from 'react'
import Switch from '../packages/switch/switch'
import Button from '../packages/button/button'

import content1 from "./markdown/switch-demo-1.md";
import content2 from "./markdown/switch-demo-2.md";
import content3 from "./markdown/switch-demo-3.md";
import CodeBox from "./codeBox";
import Markdown from "./markdown";
import doc from "./markdown/switch-doc.md";


export default function (props: any) {
  const [checked, setChecked] = useState(true)
  const onChange = (checked: boolean): any => {
    console.log(`我是${checked}`)
  }
  const onToggleSwitch = (): any => {
    setChecked(!checked)
  }
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Switch defaultChecked onChange={onChange}/>
        <CodeBox content={content1}/>
      </div>
      <h3>手动触发 onChange</h3>
      <div className="exp-section">
        <Switch checked={checked} style={{marginRight: '30px'}}/>
        <Button onClick={onToggleSwitch}>toggle</Button>
        <CodeBox content={content2}/>
      </div>
      <h3>不可用状态</h3>
      <div className="exp-section">
        <Switch disabled defaultChecked style={{marginRight: '30px'}}/>
        <Switch disabled/>
        <CodeBox content={content3}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}
