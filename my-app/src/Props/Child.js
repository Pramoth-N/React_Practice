import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1>Child</h1>
        <h2>{props.doc}</h2>
    </div>
  )
}

export default Child