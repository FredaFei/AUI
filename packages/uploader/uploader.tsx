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
  parseResponse?: (data: any) => void
  onFail?: (err: any) => void
  onSuccess?: () => void
  onChange?: (files: Array<CurrentFiles>) => void
  customRequest?: (data: FormData) => void
}

const Uploader: React.FC<Props> = props => {
  const {fileList, name, sizeLimit, onFail, onSuccess, parseResponse, className, style, children} = props
  const [currentFileList, setCurrentFileList] = useState<Array<CurrentFiles>>([])

  const filesRef = useRef<Array<CurrentFiles>>([])
  useEffect(() => {
    filesRef.current = fileList
    setCurrentFileList(fileList)
  }, [])

  const inputRef = useRef<HTMLInputElement>(null)
  const onClickUploadFile = () => {
    inputRef.current!.addEventListener("change", () => {
      uploadFiles();
    })
  };
  const beforeUploadFiles = (rowFiles: FileList, newNames: string[]): boolean => {
    const tempRowFiles = Array.from(rowFiles);
    for (let i = 0; i < tempRowFiles.length; i++) {
      if (tempRowFiles[i]['size'] > sizeLimit!) {
        onFail && onFail('文件过大了哦！');
        return false;
      }
    }
    let temp = tempRowFiles.map((rowFile, index) => {
      let {size, type} = rowFile;
      return {name: newNames[index], size, type, status: "uploading"};
    }) as CurrentFiles[];
    const prevFiles = [...filesRef.current]
    const _fileList = [...prevFiles, ...temp]
    filesRef.current = [...prevFiles, ...temp]
    setCurrentFileList(() => _fileList)
    props.onChange && props.onChange(_fileList)
    return true;
  }
  const uploadFiles = (): any => {
    const {files: rowFiles} = inputRef.current!
    let newNames: string[] = [];
    for (let i = 0; i < rowFiles!.length; i++) {
      let newName = generatorName(rowFiles![i].name);
      newNames[i] = newName;
    }
    if (!beforeUploadFiles(rowFiles as FileList, newNames)) {
      return false;
    }
    for (let i = 0; i < rowFiles!.length; i++) {
      let formData: FormData = new FormData();
      formData.append(name, rowFiles![i]);
      if (props.customRequest) {
        props.customRequest(formData)
        return
      }
      doUploadFiles(
        formData,
        (response: Response) => {
          let url = (parseResponse && parseResponse(response)) || response.url;
          afterUploadFiles(newNames[i], url);
        },
        (xhr: XMLHttpRequest) => {
          uploadFileError(xhr, newNames[i]);
        }
      )

      inputRef.current!.value = ''
    }
  }
  const doUploadFiles = (formData: FormData, success: (response: Response) => void, error: (xhr: XMLHttpRequest) => void) => {
    http[props.method!.toLocaleLowerCase()](props.action, {
      data: formData,
      success,
      error
    });
  }
  const afterUploadFiles = (name: string, url: string) => {
    _setFileList('success', name, url)
    onSuccess && onSuccess()
  }
  const uploadFileError = (xhr: any, newName: string) => {
    _setFileList('fail', newName)
    onFail && onFail(xhr.status === 0 ? '网络无法连接' : xhr.response)
  }
  const _setFileList = (status: 'fail' | 'success', newName: string, url?: string) => {
    const currentFileList = filesRef.current
    let file = currentFileList.filter(f => f.name === newName)[0];
    let index = currentFileList.indexOf(file);
    let copyFile = {...file};
    copyFile.url = url || undefined;
    copyFile.status = status;
    let copyFileList = [...currentFileList];
    copyFileList.splice(index, 1, copyFile);
    setCurrentFileList(copyFileList)
    filesRef.current = copyFileList
    props.onChange && props.onChange(copyFileList)
  }
  const generatorName = (name: string) => {
    while (filesRef.current.filter(n => n.name === name).length > 0) {
      let dotIndex = name.lastIndexOf(".");
      let nameWithoutExtension = name.substring(0, dotIndex);
      let extension = name.substring(dotIndex);
      name = nameWithoutExtension + "(1)" + extension;
    }
    return name;
  }

  const onDeleteFile = (file: CurrentFiles) => {
    let yes = window.confirm("确定删除该文件吗？");
    if (yes) {
      let copy = [...currentFileList];
      let index = copy.indexOf(file);
      copy.splice(index, 1);
      setCurrentFileList(copy)
      filesRef.current = copy
      props.onChange && props.onChange(copy)
    }
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
            {file.status === 'uploading' ?
              <Icon name="loading" className={sc('placeholder-img')}/> : file.status === 'success' ?
                <img src={file.url} className={sc('preview')}/> :
                <Icon name="image" className={sc('placeholder-img', 'fail')}/>}

            <span className={sc('name', file.status === 'fail' && 'fail')}>{file.name}</span>
            <Icon name="close" className={sc('remove')} onClick={() => onDeleteFile(file)}/>
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
