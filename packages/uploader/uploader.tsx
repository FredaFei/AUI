import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import './style'
import Icon from '../icon/icon'
import {useEffect, useRef, useState} from "react";
import http from "../utils/http";

const componentName = 'Uploader'
const sc = createScopedClasses(componentName)

interface CurrentFiles {
  name?: string
  size?: number
  status?: 'fail' | 'success' | 'uploading'
  type?: string
  url?: string
}

interface Props extends StyledProps {
  action: string
  name: string
  fileList: Array<CurrentFiles>
  method?: string
  accept?: string
  sizeLimit?: number
  parseResponse: (data: any) => void
  onFail?: (err: any) => void
  onSuccess?: () => void
  customRequest ?: () => void
}

// type RowFiles = FileList | null
const Uploader: React.FC<Props> = props => {
  const {fileList, name, sizeLimit, onFail, onSuccess, parseResponse, className, style, children} = props

  const [currentFileList, setCurrentFileList] = useState<Array<CurrentFiles>>([])

  useEffect(() => {
    setCurrentFileList(fileList)
  }, [])
  const inputRef = useRef<HTMLInputElement>(null)
  const onClickUploadFile = () => {
    inputRef.current!.addEventListener("change", () => {
      uploadFiles();
    })
  };
  const beforeUploadFiles = (rowFiles: FileList, newNames: string[]): boolean => {
    console.log(rowFiles);
    const tempRowFiles = Array.from(rowFiles);
    console.log(Array.from(rowFiles))
    for (let i = 0; i < tempRowFiles.length; i++) {
      if (tempRowFiles[i]['size'] > sizeLimit!) {
        onFail && onFail('文件过大了哦！');
        return false;
      }
    }
    console.log(tempRowFiles);
    let temp = tempRowFiles.map((rowFile, index) => {
      let {size, type} = rowFile;
      return {name: newNames[index], size, type, status: "uploading"};
    });
    console.log('11')
    setCurrentFileList(temp as CurrentFiles[])
    return true;
  }
  const uploadFiles = (): any => {
    const {files: rowFiles} = inputRef.current!
    let newNames: string[] = [];
    for (let i = 0; i < rowFiles!.length; i++) {
      let newName = generatorName(rowFiles![i].name);
      newNames[i] = newName;
    }
    console.log(`newNames ${newNames}`);
    if (!beforeUploadFiles(rowFiles as FileList, newNames)) {
      return false;
    }
    for (let i = 0; i < rowFiles!.length; i++) {
      let formData: FormData = new FormData();
      formData.append(name, rowFiles![i]);
      doUploadFiles(
        formData,
        response => {
          console.log(response);
          let url = parseResponse(response);
          afterUploadFiles(newNames[i], url);
        },
        xhr => {
          console.log(xhr);
          uploadFileError(xhr, newNames[i]);
        }
      );
    }
  }
  const doUploadFiles = (formData: FormData, success, error) => {
    http[props.method!.toLocaleLowerCase()](props.action, {
      data: formData,
      success,
      error
    });
  }
  const afterUploadFiles = (name: string, url: string) => {
    let file = fileList.filter(f => f.name === name)[0];
    let index = fileList.indexOf(file);
    let copyFile = {...file};
    copyFile.url = url;
    copyFile.status = "success";
    let copyFileList = [...fileList];
    copyFileList.splice(index, 1, copyFile);
    setCurrentFileList(copyFileList)
    // this.$emit("uploaded");
    onSuccess && onSuccess()
  }
  const uploadFileError = (xhr, newName: string) => {
    let file = currentFileList.filter(f => f.name === newName)[0];
    let index = currentFileList.indexOf(file);
    let copyFile = {...file};
    copyFile.status = "fail";
    let copyFileList = [...currentFileList];
    copyFileList.splice(index, 1, copyFile);
    setCurrentFileList(copyFileList)
    onFail && onFail(xhr.status === 0 ? '网络无法连接' : xhr.response)
  }
  const generatorName = (name: string) => {
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
      {currentFileList.length > 0 &&
      <ul className={sc('file-list')}>
        {currentFileList.map(file => {
          return <li className={sc('file-list-item')} key={file.name}>
            {file.status === 'uploading' ? <Icon name="loading"/> : file.status === 'success' ?
              <img src={file.url} className={sc('preview')}/> : <Icon name="image"/>}

            <span className={sc('name')}>{file.name}</span>
            <Icon name="close" className={sc('remove')}/>
          </li>
        })}
      </ul>
      }
    </div>
  )
}

Uploader.displayName = componentName
Uploader.defaultProps = {
  accept: 'image/*',
  method: 'post',
  sizeLimit: 3 * 1024 * 1024
}
export default Uploader
