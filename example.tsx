import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import Button from './packages/button/button'
import ButtonGroup from './packages/button/buttonGroup'

class App extends Component {
  render() {
    return (
      <div className="app">
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
}


ReactDOM.render(<App />, document.getElementById('root'))

