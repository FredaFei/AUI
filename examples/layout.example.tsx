import * as React from 'react'
import { Header, Aside, Main, Footer, Layout } from '../packages/layout/index'
import CodeBox from "./codeBox";
import content1 from "./markdown/layout-demo-1.md";
import content2 from "./markdown/layout-demo-2.md";
import content3 from "./markdown/layout-demo-3.md";
import content4 from "./markdown/layout-demo-4.md";

export default function(props: any) {
  return (
    <div className="exp-box">
      <div className="exp-section">
        <h3>基础应用</h3>
        <p>上中下布局</p>
        <Layout className="custom-layout">
          <Header>Header</Header>
          <Main>Content</Main>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <CodeBox content={content1}/>
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
        <p>左右布局-2</p>
        <Layout className="custom-layout">
          <Header>Header</Header>
          <Layout className="custom-layout">
            <Main>Content</Main>
            <Aside>Aside</Aside>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <CodeBox content={content3}/>
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
      </div>
      <CodeBox content={content4}/>
    </div>
  )
}
