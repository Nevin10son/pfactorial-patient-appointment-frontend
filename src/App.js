import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LoginComponent/>}/>
        <Route path="/usercalender" element = {<Calender/>}/>
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
