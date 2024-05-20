// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Body from './pages/home';
import Header from './components/header';
import Services from './services';
import Vendor from './components/vendor'
import Reviews from './components/review';
import Footer from './components/footer';
import Login from './pages/login';
import Signup from './pages/signup';
// import illustrations from './assets/illustrations';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>

    </Routes>
    </BrowserRouter>
    
      <Header/>
    <Body/>
    <Services/>
    <Vendor/>
    <Reviews/>
    <Footer/>
    <Login/>
    <Signup/>
    
  
    </>
  )
}

export default App
