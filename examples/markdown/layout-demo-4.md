``` jsx harmony
import * as React from 'react'

export default function (props) {
  return (
    <Layout className="custom-layout">
      <Aside>Aside</Aside>
      <Layout className="custom-layout">
        <Header>Header</Header>
        <Main>Content</Main>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}
```