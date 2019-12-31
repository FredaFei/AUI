```jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <div className="exp-section">
      <Menu selected="menu1">
        <MenuItem name="menu1">menu 1</MenuItem>
        <MenuItem name="menu2">menu 2</MenuItem>
        <SubMenu title="menu mixin 3" name="menu3">
          <MenuItem name="menu3-1">menu 3--1</MenuItem>
          <MenuItem name="menu3-2">menu 3--2</MenuItem>
          <MenuItem name="menu3-3">menu 3--3</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  )
}
```

