// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/body';
import Header from './components/header';
import Services from './services';
import Vendor from './components/vendor'
import Reviews from './components/review';
import Footer from './components/footer';
import Login from '../../login/login';
import Signup from '../../signup/signup';
// import illustrations from './assets/illustrations';


function App() {


  return (
    <>
      <Header/>
    <Body/>
    <Services/>
    <Vendor/>
    <Reviews/>
    <Footer/>
    <Login/>
    {/* <Signup/> */}
    
  
    </>
  )
}

export default App
