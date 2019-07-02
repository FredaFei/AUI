import * as React from 'react'
import {Popover,Button} from '../packages/index'

export default function (props: any) {
    // const [open, setOpen] = useState(false);
    // const div = useRef<HTMLDivElement>(null);
    const content = (
        <div className="example-popover-content" style={{padding: '20px'}}>
            <div>this is a title</div>
            <div>
                <h5>this is a content 1</h5>
                <h5>this is a content 2</h5>
                <h5>this is a content 3</h5>
                <h5>this is a content 4</h5>
            </div>
        </div>
    )
    return (
        <div className="exp-box">
            <div className="exp-section">
                <h3>基础应用</h3>
                <Popover content={content} position="left">
                    <Button>left</Button>
                </Popover>
                <Popover content={content} position="top">
                    <Button>top</Button>
                </Popover>
                <Popover content={content} position="right">
                    <Button>right</Button>
                </Popover>
                <Popover content={content} position="bottom">
                    <Button>bottom</Button>
                </Popover>
                <Popover content={content} position="topLeft">
                    <Button>topLeft</Button>
                </Popover>
                <Popover content={content} position="topRight">
                    <Button>topRight</Button>
                </Popover>
                <Popover content={content} position="bottomLeft">
                    <Button>bottomLeft</Button>
                </Popover>
                <Popover content={content} position="leftTop">
                    <Button>leftTop</Button>
                </Popover>
                <Popover content={content} position="leftBottom">
                    <Button>leftBottom</Button>
                </Popover>
                <Popover content={content} position="rightTop">
                    <Button>rightTop</Button>
                </Popover>
                <Popover content={content} position="rightBottom">
                    <Button>rightBottom</Button>
                </Popover>
            </div>
            <div className="exp-section">
                <h3>日期默认为空</h3>
                <Popover content={<div>hello ha</div>} >
                    <Button>click me</Button>
                </Popover>
            </div>
        </div>
    )
}