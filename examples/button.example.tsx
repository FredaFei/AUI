import * as React from 'react'
import Button from '../packages/button/button'
import ButtonGroup from '../packages/button/buttonGroup'


export default function (props:any) {
  return (
    <div className="exp-box">
      <ButtonGroup>
        <Button>首页</Button>
        <Button icon="upload">upload</Button>
        <Button icon="upload">download</Button>
      </ButtonGroup>
      <Button>normal</Button>
      <Button>首页</Button>
      <Button icon="upload">upload</Button>
      <Button icon="left">下载APP</Button>
      <Button icon="settings" className="custom">
        设置权限
        </Button>
      <Button icon="right" iconPosition="right" disabled>
        编辑
        </Button>
    </div>
  )
}