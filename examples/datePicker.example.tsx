import * as React from 'react'
import {DatePicker} from '../packages/index'
import {useState} from "react";


export default function (props: any) {

    const [d, setD] = useState(new Date());
    return (
        <div className="exp-box">
            <div className="exp-section">
                <h3>基础应用</h3>
                <DatePicker value={d} onChange={date => setD(date)}>hahah</DatePicker>
            </div>
            <div className="exp-section">
                <h3>不可用状态</h3>
            </div>
        </div>
    )
}