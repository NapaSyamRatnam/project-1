
import './App.css';
import LandingPage from './Landing_page/LandingPage'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';
import Dashboard from'./Admin_Dashboard/Dashboard'
import Employee from './Employee_Dashord/Employee';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/dashbord' element={<Dashboard/>}/>
      <Route path='/employee' element={<Employee/>}/>


    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
