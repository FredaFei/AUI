import * as React from 'react'
import {useState} from 'react'
import Collapse from '../packages/collapse/collapse'
import Pane from '../packages/collapse/pane'
import Icon from '../packages/icon/icon'

import content1 from "./markdown/collapse-demo-1.md";
import content2 from "./markdown/collapse-demo-2.md";
import content3 from "./markdown/collapse-demo-3.md";
import CodeBox from "./codeBox";
import Markdown from "./markdown";
import doc from "./markdown/collapse-doc.md";

export default function (props: any) {
  const [selected1] = useState(['1'])
  const onChange = (checked: string): any => {
    console.log(`我是${checked}`)
  }
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Collapse defaultActiveKey={selected1} onChange={onChange}>
          <Pane header="This is panel header 1" name="1">
            <p>This is pane content 1</p>
          </Pane>
          <Pane header="This is panel header 2" name="2">
            <p>This is pane content 2</p>
          </Pane>
          <Pane header="This is panel header 3" name="3">
            <p>This is pane content 3</p>
          </Pane>
        </Collapse>
        <CodeBox content={content1}/>
      </div>
      <h3>手风琴</h3>
      <div className="exp-section">
        <Collapse accordion>
          <Pane header="This is panel header 1" name="1">
            <p>This is pane content 1</p>
          </Pane>
          <Pane header="This is panel header 2" name="2">
            <p>This is pane content 2</p>
          </Pane>
          <Pane header="This is panel header 3" name="3" disabled>
            <p>This is pane content 3</p>
          </Pane>
        </Collapse>
        <CodeBox content={content2}/>
      </div>
      <h3>自定义状态</h3>
      <div className="exp-section">
        <Collapse
          activeKey={['1', '3']}
          className="custom-desk"
          expandIcon={active => (
            <Icon
              name="upload"
              rotate={active ? 90 : 0}
              className="am-icon-animation"
            />
          )}
        >
          <Pane header="This is panel header 1" visibleIcon={false} name="1">
            <p>This is pane content 1</p>
          </Pane>
          <Pane header="This is panel header 2" name="2">
            <p>This is pane content 2</p>
          </Pane>
          <Pane header="This is panel header 3" name="3">
            <p>This is pane content 3</p>
          </Pane>
        </Collapse>
        <CodeBox content={content3}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}
