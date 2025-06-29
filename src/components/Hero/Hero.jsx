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
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3">Új</span>
          <span className="text-sm font-medium">Megérkezett a Fruito! Nézd meg az újdonságokat</span>
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </a>
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
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#1877F3"/>
                <path d="M20.5 16H17V26H13V16H10.5V13H13V11.5C13 9.57 14.07 8 16.5 8H20V11H18C17.45 11 17 11.45 17 12V13H20.5V16Z" fill="white"/>
              </svg>
            </span>
            <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              {/* Példa Instagram ikon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#E1306C"/>
                <g>
                  <rect x="10" y="10" width="12" height="12" rx="4" fill="white"/>
                  <circle cx="16" cy="16" r="3" fill="#E1306C"/>
                  <circle cx="20.5" cy="11.5" r="1" fill="#E1306C"/>
                </g>
              </svg>
            </span>
          
            <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              {/* TikTok ikon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#000"/>
                <path d="M22.5 13.5c-1.38 0-2.5-1.12-2.5-2.5V8h-2.1v10.1c0 1.16-.94 2.1-2.1 2.1s-2.1-.94-2.1-2.1 0-2.1 2.1-2.1v-2.1c-2.32 0-4.2 1.88-4.2 4.2s1.88 4.2 4.2 4.2 4.2-1.88 4.2-4.2V15c.7.32 1.48.5 2.3.5h.5v-2z" fill="#fff"/>
                <path d="M20 8v3c0 1.38 1.12 2.5 2.5 2.5h1V11.2c-.7-.06-1.36-.3-1.9-.7C20.9 9.8 20.4 9 20 8z" fill="#25F4EE"/>
                <path d="M22.5 13.5c-1.38 0-2.5-1.12-2.5-2.5V8h-1v10.1c0 1.16-.94 2.1-2.1 2.1s-2.1-.94-2.1-2.1 0-2.1 2.1-2.1v-1c-2.32 0-4.2 1.88-4.2 4.2s1.88 4.2 4.2 4.2 4.2-1.88 4.2-4.2V15c.7.32 1.48.5 2.3.5h.5v-2z" fill="#000"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero