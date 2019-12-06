``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <Layout className="custom-layout">
      <Header>Header</Header>
      <Layout className="custom-layout">
        <Main>Content</Main>
        <Aside>Aside</Aside>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}
```