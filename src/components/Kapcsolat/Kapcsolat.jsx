import React from 'react';

const Kapcsolat = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4CAF50] mb-4">
          Kapcsolat
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Lépj kapcsolatba velünk, ha kérdésed van, vagy segítségre van szükséged!
        </p>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center">
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88B849] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V3"/>
            </svg>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">E-mail cím</h2>
              <p className="text-lg text-gray-700">info@fruito.hu</p>
            </div>
          </div>

          <div className="flex items-center">
            
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88B849] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Telefonszám</h2>
              <p className="text-lg text-gray-700">+36 30 123 4567</p>
            </div>
          </div>

          <div className="flex items-center">
           
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#88B849] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Cím</h2>
              <p className="text-lg text-gray-700">Budapest, Gyümölcs utca 12.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kapcsolat;