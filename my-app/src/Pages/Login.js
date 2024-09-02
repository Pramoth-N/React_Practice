import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, showLogin] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      {login ? (<form onSubmit={(e) => {
        e.preventDefault();
        showLogin(false);
        setTimeout(()=>navigate('/home/data'), 2000);
      }}>
        <label>
          username : 
          <input
            type='text'
            placeholder='username'
          />
        </label><br></br>
        <label>
          Password :  
          <input
            type='text'
            placeholder='username'
          />
        </label><br></br>
        <button>submit</button><br></br>
        Don't have an account : 
        <Link to='/signup' > Signup</Link>
      </form>) : (<h1>Login Sucessful</h1>)}
    </div>
  )
}

export default Login