import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imgLogo from '../../assets/logo.png' 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-transparent border-none">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-1">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={imgLogo} className="h-12" alt="Fruito Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black border border-[#88B849] bg-white font-medium rounded-lg text-sm px-4 py-2 text-center"
            style={{ boxShadow: 'none' }}
          >
            Vásárolj most 
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-[#eaf0f2] focus:outline-none focus:ring-2 focus:ring-green-200"
            aria-controls="navbar-cta"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`} id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border-none rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link to="/" className="block py-2 px-3 md:p-0 text-black bg-[#7aa53e]/80 rounded-sm md:bg-transparent md:text-black" aria-current="page">
                Kezdőlap
              </Link>
            </li>
            <li>
              <Link to="/rolunk" className="block py-2 px-3 md:p-0 text-black rounded-sm hover:bg-[#7aa53e]/80 md:hover:bg-transparent md:hover:text-[#7aa53e]">
                Rólunk
              </Link>
            </li>
            <li>
              <Link to="/termekek" className="block py-2 px-3 md:p-0 text-black rounded-sm hover:bg-[#7aa53e]/80 md:hover:bg-transparent md:hover:text-[#7aa53e]">
                Termékek
              </Link>
            </li>
            <li>
              <Link to="/kapcsolat" className="block py-2 px-3 md:p-0 text-black rounded-sm hover:bg-[#7aa53e]/80 md:hover:bg-transparent md:hover:text-[#7aa53e]">
                Kapcsolat
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar