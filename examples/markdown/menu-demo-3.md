```jsx harmony
import * as React from 'react'

export default function (props) {
  const style = {overflow: 'initial'}
  return (
    <div className="exp-section" style={style}>
      <Menu selected="menu1">
        <MenuItem name="menu1">menu 1</MenuItem>
        <MenuItem name="menu2" disabled>menu 2</MenuItem>
        <MenuItem name="menu3">menu 3</MenuItem>
        <SubMenu title="menu mixin 4" name="menu4" disabled>
          <MenuItem name="menu3-1">menu 3--1</MenuItem>
          <MenuItem name="menu3-2">menu 3--2</MenuItem>
          <MenuItem name="menu3-3">menu 3--3</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  )
}
```

