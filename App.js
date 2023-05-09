import './App.css';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import Surfebooks from './components/SurfEBook/Surf-e-books';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
        <Route path ='/logout' element={<Logout/>} ></Route>
          <Route path='/surf' element={<Surfebooks/>}></Route>

    </Routes>
    </BrowserRouter>

  )  
      
}

export default App;
