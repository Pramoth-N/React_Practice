import React, { Component } from 'react'
import CompB from './CompB'

class CompA extends Component {
    state = {
        val : 0,
        data : ""
    };
  render() {
    return (
      <div>
        <h1>Parent</h1>
        <input 
            // value={this.state.val}
            onChange={ (e) =>{
                this.setState({data : e.target.value})
            }
            }    
        ></input>
        <button onClick={()=>{
            this.setState({val:this.state.val + 1})
        }}>Click Me</button>
        <CompB  State = {this.state}/>
      </div>
    )
  }
}

export default CompA