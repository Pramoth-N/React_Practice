
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Singup from './Pages/Signup';
import Home from './Pages/Home';
import Navigateto from './Pages/Navigate';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navigateto />
        <Routes>
          <Route path='/' element ={<Navigate to='./login' />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Singup/>}/>
          <Route path='/home/*' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
