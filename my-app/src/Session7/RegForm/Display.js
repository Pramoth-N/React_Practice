import React from 'react'

const Display = (details) => {
  return (
    <div>
        <h1>Signed In Successfully</h1>

        <h2>Name :: {details.State.fname} 
            {details.State.lname}</h2>
        <h2>Ph no : : {details.State.phno} </h2>
        <h2>Reg no : : {details.State.RegNo} </h2>
        <h2>Department : : {details.State.dept} </h2>

    </div>
  )
}

export default Display