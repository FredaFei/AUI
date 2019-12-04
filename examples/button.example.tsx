import * as React from 'react'
import Button from '../packages/button/button'
import ButtonGroup from '../packages/button/buttonGroup'

import content1 from "./markdown/button-demo-1.md";
import content2 from "./markdown/button-demo-2.md";
import content3 from "./markdown/button-demo-3.md";
import content4 from "./markdown/button-demo-4.md";
import CodeBox from "./codeBox";

export default function (props:any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Button>首页</Button>
        <Button icon="settings">设置</Button>
        <Button icon="upload">下载APP</Button>
        <Button icon="thumbs-up">好看</Button>
      </div>
      <CodeBox content={content1}/>
      <div className="exp-section">
        <h3>按钮组合</h3>
        <ButtonGroup>
          <Button icon="left"></Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button icon="loading"></Button>
          <Button icon="right"></Button>
        </ButtonGroup>
      </div>
      <CodeBox content={content2}/>
      <div className="exp-section">
        <h3>不可用状态</h3>
        <Button icon="right" iconPosition="right" disabled>
          编辑
        </Button>
      </div>
      <CodeBox content={content3}/>
      <div className="exp-section">
        <h3>自定义样式</h3>
        <Button className="custom">哈哈</Button>
      </div>
      <CodeBox content={content4}/>
    </div>
  )
}