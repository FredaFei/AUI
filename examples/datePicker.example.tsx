import * as React from 'react'
import {DatePicker} from '../packages/index'


export default function (props:any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
          <DatePicker>hahah</DatePicker>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
      </div>
    </div>
  )
}