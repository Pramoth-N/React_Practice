import React, { useState } from 'react'

function Name() {
    const [name , setName] = useState("");
    const [list , setList] = useState("");
  return (
    <div>
        <input
        value={name}
        onChange={(e)=>{setName(e.target.value)}}></input>
        <button onClick={()=>{setList(name)}}>Click</button>
        <h1>{list}</h1>
    </div>
  )
}

export default Name