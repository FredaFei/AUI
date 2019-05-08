import * as React from 'react'
import Pager from '../packages/pager/pager'


export default function (props:any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Pager></Pager>
      </div>
      <div className="exp-section">
        <h3>按钮组合</h3>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
      </div>
    </div>
  )
}