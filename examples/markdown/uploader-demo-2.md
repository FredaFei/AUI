``` jsx harmony
import * as React from 'react'
import {useState} from "react";

export default function (props) {
  const [fileList2] = useState([
    {
      name: "stable-deltail-1.png",
      size: 288120,
      status: "success",
      type: "image/png",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
      name: "stable-deltail-2.png",
      size: 288120,
      status: "fail",
      type: "image/png",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
      name: "stable-deltail-3.png",
      size: 288120,
      status: "success",
      type: "image/png",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
  ])

  return (
    <div className="exp-section">
      <Uploader name="files" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" fileList={fileList2}
        <Button icon="upload">上传</Button>
      </Uploader>
    </div>
  )
}
```