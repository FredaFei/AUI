import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Component } from 'react'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './examples/home'
import ButtonExample from './examples/button.example'
import GridExample from './examples/grid.example'
import LayoutExample from './examples/layout.example'
import InputExample from './examples/input.example'
import RadioExample from './examples/radio.example'
import CheckboxExample from './examples/checkbox.example'
import FormExample from './examples/form.example'
import PagerExample from './examples/pager.example'
import TabsExample from './examples/tabs.example'
import MessageExample from './examples/message.example'
import DialogExample from './examples/dialog.example'
import SwitchExample from './examples/switch.example'
import CollapseExample from './examples/collapse.example'
import 'examples/index.scss'

const logo = require('./packages/logo.jpg')
class App extends Component {
  state = {
    visibleMenu: true
  }
  render() {
    let asideClass = 'site-doc-aside-wrapper'
    if (this.state.visibleMenu){
      asideClass += ' active'
    }
    return (
      <Router>
        <div className="site-doc-wrapper">
          <header className="site-doc-header">
            <img src={logo} alt="" className="logo" />
            <nav className="site-nav" >
              <div onClick={() => this.setState({ visibleMenu: !this.state.visibleMenu})}>菜单</div>
              <div>文档</div>
            </nav>
          </header>
          <div className="site-doc-body">
            <div className={asideClass}>
              <div className="site-doc-mask" onClick={() => this.setState({ visibleMenu: !this.state.visibleMenu })}></div>
              <aside className="site-doc-aside">
                <h2>入门</h2>
                <ol>
                  <li>
                    <NavLink to="/">快速上手</NavLink>
                  </li>
                </ol>
                <h2>组件</h2>
                <ol>
                  <li>
                    <NavLink to="/button">Button</NavLink>
                  </li>
                  <li>
                    <NavLink to="/grid">Grid</NavLink>
                  </li>
                  <li>
                    <NavLink to="/layout">Layout</NavLink>
                  </li>
                  <li>
                    <NavLink to="/input">Input 输入框</NavLink>
                  </li>
                  <li>
                    <NavLink to="/radio">Radio 单选框</NavLink>
                  </li>
                  <li>
                    <NavLink to="/checkbox">Checkbox 多选框</NavLink>
                  </li>
                  <li>
                    <NavLink to="/form">Form 表单</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pager">Pager 分页</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tabs">Tabs 标签页</NavLink>
                  </li>
                  <li>
                    <NavLink to="/message">Message</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dialog">Dialog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/switch">Switch</NavLink>
                  </li>
                  <li>
                    <NavLink to="/collapse">Collapse</NavLink>
                  </li>
                </ol>
              </aside>
            </div>
            <main className="site-doc-main">
              <Route path="/" exact component={Home} />
              <Route path="/button" component={ButtonExample} />
              <Route path="/grid" component={GridExample} />
              <Route path="/layout" component={LayoutExample} />
              <Route path="/Input" component={InputExample} />
              <Route path="/Radio" component={RadioExample} />
              <Route path="/Checkbox" component={CheckboxExample} />
              <Route path="/form" component={FormExample} />
              <Route path="/pager" component={PagerExample} />
              <Route path="/tabs" component={TabsExample} />
              <Route path="/message" component={MessageExample} />
              <Route path="/dialog" component={DialogExample} />
              <Route path="/switch" component={SwitchExample} />
              <Route path="/collapse" component={CollapseExample} />
            </main>
          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
