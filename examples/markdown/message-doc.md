### API
组件提供了一些静态方法，使用方式和参数如下：

```javascript
message.success(content, [duration], onClose)
message.error(content, [duration], onClose)
message.info(content, [duration], onClose)
message.warning(content, [duration], onClose)
message.loading(content, [duration], onClose)
```

对象的形式传递参数：

```javascript
message.open(config)
message.success(config)
message.error(config)
message.info(config)
message.warning(config)
message.loading(config)
```

config 对象属性：

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| content    |提示内容 |String |—— |—— |
| duration |自动关闭的延时,单位：秒 |Number |2 |—— |
| mode      |提示类型  |String  |——|`info/success/warning/error/loading` |
| className      |自定义类名  |String |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |
| onClose    | 关闭时触发的回调函数 |       () => any |—— |—— |
