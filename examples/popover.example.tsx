import * as React from 'react'
import {Popover, ClickOutside, Button} from '../packages/index'
import {useRef, useState} from "react";

export default function (props: any) {
    const [open, setOpen] = useState(false);
    const div = useRef<HTMLDivElement>(null);
    const onClick = () => {
        setOpen(!open)
    }
    const onClickOutside = () => {
        console.log(`open2 before ${open}`)
        setOpen(false)
    }
    const content = (
        <div className="example-popover-content" style={{padding: '20px'}}>
            <div style={{paddingBottom: '6px', borderBottom: '1px solid #ddd'}}>this is a title</div>
            <div style={{paddingTop: '6px'}}>
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
                <h3>点击触发</h3>
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
                <Popover content={content} position="bottomRight">
                    <Button>bottomRight</Button>
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
                <h3>鼠标hover 触发</h3>
                <Popover content={<div style={{padding: '4px'}}>hello popover</div>} trigger="hover">
                    <Button>hover me</Button>
                </Popover>
            </div>
            <div className="exp-section">
                <h3>手动触发</h3>
                <ClickOutside handler={onClickOutside}>
                    <Popover content="hello ooo" trigger="manual" open={open} container={div}>
                        <Button onClick={onClick}>click me</Button>
                    </Popover>
                </ClickOutside>
            </div>
            <div className="exp-section">
                <h3>自定义 container</h3>
                <div ref={div} style={{position: 'relative',top: '10px'}} className="popover-demo-row">
                    <Popover content="hello" container={div}>
                        <Button>click me</Button>
                    </Popover>
                </div>
            </div>
        </div>
    )
}