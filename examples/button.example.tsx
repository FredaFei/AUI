import * as React from 'react'
import Button from '../packages/button/button'
import ButtonGroup from '../packages/button/buttonGroup'


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
      <div className="exp-section">
        <h3>按钮组合</h3>
        <ButtonGroup>
          <Button icon="left">upload</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button icon="loading">download</Button>
          <Button icon="right">download</Button>
        </ButtonGroup>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
        <Button icon="right" iconPosition="right" disabled>
          编辑
        </Button>
      </div>
      <div className="exp-section">
        <h3>自定义样式</h3>
        <Button className="custom">哈哈</Button>
      </div>
    </div>
  )
}