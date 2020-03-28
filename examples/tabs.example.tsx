import * as React from 'react';
import { useState } from 'react';
import Tabs from '../packages/tabs/tabs';
import TabPane from '../packages/tabs/tabPane';

import content1 from './markdown/tabs-demo-1.md';
import content2 from './markdown/tabs-demo-2.md';
import content3 from './markdown/tabs-demo-3.md';
import content4 from './markdown/tabs-demo-4.md';
import content5 from './markdown/tabs-demo-5.md';
import content6 from './markdown/tabs-demo-6.md';
import CodeBox from './codeBox';
import Markdown from './markdown';
import doc from './markdown/tabs-doc.md';
import { range } from '../packages/utils/collection';
import Button from '../packages/button/button';
import ButtonGroup from '../packages/button/buttonGroup';

const initTabs = range(11, 26).map(i => `tab ${i % 2 === 0 ? i * 10 : i}`);
export default function (props: any) {
  const [tabs, setTabs] = useState('music2');
  const [tabsSource] = useState(initTabs);
  const [direction, setDirection] = useState<'horizontal' | 'vertical'>('vertical');

  const style = direction === 'horizontal' ? {maxWidth: '976px'} : {height: '320px'};

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
      <h3>自定义下标线高度</h3>
      <div className="exp-section">
        <Tabs direction="vertical" lineWidthOrHeight="26">
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
        <CodeBox content={content3}/>
      </div>
      <h3>手动更新</h3>
      <div className="exp-section">
        <Tabs activeKey={tabs} onChange={value => { setTabs(value);}}>
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
        <CodeBox content={content4}/>
      </div>
      <h3>Tabs 左右、上下滑动，容纳更多标签</h3>
      <div className="exp-section">
        <ButtonGroup style={{marginBottom: '20px'}}>
          <Button onClick={() => setDirection('horizontal')}>Horizontal</Button>
          <Button onClick={() => setDirection('vertical')}>Vertical</Button>
        </ButtonGroup>

        <Tabs direction={direction} style={style}>
          {tabsSource.map(t => <TabPane tab={t} key={t}>{`Content of Tab Pane ${t}`}</TabPane>)}
        </Tabs>

        <CodeBox content={content5}/>
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
        <CodeBox content={content6}/>
      </div>
      <Markdown source={doc}/>
    </div>
  );
}
