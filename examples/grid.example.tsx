import * as React from 'react'
import Row from '../packages/grid/row'
import Col from '../packages/grid/col'

export default function(props: any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础栅格</h3>
        <div className="custom-grid">
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </div>
      </div>
      <div className="exp-section">
        <h3>区块间隔</h3>
        <div className="custom-grid">
          <Row gutter={10}>
            <Col span={6}>
              <div>col-6</div>
            </Col>
            <Col span={6}>
              <div>col-6</div>
            </Col>
            <Col span={6}>
              <div>col-6</div>
            </Col>
            <Col span={6}>
              <div>col-6</div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="exp-section">
        <h3>左右偏移</h3>
        <div className="custom-grid">
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8} offset={8}>
              col-8
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={6}>
              col-6 col-offset-6
            </Col>
            <Col span={6} offset={6}>
              col-6 col-offset-6
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              col-12 col-offset-6
            </Col>
          </Row>
        </div>
      </div>
      <div className="exp-section">
        <h3>自定义Flex对齐</h3>
        <p>Align Top</p>
        <div className="custom-grid">
          <Row style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
            <Col span={4}>
              <div style={{ height: '100px' }}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={{ height: '50px' }}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={{ height: '120px' }}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={{ height: '80px' }}>col-4</div>
            </Col>
          </Row>
        </div>
        <p>Align center</p>
        <div className="custom-grid">
          <Row
            style={{ justifyContent: 'space-around', alignItems: 'center' }}
          >
            <Col span={4}>
              <div style={{ height: '100px' }}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={{ height: '50px' }}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={{ height: '120px' }}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={{ height: '80px' }}>col-4</div>
            </Col>
          </Row>
        </div>
        <p>Align Bottom</p>
        <div className="custom-grid">
          <Row
            style={{ justifyContent: 'space-around', alignItems: 'flex-end' }}
          >
            <Col span={4}>
              <div style={{ height: '100px' }}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={{ height: '50px' }}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={{ height: '120px' }}>col-4</div>
            </Col>
            <Col span={4}>
              <div style={{ height: '80px' }}>col-4</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
