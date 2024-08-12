import React, { Component } from 'react'
import Display from './Display'

class RegForm extends Component {
    state = {
        fname :"",
        lname : "",
        phno : "",
        RegNo : "727723EUIT162",
        dept : "IT"
    };
  render() {
    return (
      <div>
        <form>
            <label for ='fname' >First Name : </label>
            <input
            id='fname'
            onChange={(e)=>{
                this.setState({fname : e.target.value })
            }}
            required
            placeholder='First Name'
            ></input>
            <br></br>
            <label for ='lname' >Last Name : </label>
            <input
            id='lname'
            onChange={(e)=>{
                this.setState({lname : e.target.value })
            }}
            required
            placeholder='Last Name'
            ></input>
            <br></br>
            <label for ='phno' >Phone No : </label>
            <input
            id='phno'
            onChange={(e)=>{
                this.setState({phno : e.target.value })
            }}
            required
            placeholder='9876543210'
            ></input>
            <br></br>
            <label for ='reg' >Reg No : </label>
            <input
            id='reg'
            onChange={(e)=>{
                this.setState({RegNo : e.target.value })
            }}
            placeholder='727723EUIT001'
            ></input>
            <br></br>
            <label for ='dept' >Department : </label>
            <input
            id='dept'
            onChange={(e)=>{
                this.setState({dept : e.target.value })
            }}
            placeholder='IT'
            ></input>
            <br></br>
            <input type='submit'></input>
        </form>
        <Display State = {this.state}/>
      </div>
    )
  }
}

export default RegForm