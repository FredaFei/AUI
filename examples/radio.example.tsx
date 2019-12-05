import * as React from 'react'
import {useState} from 'react'
import Radio from '../packages/radio/radio'

import content1 from "./markdown/radio-demo-1.md";
import content2 from "./markdown/radio-demo-2.md";
import content3 from "./markdown/radio-demo-3.md";
import CodeBox from "./codeBox";
import Markdown from "./markdown";
import doc from "./markdown/radio-doc.md";

const groups = [
  {name: 'fruit', value: 'apple'},
  {name: 'fruit', value: 'peach'},
  {name: 'fruit', value: 'orange'},
  {name: 'fruit', value: 'pear'}
]

export default function (props: any) {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(['peach'])

  const onChange1 = (e: React.FormEvent) => {
    setChecked1((e.target as HTMLInputElement).checked)
  }
  const onChange2 = (e: React.FormEvent) => {
    console.log(e)
    setChecked2([(e.target as HTMLInputElement).value])
  }
  const onChange3 = (e: React.FormEvent) => {
    console.log(e)
  }
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Radio onChange={onChange1} checked={checked1}>apple</Radio>
        <CodeBox content={content1}/>
      </div>
      <h3>单选组合</h3>
      <div className="exp-section">
        <div>
          {groups.map(i => (
            <Radio
              key={i.value}
              value={i.value}
              checked={checked2.includes(i.value)}
              onChange={onChange2}
              name={i.name}
            >
              {i.value}
            </Radio>
          ))}
        </div>
        <p>当前选中的水果: {JSON.stringify(checked2)}</p>
        <CodeBox content={content2}/>
      </div>
      <h3>不可用状态</h3>
      <div className="exp-section">
        <Radio checked disabled onChange={onChange3}>
          apple
        </Radio>
        <Radio checked={false} disabled onChange={onChange3}>
          peach
        </Radio>
        <CodeBox content={content3}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}
