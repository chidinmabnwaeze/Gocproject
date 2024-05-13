// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/body';
import Header from './components/header';
// import Footer from './components/footer';
import Services from './services';
import Vendor from './components/vendor'
import Reviews from './components/review';


function App() {


  return (
    <>
      <Header/>
    <Body/>
    <Services/>
    <Vendor/>
    <Reviews/>
    
    </>
  )
}

export default App
