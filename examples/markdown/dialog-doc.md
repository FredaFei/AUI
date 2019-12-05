### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| visible   |对话框是否可见 |Boolean |false|true|
| mask         |设置遮罩 |{visible:Boolean,closable:Boolean} |{visible:true,closable:true} |—— |
| title         |标题 |React.ReactNode |—— |—— |
| footer |底部内容 |React.ReactNode |left |right |
| className      |自定义类名  |string |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |
| onClose    | 点击蒙层或头部关闭按钮时的回调 |   React.MouseEventHandler |—— |—— |
| onYes    | 点击确认按钮时的回调 |  React.MouseEventHandler |—— |—— |
| onNo    | 点击取消按钮时的回调 |  React.MouseEventHandler |—— |—— |

静态方法

```javascript
alert(options)
confirm(options)
modal(options)
```
### Options

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| content         |内容 |React.ReactNode |—— |—— |
| mask         |设置遮罩 |{visible:Boolean,closable:Boolean} |{visible:true,closable:true} |—— |
| title         |标题 |React.ReactNode |—— |—— |
| footer |底部内容 |React.ReactNode |left |right |
| className      |自定义类名  |string |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |
| onClose    | 点击蒙层或头部关闭按钮时的回调 |   React.MouseEventHandler |—— |—— |
| onYes    | 点击确认按钮时的回调 |  React.MouseEventHandler |—— |—— |
| onNo    | 点击取消按钮时的回调 |  React.MouseEventHandler |—— |—— |