import * as React from 'react'
import {Popover, Button} from '../packages/index'

export default function (props: any) {
    return (
        <div className="exp-box">
            <div className="exp-section">
                <h3>基础应用</h3>
                <Popover content="我是弹出层" position="topRight">
                    <Button>click me</Button>
                </Popover>
            </div>
            <div className="exp-section">
                <h3>日期默认为空</h3>
            </div>
        </div>
    )
}