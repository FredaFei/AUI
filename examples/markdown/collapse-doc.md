### API
### Collapse

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| activeKey         |当前展开面板的key |String[] |—— |—— |
| defaultActiveKey |初始化展开面板的key |String[] |—— |—— |
| accordion |手风琴模式 |Boolean |false |`true` |
| expandIcon |自定义切换图标 |(active: boolean) => React.ReactNode |——|—— |
| className      |自定义类名  |String |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |
| onChange    | 切换面板的回调 |       (key) => void |—— |—— |

### Pane

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| name |唯一标识 |String |—— |—— |
| header |面板头内容 |React.ReactNode |—— |——|
| disabled |禁用状态 |Boolean |false |true|
| className      |自定义类名  |String |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |
