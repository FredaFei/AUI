``` jsx harmony
import * as React from 'react'
import {useState} from "react";

export default function (props) {
  const [fileList] = useState([])

  return (
    <div className="exp-section">
      <Uploader name="files" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" fileList={fileList}>
        <Button icon="upload">上传</Button>
      </Uploader>
    </div>
  )
}
```