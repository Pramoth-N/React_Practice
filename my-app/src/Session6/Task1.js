import React, { Component } from 'react'

export class Task1 extends Component {
    state = {
        name:"user"
    };
  render() {
    return (
      <div>
        <h1>Task1</h1>
        <h1>Welcome -> {this.state.name}</h1>
        <button onClick={()=>{
          this.setState({name:"Pramoth"})
      }}>Click Me</button>
        </div>
    )
  }
}

export default Task1