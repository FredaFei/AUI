import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import './style'
import Icon from '../icon/icon'
import {useRef} from "react";

const componentName = 'Uploader'
const sc = createScopedClasses(componentName)

interface Props extends StyledProps {
  action: string
  name: string
  fileList: []
  method?: string
  accept?: string
  sizeLimit?: number
  parseReponse: () => {}
}

type RowFiles = FileList | null
const Uploader: React.FC<Props> = props => {
  const { fileList, name, sizeLimit,parseReponse, className, style, children } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const onClickUploadFile = () => {
    inputRef.current!.addEventListener("change", () => {
      uploadFiles();
    })
  };
  const beforeUploadFiles = (rowFiles:RowFiles,newNames:string[]) => {
    console.log(rowFiles);
    const tempRowFiles:Array<RowFiles> = Array.from(rowFiles);
    console.log(Array.from(rowFiles))
    for (let i = 0; i < tempRowFiles.length; i++) {
      let rowFile = tempRowFiles[i];
      let { size } = rowFile;
      if (size > sizeLimit!) {
        // this.$emit("error", "文件过大了哦！");
        return false;
      }
    }
    tempRowFiles.map((rowFile, index) => {
      let { size, type } = rowFile;
      return { name: newNames[index], size, type, status: "uploading" };
    });
    return true;
  }
  const uploadFiles = (): any => {
    const rowFiles:RowFiles = inputRef.current!.files
    let newNames: string[] = [];
    for (let i = 0; i < rowFiles!.length; i++) {
      let rowFile = rowFiles![i];
      let newName = generatorName(rowFile.name);
      newNames[i] = newName;
    }
    if (!beforeUploadFiles(rowFiles, newNames)) {
      return false;
    }
    for (let i = 0; i < rowFiles!.length; i++) {
      let rowFile = rowFiles![i];
      let formData = new FormData();
      formData.append(name, rowFile);
      doUploadFiles(
        formData,
        response => {
          let url = parseReponse(response);
          afterUploadFiles(newNames[i], url);
        },
        xhr => {
          uploadFileError(xhr, newNames[i]);
        }
      );
    }
  }
  const doUploadFiles = (formData, success, error) => {}
  const afterUploadFiles = (name, url) => {
    let file = fileList.filter(f => f.name === name)[0];
    let index = fileList.indexOf(file);
    let copyFile = { ...file };
    copyFile.url = url;
    copyFile.status = "success";
    let copyFileList = [...fileList];
    copyFileList.splice(index, 1, copyFile);
  }
  const uploadFileError = (xhr, newName) => {
    let file = fileList.filter(f => f.name === newName)[0];
    let index = fileList.indexOf(file);
    let copyFile = { ...file };
    copyFile.status = "fail";
    let copyFileList = [...fileList];
    copyFileList.splice(index, 1, copyFile);
    let error;
    if (xhr.status === 0) {
      error = "网络无法连接";
    }
  }
  const generatorName = (name: string) => {
    console.log(fileList);
    while (fileList.filter(n => n.name === name).length > 0) {
      let dotIndex = name.lastIndexOf(".");
      let nameWithoutExtension = name.substring(0, dotIndex);
      let extension = name.substring(dotIndex);
      name = nameWithoutExtension + "(1)" + extension;
    }
    return name;
  }
  return (
    <div className={classes(sc('wrapper'), className)} style={style}>
      <div className={sc('content')} onClick={onClickUploadFile}>
        {children}
        <input type="file" accept={props.accept} multiple ref={inputRef}/>
      </div>
      <ul className={sc('file-list')}>
        <li className={sc('file-list-item')}>
          <img src="" className={sc('preview')}/>
          <span className={sc('name')}>q.png</span>
          <Icon name="close" className={sc('remove')}/>
        </li>
      </ul>
    </div>
  )
}

Uploader.displayName = componentName
Uploader.defaultProps = {
  accept: 'image/*',
  method: 'post',
  sizeLimit: 3*1024*1024
}
export default Uploader
