import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Menu />
      <Banner />
      <Footer />
    </BrowserRouter>
  )
}

export default App