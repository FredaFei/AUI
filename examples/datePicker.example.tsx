import * as React from 'react'
import {DatePicker} from '../packages/index'
import {useState} from "react";


export default function (props: any) {

    const [d, setD] = useState<Date|string>(new Date());
    const onChange = (date: Date|string) => {
        console.log(date)
    }
    return (
        <div className="exp-box">
            <div className="exp-section">
                <h3>基础应用</h3>
                <DatePicker value={d} onChange={(day:Date|string) => setD(day)}/>
            </div>
            <div className="exp-section">
                <h3>不可用状态</h3>
                <DatePicker onChange={onChange}/>
            </div>
        </div>
    )
}