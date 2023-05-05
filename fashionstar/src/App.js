import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes } from 'react-router-dom';
import AllRoutes from './Components/AllRoutes';

  
function App() {
  return (
   <div>
    <Navbar/>
  <AllRoutes/>
   </div>
  );
}
  
export default App;