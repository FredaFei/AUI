### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| sourceData         |treeNodes 数据 |Array<{key, text, children}> |—— |—— |
| selected |设置选中的树节点 |String[] |—— |—— |
| multiple      |支持点选多个节点  |Boolean |true |false |
| className      |自定义类名  |String |—— |—— |
| style      |自定义样式  |React.CSSProperties |—— |—— |
| onChange    | 点击树节点触发 |       (values:String[]) => void |—— |—— |