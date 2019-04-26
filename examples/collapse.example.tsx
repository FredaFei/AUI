import * as React from 'react'
import { useState } from 'react'
import Collapse from '../packages/collapse/collapse'
import Pane from '../packages/collapse/pane'
import Icon from '../packages/icon/icon'

export default function (props: any) {
  const [selected1, setSelected1] = useState(['1'])
  const onChange = checked => {
    console.log(`我是${checked}`)
  }
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Collapse defaultActiveKey={selected1} onChange={onChange}>
          <Pane header="This is panel header 1" key="1">
            <p>This is pane content 1</p>
          </Pane>
          <Pane header="This is panel header 2" key="2">
            <p>This is pane content 2</p>
          </Pane>
          <Pane header="This is panel header 3" key="3">
            <p>This is pane content 3</p>
          </Pane>
        </Collapse>
      </div>
      <div className="exp-section">
        <h3>手风琴</h3>
        <Collapse accordion>
          <Pane header="This is panel header 1" key="1">
            <p>This is pane content 1</p>
          </Pane>
          <Pane header="This is panel header 2" key="2">
            <p>This is pane content 2</p>
          </Pane>
          <Pane header="This is panel header 3" key="3">
            <p>This is pane content 3</p>
          </Pane>
        </Collapse>
      </div>
      <div className="exp-section">
        <h3>自定义状态</h3>
        <Collapse
          activeKey={['1', '3']}
          // style={{
          //   background: 'rgb(247, 247, 247)'
          // }}
          className="custom-desk"
          expandIcon={active => (
            <Icon
              name="upload"
              rotate={active ? 90 : 0}
              className="am-icon-animation"
            />
          )}
        >
          <Pane header="This is panel header 1" visibleIcon={false} key="1">
            <p>This is pane content 1</p>
          </Pane>
          <Pane header="This is panel header 2" key="2">
            <p>This is pane content 2</p>
          </Pane>
          <Pane header="This is panel header 3" key="3">
            <p>This is pane content 3</p>
          </Pane>
        </Collapse>
      </div>
    </div>
  )
}
