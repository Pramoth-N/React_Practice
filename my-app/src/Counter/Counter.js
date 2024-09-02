import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 }
  subCount = ()=>{
    // try{
    if(this.state.count > 0){
      this.setState({count:this.state.count -1}) ;
    }
// } catch()
  }
  render() {
    return (
      <div>
        <h1> Set Count </h1>
        <button onClick={this.subCount}>-</button>
        <p>{this.state.count}</p>
        <button onClick={()=>{
            this.setState({count:this.state.count +1})
        }}>+</button>
      </div>
    );
  }
}

export default Counter;
