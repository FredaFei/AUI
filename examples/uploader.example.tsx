import * as React from 'react'
import Uploader from '../packages/uploader/uploader'
import {Button} from '../packages'
import {useState} from "react";

export default function (props: any) {
  const [fileList, setFileList] = useState([])

  const onFail = (err)=>{
    console.log(err);
  }
  const parseResponse = (data)=>{
    return `http://127.0.0.1:3000/preview/${data}`
  }
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Uploader name="files" action="https://jsonplaceholder.typicode.com/posts/" parseResponse={parseResponse} fileList={fileList} onFail={onFail}>
          <Button icon="upload">上传</Button>
        </Uploader>
      </div>
    </div>
  )
}