import React, { Component } from 'react'
import Button from './button/button'
import Icon from './icon/icon'
import './index.scss'
class App extends Component {
  onClick = (e: React.MouseEvent) => {
    console.log(e)
  }
  render() {
    return (
      <div className="App">
        <Icon name="settings" onClick={this.onClick} />
        <Icon name="loading" onClick={this.onClick} />
        <Icon
          name="left"
          rotate={90}
          style={{ fill: 'red' }}
          onClick={this.onClick}
        />
        <Icon name="right" className="haha" onClick={this.onClick} />
        <Button>normal</Button>
        <Button>首页</Button>
        <Button icon="upload">upload</Button>
        <Button icon="upload" onClick={this.onClick}>
          下载APP
        </Button>
        <Button icon="settings" onClick={this.onClick} className="custom">
          设置权限
        </Button>
        <Button icon="right" iconPosition="right" disabled>
          编辑
        </Button>
      </div>
    )
  }
}

export default App
