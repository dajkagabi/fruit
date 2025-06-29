import React from 'react'
import heroImg from '../../assets/hero-bg.jpg'

const Hero = () => {
  return (
    <section
      className="relative bg-white dark:bg-gray-900 overflow-hidden"
      style={{
        minHeight: '600px',
      }}
    >
      <img
        src={heroImg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center">
      
          
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Befektetünk a világ frissességébe!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-900">
          A Fruito-nál a legfrissebb, legfinomabb gyümölcsöket hozzuk el neked, közvetlenül a termelőktől.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
          >
            Tudj meg többet
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
          >
            <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Videó megtekintése
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-900 uppercase">MEGJELENTÜNK ITT IS</span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            
            <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              {/* Példa Facebook ikon */}
              <a href="#"><img src="src/icons/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
            </span>
            <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              {/* Példa Instagram ikon */}
            <div className="flex gap-4">
            
            <a href="#"><img src="src/icons/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
            
          </div>
            </span>
          
            <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              {/* TikTok ikon */}
             <a href="#"><img src="src/icons/tiktok.svg" alt="TikTok" className="w-5 h-5" /></a>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero