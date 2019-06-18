import * as React from 'react'
import {Menu,MenuItem,SubMenu} from '../packages/index'


export default function (props:any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
          <Menu selected="menu1">
              <MenuItem key="menu1">menu 1</MenuItem>
              <MenuItem key="menu2">menu 2</MenuItem>
              <SubMenu title="menu 3" key="menu3">
                  <MenuItem key="menu3-1">menu 3--1</MenuItem>
                  <MenuItem key="menu3-2">menu 3--2</MenuItem>
                  <MenuItem key="menu3-3">menu 3--3</MenuItem>
              </SubMenu>
          </Menu>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
      </div>
    </div>
  )
}