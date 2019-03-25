import React, { Component } from 'react'
import Button from './button/button'
import Row from './grid/row'
import Col from './grid/col'
import Icon from './icon/icon'
import './index.scss'
class App extends Component {
  onClick = (e: React.MouseEvent) => {
    console.log(e)
  }
  render() {
    return (
      <div className="app">
        <Row>
          <Col span={12}>
            <div style={{ background: '#ccc' }}>col-12</div>
          </Col>
          <Col span={12}>
            <div style={{ background: '#ccc' }}>col-12</div>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <div style={{ background: '#ccc' }}>col-12</div>
          </Col>
          <Col offset={1} span={11}>
            <div style={{ background: '#ccc' }}>col-11</div>
          </Col>
        </Row>

        <Row gutter={10}>
          <Col span={6}>
            <div style={{ background: '#ccc' }}>col-6</div>
          </Col>
          <Col span={6}>
            <div style={{ background: '#ccc' }}>col-6</div>
          </Col>
          <Col span={6}>
            <div style={{ background: '#ccc' }}>col-6</div>
          </Col>
          <Col span={6}>
            <div style={{ background: '#ccc' }}>col-6</div>
          </Col>
        </Row>

        <Row gutter={10}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>

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
