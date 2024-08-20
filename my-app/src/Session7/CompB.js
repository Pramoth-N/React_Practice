import React from 'react'

const CompB = (props) => {
  return (
    <div>
        <h1>CompB</h1>
        <h2>{props.State.val}</h2>
        <h2>Data entered in Input === {props.State.data}</h2>
    </div>
  )
}

export default CompB