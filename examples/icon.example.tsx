import * as React from 'react'
import Icon from '../packages/icon/icon'
import CodeBox from './codeBox'

import content1 from "./markdown/icon-demo-1.md";
import content2 from "./markdown/icon-demo-2.md";

export default function (props: any) {
  return (
    <div className="exp-box custom-icon">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Icon name="settings"/>
        <Icon name="left"/>
        <Icon name="right"/>
        <Icon name="double-left"/>
        <Icon name="double-right"/>
        <Icon name="upload"/>
        <Icon name="thumbs-up"/>
        <Icon name="date"/>
        <Icon name="close"/>
        <Icon name="ellipsis"/>
        <Icon name="info"/>
        <Icon name="warning"/>
        <Icon name="success"/>
        <Icon name="loading"/>
        <Icon name="error"/>
        <Icon name="desc"/>
        <CodeBox content={content1}/>
      </div>
      <h3>自定义样式</h3>
      <div className="exp-section">
        <Icon name="left" spin/>
        <Icon name="upload" rotate={180}/>
        <CodeBox content={content2}/>
      </div>
    </div>
  );
}