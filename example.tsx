import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './examples/home'
import ButtonExample from './examples/button.example'
import MessageExample from './examples/message.example'
import DialogExample from './examples/dialog.example'
import SwitchExample from './examples/switch.example'
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
                <li className="active">
                  <Link to="/">快速上手</Link>
                </li>
                <li>
                  <Link to="/">安装</Link>
                </li>
                <li>
                  <Link to="/">配置</Link>
                </li>
              </ol>
              <h2>组件</h2>
              <ol>
                <li>
                  <Link to="/button">Button</Link>
                </li>
                <li>
                  <Link to="/message">Message</Link>
                </li>
                <li>
                  <Link to="/dialog">Dialog</Link>
                </li>
                <li>
                  <Link to="/switch">Switch</Link>
                </li>
              </ol>
            </aside>
            <main className="site-doc-main">
              <Route path="/" exact={true} component={Home} />
              <Route path="/button" component={ButtonExample} />
              <Route path="/message" component={MessageExample} />
              <Route path="/dialog" component={DialogExample} />
              <Route path="/switch" component={SwitchExample} />
            </main>
          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
