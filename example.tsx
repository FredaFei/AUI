import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import { HashRouter, Route, NavLink, RouteComponentProps, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./examples/home'));
const ButtonExample = React.lazy(() => import('./examples/button.example'));
const IconExample = React.lazy(() => import('./examples/icon.example'));
const GridExample = React.lazy(() => import('./examples/grid.example'));
const SkeletonExample = React.lazy(() => import('./examples/skeleton.example'));
const LayoutExample = React.lazy(() => import('./examples/layout.example'));
const ControllCountExample = React.lazy(() => import('./examples/controllCount.example'));
const InputExample = React.lazy(() => import('./examples/input.example'));
const RadioExample = React.lazy(() => import('./examples/radio.example'));
const CheckboxExample = React.lazy(() => import('./examples/checkbox.example'));
const FormExample = React.lazy(() => import('./examples/form.example'));
const PagerExample = React.lazy(() => import('./examples/pager.example'));
const TabsExample = React.lazy(() => import('./examples/tabs.example'));
const MessageExample = React.lazy(() => import('./examples/message.example'));
const DialogExample = React.lazy(() => import('./examples/dialog.example'));
const SwitchExample = React.lazy(() => import('./examples/switch.example'));
const CollapseExample = React.lazy(() => import('./examples/collapse.example'));
const MenuExample = React.lazy(() => import('./examples/menu.example'));
const DatePickerExample = React.lazy(() => import('./examples/datePicker.example'));
const UploaderExample = React.lazy(() => import('./examples/uploader.example'));
const PopoverExample = React.lazy(() => import('./examples/popover.example'));
const ScrollExample = React.lazy(() => import('./examples/scroll.example'));
const CarouselExample = React.lazy(() => import('./examples/carousel.example'));
const TreeExample = React.lazy(() => import('./examples/tree.example'));
import 'examples/index.scss';

import logo from './logo.png';

interface LinkItem {
  name: string
  path: string
  text: string
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

type Link = Array<LinkItem>
const renderLink = (routeTable: Link) => {
  return routeTable.map(item => {
    return <li key={item.name}><NavLink to={item.path}>{item.text}</NavLink></li>;
  });
};
const linkMap: Link = [
  { name: 'Button', path: '/button', text: 'Button 按钮', component: ButtonExample },
  { name: 'Icon', path: '/icon', text: 'Icon 图标', component: IconExample },
  { name: 'skeleton', path: '/skeleton', text: 'Skeleton 骨架屏', component: SkeletonExample },
  { name: 'Grid', path: '/grid', text: 'Grid 栅格', component: GridExample },
  { name: 'Layout', path: '/layout', text: 'Layout 布局', component: LayoutExample },
  { name: 'ControllCount', path: '/controllCount', text: 'ControllCount 数量输入框', component: ControllCountExample },
  { name: 'Input', path: '/input', text: 'Input 输入框', component: InputExample },
  { name: 'Radio', path: '/radio', text: 'Radio 单选框', component: RadioExample },
  { name: 'Checkbox', path: '/checkbox', text: 'Checkbox 多选框', component: CheckboxExample },
  { name: 'Switch', path: '/switch', text: 'Switch 开关', component: SwitchExample },
  { name: 'Form', path: '/form', text: 'Form 表单', component: FormExample },
  { name: 'Pager', path: '/pager', text: 'Pager 分页', component: PagerExample },
  { name: 'Menu', path: '/menu', text: 'Menu 导航菜单', component: MenuExample },
  { name: 'Tabs', path: '/tabs', text: 'Tabs 标签页', component: TabsExample },
  { name: 'Collapse', path: '/collapse', text: 'Collapse 折叠面板', component: CollapseExample },
  { name: 'Carousel', path: '/carousel', text: 'Carousel 轮播', component: CarouselExample },
  { name: 'Message', path: '/message', text: 'Message 全局提示', component: MessageExample },
  { name: 'Dialog', path: '/dialog', text: 'Dialog 对话框', component: DialogExample },
  { name: 'Popover', path: '/popover', text: 'Popover 气泡卡片', component: PopoverExample },
  { name: 'DatePicker', path: '/datePicker', text: 'DatePicker 日期选择器', component: DatePickerExample },
  { name: 'Uploader', path: '/uploader', text: 'Uploader 上传', component: UploaderExample },
  { name: 'Scroll', path: '/scroll', text: 'Scroll 滚动加载', component: ScrollExample },
  { name: 'Tree', path: '/tree', text: 'Tree 树形组件', component: TreeExample },
];

const App = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const onToggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };
  return (
    <div className="site-doc-wrapper">
      <header className="site-doc-header">
        <div className="site-doc-menu-icon" onClick={onToggleMenu}>
          <div className="menu-icon-line" onClick={onToggleMenu}></div>
        </div>
        <nav className="site-doc-logo-github">
          <div className="site-nav-item">
            <img src={logo} className="logo" />
          </div>
          <div className="site-nav-item"><a href="https://github.com/FredaFei/AUI" style={{ color: '#1890ff' }}>github</a>
          </div>
        </nav>
      </header>
      <div className="site-doc-body">
        <div className={['site-doc-aside-wrapper', visibleMenu && 'active'].join(' ')}>
          <div className="site-doc-mask" onClick={onToggleMenu}></div>
          <aside className="site-doc-aside">
            <h2>入门</h2>
            <ol onClick={onToggleMenu}>
              <li><NavLink to="/guide">快速上手</NavLink></li>
            </ol>
            <h2>组件</h2>
            <ol onClick={onToggleMenu}>{renderLink(linkMap)}</ol>
          </aside>
        </div>
        <main className="site-doc-main">
          <Switch>
            {linkMap.map(item => <Route path={item.path} exact component={item.component} key={item.name} />)}
            <Route path="/" exact component={Home} />
            <Route path="/guide" exact component={Home} />
          </Switch>
        </main>
      </div>
      <footer className="site-doc-footer">
        <p className="text-center">Made with ❤️<a href="https://github.com/Freda" target="_blank"> by Freda</a>
        </p>
      </footer>
    </div>
  );
};

ReactDOM.render(<React.Suspense fallback={<></>}>
  <HashRouter>
    <Switch>
      <App />
    </Switch>
  </HashRouter>
</React.Suspense>, document.getElementById('root'));
