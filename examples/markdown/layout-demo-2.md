``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <Layout className="custom-layout">
      <Header>Header</Header>
      <Layout className="custom-layout">
        <Aside>Aside</Aside>
        <Main>Content</Main>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}
```