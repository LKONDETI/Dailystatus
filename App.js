import './App.css';
import Welcome from './Components/Welcome';
import EmpData from './Components/EmpData';
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from './Components/Calculator';
import Calculator1 from './Components/Cal';
import Clock from './Components/clock/Clock';
import Home from './Components/headNav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Welcome name='Sravani'/>  */}
      {/* <EmpData/> */}
      {/* <Calculator/> */}
      {/* <Calculator1/> */}
      {/* <Clock/> */}
      {/* <Home/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome name='Sravani'/> }/>
        <Route path='/clock' element={<Clock/> }/>
        <Route path='/cal' element={<Calculator/>}/>
        <Route path='/emp' element={<EmpData/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
