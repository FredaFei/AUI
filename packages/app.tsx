import React, { Component } from 'react'
import Button from './button/button'
import Icon from './icon/icon'

class App extends Component {
  onClick = ()=>{
    console.log(1)
  }
  render() {
    return (
      <div className="App">
        <Icon name="settings" onClick={this.onClick} />
        <Icon name="loading" onClick={this.onClick} />
        <Icon name="left" rotate={90} style={{ fill: 'red'}} onClick={this.onClick} />
        <Icon name="right" className="haha" onClick={this.onClick} />
        <Button />
      </div>
    )
  }
}

export default App
