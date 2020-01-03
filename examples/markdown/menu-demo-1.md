```jsx harmony
import * as React from 'react'

export default function (props) {
  const style = {overflow: 'initial'}
  return (
    <div className="exp-section" style={style}>
      <Menu selected="menu1">>
        <SubMenu title="sub1" name="sub1">
          <MenuItem name="menu3-1">menu 3--1</MenuItem>
          <MenuItem name="menu3-2">menu 3--2</MenuItem>
          <MenuItem name="menu3-3">menu 3--3</MenuItem>
          <SubMenu title="submenu 2" name="sub2">
            <MenuItem name="menu3-2-1">menu 3-2-1</MenuItem>
            <MenuItem name="menu3-2-2">menu 3-2-2</MenuItem>
            <MenuItem name="menu3-3-3">menu 3-2-3</MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem name="menu1">menu 1</MenuItem>
        <MenuItem name="menu2">menu 2</MenuItem>
      </Menu>
    </div>
  )
}
```