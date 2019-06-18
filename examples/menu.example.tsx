import * as React from 'react'
import {Menu,MenuItem,SubMenu} from '../packages/index'


export default function (props:any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
          <Menu>
              <MenuItem>menu 1</MenuItem>
              <MenuItem>menu 2</MenuItem>
              <SubMenu title="menu 3">
                  <MenuItem>menu 3--1</MenuItem>
                  <MenuItem>menu 3--2</MenuItem>
                  <MenuItem>menu 3--3</MenuItem>
              </SubMenu>
          </Menu>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
      </div>
    </div>
  )
}