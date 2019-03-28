import React, { Component } from 'react'
import Button from './button/button'
import Row from './grid/row'
import Col from './grid/col'
import Icon from './icon/icon'
import Tabs from './tabs/tabs'
import TabPane from './tabs/tabPane'
import Collapse from './collapse/collapse'
import Pane from './collapse/pane'
import './index.scss'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
class App extends Component {
  state = {
    activeKey: 'art',
    direction: 'horizontal'
  }
  onClick = (e: React.MouseEvent) => {
    console.log(e)
  }
  callback2 = (key: string) => {
    // this.setState({
    // activeKey: key
    // })
  }
  onClick1 = () => {
    this.setState({
      activeKey: 'music'
    })
  }
  render() {
    return (
      <div className="app">
        <div className="labels">
          <Collapse accordion>
            <Pane header="This is panel header 1" key="1">
              <p>{text}</p>
            </Pane>
            <Pane header="This is panel header 2" key="2">
              <p>{text}</p>
            </Pane>
            <Pane header="This is panel header 3" key="3" disabled>
              <p>{text}</p>
            </Pane>
          </Collapse>
          <Collapse defaultActiveKey={['2', '3']}>
            <Pane header="This is panel header 1" key="1">
              <p>{text}</p>
            </Pane>
            <Pane header="This is panel header 2" key="2">
              <p>{text}</p>
            </Pane>
            <Pane header="This is panel header 3" key="3">
              <p>{text}</p>
            </Pane>
          </Collapse>

          <Collapse
            activeKey={['1', '3']}
            expandIcon={active => (
              <Icon
                name="upload"
                rotate={active ? 90 : 0}
                className="am-icon-animation"
              />
            )}
          >
            <Pane
              header="This is panel header 1"
              visibleIcon={false}
              key="1"
            >
              <p>{text}</p>
            </Pane>
            <Pane header="This is panel header 2" key="2">
              <p>{text}</p>
            </Pane>
            <Pane header="This is panel header 3" key="3">
              <p>{text}</p>
            </Pane>
          </Collapse>
        </div>
        
        <div className="labels">
          <Button icon="settings" onClick={this.onClick1}>
            change
          </Button>
          <Tabs>
            <TabPane tab="tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>

          <Tabs direction="vertical">
            <TabPane tab="sport" key="sport">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="music" key="music">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="art" key="art">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
          <Tabs defaultActiveKey="music">
            <TabPane tab="sport" key="sport">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="music" key="music">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="art" key="art">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>

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
