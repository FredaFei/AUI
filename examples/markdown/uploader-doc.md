### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| name         |发到后台的文件参数名 |String |—— |—— |
| action |上传的地址 |String | ——|—— |
| fileList      |已经上传的文件列表（受控）  |Object[] |—— |—— |
| method      |上传请求的 http method  |String |false |true |
| accept      |接受上传的文件类型  |String |false |true |
| sizeLimit      |接受上传的文件大小  |Number |false |true |
| parseResponse      |解析图片预览请求地址  |(data) => void |—— |—— |
| onFail      |上传文件失败时的状态  |(err) => void |—— |—— |
| onSuccess      |上传文件成功时的状态  |Function |—— |—— |
| onChange      |上传文件改变时的状态  |(files) => void |—— |—— |
| customRequest      |自定义上传请求  |Function |—— |—— |
| className      |自定义类名  |String |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |

