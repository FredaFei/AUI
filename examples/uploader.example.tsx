import * as React from 'react'
import Uploader from '../packages/uploader/uploader'
import {Button} from '../packages'
import {useState} from "react";

export default function (props: any) {
  const [fileList, setFileList] = useState([])
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Uploader name="files" action="http://127.0.0.1:3000/upload" fileList={fileList}>
          <Button icon="upload">上传</Button>
        </Uploader>
      </div>
    </div>
  )
}