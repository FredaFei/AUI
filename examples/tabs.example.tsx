import * as React from 'react'
import {useState} from 'react'
import Tabs from '../packages/tabs/tabs'
import TabPane from '../packages/tabs/tabPane'

import content1 from "./markdown/tabs-demo-1.md";
import content2 from "./markdown/tabs-demo-2.md";
import content3 from "./markdown/tabs-demo-3.md";
import content4 from "./markdown/tabs-demo-4.md";
import CodeBox from "./codeBox";
import Markdown from "./markdown";
import doc from "./markdown/tabs-doc.md";

export default function (props: any) {
  const [tabs, setTabs] = useState('music2')
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <p>不设置defaultActiveKey值时，默认展示第一个</p>
        <Tabs>
          <TabPane tab="tab 1" key="key1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="key2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="key3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <CodeBox content={content1}/>
      </div>
      <h3>垂直布局</h3>
      <div className="exp-section">
        <Tabs direction="vertical">
          <TabPane tab="sport" key="sport1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="music" key="music1">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="art" key="art1">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <CodeBox content={content2}/>
      </div>
      <h3>手动更新</h3>
      <div className="exp-section">
        <Tabs activeKey={tabs} onChange={value => { setTabs(value)}}>
          <TabPane tab="sport" key="sport2">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="music" key="music2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="art" key="art2">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <CodeBox content={content3}/>
      </div>
      <h3>禁用</h3>
      <div className="exp-section">
        <Tabs defaultActiveKey="art3">
          <TabPane tab="sport" key="sport3">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="music" key="music3" disabled>
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="art" key="art3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        <CodeBox content={content4}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}
