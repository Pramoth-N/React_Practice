import React from 'react'
import Child from './Child'

const Parent = () => {
    const  data = "land";
    const  data2 = "Car";
  return (
    <div>
        <h1>Parent</h1>
        <Child doc = {data} doc2 ={data2}/>
    </div>
  )
}

export default Parent