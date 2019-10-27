import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Component} from 'react'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'
import Home from './examples/home'
import ButtonExample from './examples/button.example'
import IconExample from './examples/icon.example'
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
import MenuExample from './examples/menu.example'
import DatePickerExample from './examples/datePicker.example'
import PopoverExample from './examples/popover.example'
import ScrollExample from './examples/scroll.example'
import 'examples/index.scss'

class App extends Component {
    state = {
        visibleMenu: false
    }
    onToggleMenu = () => {
        this.setState(({visibleMenu: !this.state.visibleMenu}))
    }

    render() {
        return (
            <Router>
                <div className="site-doc-wrapper">
                    <header className="site-doc-header">
                        <div className="site-doc-menu-icon" onClick={this.onToggleMenu}>
                            <div className="menu-icon-line" onClick={this.onToggleMenu}></div>
                        </div>
                        <nav className="site-doc-logo-github">
                            <div className="site-nav-item">
                                <img
                                    src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/stack-206941f66389b4bc8f476591664d9d3e43f70e55cd841a98d06312ff85da7dc9.svg"
                                    alt="" className="logo"/>
                            </div>
                            <div className="site-nav-item">github</div>
                        </nav>
                    </header>
                    <div className="site-doc-body">
                        <div className={['site-doc-aside-wrapper', this.state.visibleMenu && 'active'].join(' ')}>
                            <div className="site-doc-mask" onClick={this.onToggleMenu}></div>
                            <aside className="site-doc-aside">
                                <h2>入门</h2>
                                <ol onClick={this.onToggleMenu}>
                                    <li>
                                        <NavLink to="/guide">快速上手</NavLink>
                                    </li>
                                </ol>
                                <h2>组件</h2>
                                <ol onClick={this.onToggleMenu}>
                                    <li>
                                        <NavLink to="/button">Button 按钮</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/icon">Icon 按钮</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/grid">Grid 栅格</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/layout">Layout 布局</NavLink>
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
                                        <NavLink to="/switch">Switch 开关</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/form">Form 表单</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/pager">Pager 分页</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/menu">Menu 导航菜单</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tabs">Tabs 标签页</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/collapse">Collapse 折叠面板</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/message">Message 全局提示</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dialog">Dialog 对话框</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/popover">Popover 气泡卡片</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/datePicker">DatePicker 日期选择器</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/scroll">Scroll 滚动</NavLink>
                                    </li>
                                </ol>
                            </aside>
                        </div>
                        <main className="site-doc-main">
                            <Route path="/guide" exact component={Home}/>
                            <Route path="/button" component={ButtonExample}/>
                            <Route path="/icon" component={IconExample}/>
                            <Route path="/grid" component={GridExample}/>
                            <Route path="/layout" component={LayoutExample}/>
                            <Route path="/Input" component={InputExample}/>
                            <Route path="/Radio" component={RadioExample}/>
                            <Route path="/Checkbox" component={CheckboxExample}/>
                            <Route path="/form" component={FormExample}/>
                            <Route path="/pager" component={PagerExample}/>
                            <Route path="/menu" component={MenuExample}/>
                            <Route path="/tabs" component={TabsExample}/>
                            <Route path="/message" component={MessageExample}/>
                            <Route path="/dialog" component={DialogExample}/>
                            <Route path="/popover" component={PopoverExample}/>
                            <Route path="/datePicker" component={DatePickerExample}/>
                            <Route path="/switch" component={SwitchExample}/>
                            <Route path="/collapse" component={CollapseExample}/>
                            <Route path="/scroll" component={ScrollExample}/>
                        </main>
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
