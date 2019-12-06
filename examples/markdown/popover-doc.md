### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| content         |设置按钮的图标类型 |React.ReactNode |—— |—— |
| position |浮层的相对位置 |String |top |——|
| trigger      |触发方式  |String |click |`hover/manual` |
| open      |手动控制浮层显隐  |Boolean |false |true |
| block      |设置容器为display:block  |Boolean |false |true |
| container      |自定义容器  |React.RefObject<Element> |false |true |
| className      |自定义类名  |String |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |
| onClick    | 点击按钮时触发 |       (event) => void |—— |—— |


### 备注
position可选值有：`right/left/leftBottom/rightTop/rightBottom/bottom/bottomLeft/bottomRight/topRight/topLeft/leftTop`