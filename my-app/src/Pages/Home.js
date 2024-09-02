import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import MUIPractice from '../MaterialUI/MUIPractice'
import Counter from '../Counter/Counter';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
      <ul>
        <li>
          <Link to='data' >Card</Link>
        </li>
        <li>
          <Link to='count' >Counter</Link>
        </li>
      <button onClick={() => {
        navigate('data');
      }}>
        nav
      </button>
        </ul>
        </div>
      <Routes>
        <Route path='/data' element={<MUIPractice />} />
        <Route path='/count' element={<Counter />} />
      </Routes>
    </div>
  )
}

export default Home