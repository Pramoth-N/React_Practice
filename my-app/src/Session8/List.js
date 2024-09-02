import { Button } from '@mui/material'
import React from 'react'
const data = ["jhg","jhfgjkh"]
const List = () => {
  return (
      <div>
          <ol>
              {data.map((name, index) => (
                  <li key={index}>{name}</li>
              ))}
      </ol>
      <Button variant='contained' >gsdr</Button>
    </div>
  )
}

export default List