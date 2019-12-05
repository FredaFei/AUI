### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| name         |设置图标名 |String |—— |—— |
| rotate |设置图标的旋转角度 |Number | ——|—— |
| spin      |设置图标加载状态  |Boolean |false |true |
| className      |自定义类名  |string |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |
| onClick    | 点击按钮时触发 |       () => void |—— |—— |


### 备注

当name设置为loading时，spin也生效了