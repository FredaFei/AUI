import * as React from 'react'
import {Popover, ClickOutside, Button} from '../packages/index'
import {useRef, useState} from "react";

import content1 from "./markdown/popover-demo-1.md";
import content2 from "./markdown/popover-demo-2.md";
import content3 from "./markdown/popover-demo-3.md";
import content4 from "./markdown/popover-demo-4.md";
import CodeBox from "./codeBox";
import Markdown from "./markdown";
import doc from "./markdown/popover-doc.md";

export default function (props: any) {
  const [open, setOpen] = useState(false);
  const div = useRef<HTMLDivElement>(null);
  const onClick = () => {
    setOpen(!open)
  }
  const onClickOutside = () => {
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
      <h3>点击触发</h3>
      <div className="exp-section">
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
        <CodeBox content={content1}/>
      </div>
      <h3>鼠标hover 触发</h3>
      <div className="exp-section">
        <Popover content={<div style={{padding: '4px'}}>hello popover</div>} trigger="hover">
          <Button>hover me</Button>
        </Popover>
        <CodeBox content={content2}/>
      </div>
      <h3>手动触发</h3>
      <div className="exp-section">
        <ClickOutside handler={onClickOutside}>
          <Popover content="hello ooo" trigger="manual" open={open} container={div}>
            <Button onClick={onClick}>click me</Button>
          </Popover>
        </ClickOutside>
        <CodeBox content={content3}/>
      </div>
      <h3>自定义 container</h3>
      <div className="exp-section">
        <div ref={div} style={{position: 'relative', top: '10px'}} className="popover-demo-row">
          <Popover content="hello" container={div}>
            <Button>click me</Button>
          </Popover>
        </div>
        <CodeBox content={content4}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}