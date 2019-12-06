``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
   <div className="exp-section">
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
  )
}
```