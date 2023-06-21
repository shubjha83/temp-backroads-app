
import React from 'react';
import './index.css'; 
import Aboutus from './components/Aboutus';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Aboutus></Aboutus>
    <Hero></Hero>
    <Services></Services>
    <Tours></Tours>
    <Footer></Footer>
  </>
  );
}

export default App;
