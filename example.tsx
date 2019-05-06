import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Component } from 'react'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './examples/home'
import ButtonExample from './examples/button.example'
import GridExample from './examples/grid.example'
import LayoutExample from './examples/layout.example'
import InputExample from './examples/input.example'
import FormExample from './examples/form.example'
import MessageExample from './examples/message.example'
import DialogExample from './examples/dialog.example'
import SwitchExample from './examples/switch.example'
import CollapseExample from './examples/collapse.example'
import 'examples/index.scss'

const logo = require('./packages/logo.jpg')
class App extends Component {
  render() {
    return (
      <Router>
        <div className="site-doc-wrapper">
          <header className="site-doc-header">
            <img src={logo} alt="" className="logo" />
            <nav className="site-nav">
              <div>文档</div>
            </nav>
          </header>
          <div className="site-doc-body">
            <aside className="site-doc-aside">
              <h2>入门</h2>
              <ol>
                <li>
                  <NavLink to="/guide">快速上手</NavLink>
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
                  <NavLink to="/form">Form 表单</NavLink>
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
            <main className="site-doc-main">
              <Route path="/guide" exact={true} component={Home} />
              <Route path="/button" component={ButtonExample} />
              <Route path="/grid" component={GridExample} />
              <Route path="/layout" component={LayoutExample} />
              <Route path="/Input" component={InputExample} />
              <Route path="/form" component={FormExample} />
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
