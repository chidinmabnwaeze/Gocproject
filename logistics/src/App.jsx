// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './Styles/request.css'
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from './pages/home';
// import Header from './components/header';
// import Services from './services';
// import Vendor from './components/vendor'
// import Reviews from './components/review';
// import Footer from './components/footer';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/userdash';
import Request from './pages/request';
import Request2 from './pages/request2';
import Practice from './pages/practice';




function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index element ={<Home/>}/>
    <Route path = "/home" element ={<Home/>}/>
    <Route path = "/login" element ={<Login/>}/>
    <Route path = "/signup" element ={<Signup/>}/>
    <Route path ="/dashboard" element ={<Dashboard/>}/>
    <Route path='/request' element ={<Request/>}/>
    <Route path='/request2' element ={<Request2/>}/>
    <Route path='/practice' element ={<Practice/>} />
    </Routes>
    </BrowserRouter>

  
    </>
  )
}

export default App
