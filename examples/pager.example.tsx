import * as React from 'react'
import { useState } from 'react'
import Pager from '../packages/pager/pager'

export default function(props: any) {
  const [page1, setPage1] = useState(2)
  const [page2, setPage2] = useState(1)
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <Pager defaultCurrent={4} total={5} onChange={page => {console.log(page)}}/>
        <Pager current={page1} total={11} onChange={page => setPage1(page)} />
      </div>
      <div className="exp-section">
        <h3>可跳转</h3>
        <Pager visibleQuickJumper current={page2} total={10} onChange={page => setPage2(page)}/>
      </div>
    </div>
  )
}
