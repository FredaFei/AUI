``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
   <div className="exp-section">
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
  )
}
```