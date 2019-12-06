``` jsx harmony
import * as React from 'react'
export default function (props) {
  return (
    <div className="exp-section">
      <div className="custom-grid">
        <Row align="spaceBetween" verticalAlign="center">
          <Col span={4}>
            <div style={{ height: '100px' }}>col-4-1</div>
          </Col>
          <Col span={4}>
            <div style={{ height: '50px' }}>col-4-2</div>
          </Col>
          <Col span={4}>
            <div style={{ height: '120px' }}>col-4-3</div>
          </Col>
          <Col span={4}>
            <div style={{ height: '80px' }}>col-4-4</div>
          </Col>
        </Row>
      </div>
    </div>
  )
```