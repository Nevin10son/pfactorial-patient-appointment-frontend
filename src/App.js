import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calender from './components/Calender'
import AppointmentBook from './components/AppointmentBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LoginComponent/>}/>
        <Route path="/usercalender" element = {<Calender/>}/>
        <Route path="/appointments/:date" element = {<AppointmentBook/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
