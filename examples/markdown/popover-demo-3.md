``` jsx harmony
import * as React from 'react'
import {useRef, useState} from "react";

export default function (props) {
  const [open, setOpen] = useState(false);
  const div = useRef(null);
  const onClick = () => {
    setOpen(!open)
  }
  const onClickOutside = () => {
    setOpen(false)
  }
  return (
    <div className="exp-section">
      <ClickOutside handler={onClickOutside}>
        <Popover content="hello ooo" trigger="manual" open={open} container={div}>
          <Button onClick={onClick}>click me</Button>
        </Popover>
      </ClickOutside>
    </div>
  )
}```