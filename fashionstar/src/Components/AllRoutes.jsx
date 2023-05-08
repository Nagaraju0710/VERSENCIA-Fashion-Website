import React from 'react';
// import './App.css';
// import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Dribbble from '../Pages/Dribbble';
import Inspiration from '../Pages/Inspiration';
import FindWork from '../Pages/FindWork';
import GoPro from '../Pages/GoPro';
import Hire from '../Pages/Hire';
import LearnDesign from '../Pages/LearnDesign';
import Products from "../Pages/Products"
import Signin from '../Pages/Signin';
import SignUp from '../Pages/Signup';

function AllRoutes() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Dribbble/>}/>
      <Route path='/inspiration' element={<Inspiration/>}/>
      <Route path='/findwork' element={<FindWork/>}/>
      <Route path='/learndesign' element={<LearnDesign/>}/>
      <Route path='/gopro' element={<GoPro/>}/>
      <Route path='/hire' element={<Hire/>}/> 
      <Route path='/products' element={<Products/>}/> 
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/SignIn' element={<Signin/>}/>
      </Routes>
      
   </div>
  );
}
  
export default AllRoutes;