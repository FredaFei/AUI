### API
### Menu

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| selected         |选中的菜单项 |String |—— |—— |
| layout |菜单样式，现在支持垂直、水平 |String |vertical |`horizontal` |
| className      |自定义类名  |String |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |
| onChange    | 点击 MenuItem 时触发 |       (value) => void |—— |—— |

### MenuItem

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| name         |唯一标志 |String |—— |—— |
| disabled |	是否禁用 |Boolean |false |`true` |
| className      |自定义类名  |String |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |

### SubMenu

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| name         |唯一标志 |String |—— |—— |
| title         |子菜单项标题 |String |—— |—— |
| disabled |	是否禁用 |Boolean |false |`true` |
| className      |自定义类名  |String |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |