import * as React from 'react'
import {Header, Aside, Main, Footer, Layout} from '../packages/layout/index'
import CodeBox from "./codeBox";
import content1 from "./markdown/layout-demo-1.md";
import content2 from "./markdown/layout-demo-2.md";
import content3 from "./markdown/layout-demo-3.md";
import content4 from "./markdown/layout-demo-4.md";
import doc from "./markdown/layout-doc.md";
import Markdown from './markdown'

export default function (props: any) {
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <p>上中下布局</p>
        <Layout className="custom-layout">
          <Header>Header</Header>
          <Main>Content</Main>
          <Footer>Footer</Footer>
        </Layout>
        <CodeBox content={content1}/>
      </div>
      <div className="exp-section">
        <p>左右布局-1</p>
        <Layout className="custom-layout">
          <Header>Header</Header>
          <Layout className="custom-layout">
            <Aside>Aside</Aside>
            <Main>Content</Main>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
        <CodeBox content={content2}/>
      </div>
      <div className="exp-section">
        <p>左右布局-2</p>
        <Layout className="custom-layout">
          <Header>Header</Header>
          <Layout className="custom-layout">
            <Main>Content</Main>
            <Aside>Aside</Aside>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
        <CodeBox content={content3}/>
      </div>
      <div className="exp-section">
        <p>侧边栏布局</p>
        <Layout className="custom-layout">
          <Aside>Aside</Aside>
          <Layout className="custom-layout">
            <Header>Header</Header>
            <Main>Content</Main>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
        <CodeBox content={content4}/>
      </div>
      <Markdown source={doc}/>
    </div>
  )
}
