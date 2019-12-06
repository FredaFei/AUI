### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| value         |表单所有控件值|Object |—— |—— |
| fields |表单控件名字标签名以及控件 |Array | ——|—— |
| buttons      |表单操作按钮  |React.ReactFragment |—— |—— |
| layout      |表单布局  |String |horizontal |`inline/vertical`|
| errorDisplayMode      |表单验证信息展示方式  |String |first |`all` |
| labelWidth      |标签名宽度|String  |—— |—— |
| className      |自定义类名  |String |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |
| onChange    | input控件改变时触发 |       (event) => void |—— |—— |
| onSubmit    | 数据验证成功后回调事件 |       React.FormEventHandler<HTMLFormElement> |—— |—— |