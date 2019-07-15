import * as renderer from 'react-test-renderer'
import React from 'react'
import {shallow} from 'enzyme'

import {Aside, Footer, Header, Main, Layout} from "../index";

describe('测试 Layout 以下行为', () => {
  it('Layout 存在', () => {
    const json = renderer.create(
      <Layout className="custom-layout">
        <Header>Header</Header>
        <Main>Content</Main>
        <Footer>Footer</Footer>
      </Layout>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('layout 上中下布局', () => {
    const wrapper = shallow(
      <Layout className="custom-layout">
        <Header>Header</Header>
        <Main>Content</Main>
        <Footer>Footer</Footer>
      </Layout>)
    expect(wrapper.render()).toMatchSnapshot()
  })
  it('layout 侧边栏布局', () => {
    const wrapper = shallow(
      <Layout className="custom-layout">
        <Aside>Aside</Aside>
        <Layout className="custom-layout">
          <Header>Header</Header>
          <Main>Content</Main>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>)
    expect(wrapper.render()).toMatchSnapshot()
    expect(wrapper.find('.am-layout').hasClass('am-layout-hasAside')).toEqual(true)
  })
  it('Layout 设置 自定义类名', () => {
    const wrapper = shallow(
      <Layout className="custom-layout">
        <Header>Header</Header>
        <Main>Content</Main>
        <Footer>Footer</Footer>
      </Layout>)
    expect(wrapper.find('.am-layout').hasClass('custom-layout')).toEqual(true)
  })
  it('Layout 设置 自定义样式', () => {
    const wrapper = shallow(
      <Layout style={{color: 'red'}}>
        <Header>Header</Header>
        <Main>Content</Main>
        <Footer>Footer</Footer>
      </Layout>)
    expect(wrapper.render()).toMatchSnapshot()
  });
})