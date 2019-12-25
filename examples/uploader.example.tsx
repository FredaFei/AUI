import * as React from 'react'
import Uploader,{CurrentFiles} from '../packages/uploader/uploader'
import {Button} from '../packages'
import {useState} from "react";

import content1 from "./markdown/uploader-demo-1.md";
import content2 from "./markdown/uploader-demo-2.md";
import doc from "./markdown/uploader-doc.md";
import Markdown from './markdown'
import CodeBox from "./codeBox";

export default function (props: any) {
  const [fileList] = useState([])
  const [fileList2] = useState<Array<CurrentFiles>>([
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

  const onFail = (err:any) => {
    console.log(err);
  }
  // const parseResponse = (data)=>{
  //   return `http://127.0.0.1:3000/preview/${data}`
  // }
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Uploader name="files" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" fileList={fileList}
                  onFail={onFail}>
          <Button icon="upload">上传</Button>
        </Uploader>
        <CodeBox content={content1}/>
      </div>
      <h3>已上传的文件列表</h3>
      <div className="exp-section">
        <Uploader name="files" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" fileList={fileList2}
                  onFail={onFail}>
          <Button icon="upload">上传</Button>
        </Uploader>
        <CodeBox content={content2}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}