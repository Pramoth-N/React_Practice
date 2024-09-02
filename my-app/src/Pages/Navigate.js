import React from 'react'
import { Link } from 'react-router-dom'

const Navigate = () => {
  return (
      <div >
          <ul style={{display:'flex' , gap:"100px" ,listStyle:'none' ,justifyContent:'center'}}>
              <li>
                  <Link to='/login'>login</Link>
              </li>
              <li>
                  <Link to='/signup'>Signup</Link>
              </li>
              <li>
                  <Link to='/home'>Home</Link>
              </li>
          </ul>
    </div>
  )
}

export default Navigate