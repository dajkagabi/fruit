import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Termekek from './components/Termekek/Termekek'
import Rolunk from './components/Rolunk/Rolunk'
import Kapcsolat from './components/Kapcsolat/Kapcsolat'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Menu />
            <Banner />
          </>
        } />
        <Route path="/termekek" element={<Termekek/>} />
        <Route path="/rolunk" element={<Rolunk/>} />
        <Route path="/kapcsolat" element={<Kapcsolat/>} />
       

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App