import * as React from 'react'
import {Menu, MenuItem, SubMenu} from '../packages/index'


export default function (props: any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
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
      <div className="exp-section">
        <h3>垂直排列</h3>
        <Menu layout="vertical">
          <MenuItem name="menu1">menu 1</MenuItem>
          <MenuItem name="menu2">menu 2</MenuItem>
          <SubMenu title="menu mixin 3" name="menu3">
            <MenuItem name="menu3-1">menu 3--1</MenuItem>
            <MenuItem name="menu3-2">menu 3--2</MenuItem>
            <MenuItem name="menu3-3">menu 3--3</MenuItem>
          </SubMenu>
          <MenuItem name="menu4">menu 4</MenuItem>
        </Menu>
      </div>
      <div className="exp-section">
        <h3>多层嵌套</h3>
        <Menu selected="menu1">
          <MenuItem name="menu1">menu 1</MenuItem>
          <MenuItem name="menu2">menu 2</MenuItem>
          <SubMenu title="menu mixin 3" name="menu3">
            <MenuItem name="menu3-1">menu 3--1</MenuItem>
            <MenuItem name="menu3-2">menu 3--2</MenuItem>
            <SubMenu title="menu mixin 3" name="menu3-2">
              <MenuItem name="menu3-2-1">menu 3-2-1</MenuItem>
              <MenuItem name="menu3-2-2">menu 3-2-2</MenuItem>
              <MenuItem name="menu3-3-3">menu 3-2-3</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
      <div className="exp-section">
        <h3>不可用状态</h3>
        <Menu>
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
    </div>
  )
}