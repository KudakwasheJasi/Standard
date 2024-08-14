import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/pages/HomePage'
import Features from './Components/Features'
import Hero from './Components/Hero'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'


const App = () => {
  return (
   
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/hero' element={<Hero />} />
      <Route exact path='/testimonials' element={<Testimonials />} />
      <Route exact path='/features' element={<Features/>} />
      <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
   
    </>
  )
}

export default App