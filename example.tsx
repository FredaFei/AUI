import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import ButtonExample from './examples/button.example'

class App extends Component {
  render() {
    return <ButtonExample />
  }
}


ReactDOM.render(<App />, document.getElementById('root'))

