import React from 'react'
import bannerImg from '../../assets/fruit-plate2.png' 

const Banner = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center py-8 bg-[#f5f9f6] px-0 md:px-8">
      <img
        src={bannerImg}
        alt="Fruito Banner"
        className="w-full md:w-2/3 max-h-[500px] object-contain rounded-none shadow-none"
        style={{ maxHeight: '320px' }}
      />
      <div className="w-full md:w-1/3 flex flex-col items-start justify-center px-6 mt-6 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#7aa53e]">Frissesség minden nap!</h2>
        <p className="text-gray-700 text-lg mb-4">
          Válogass a legjobb gyümölcsök közül, közvetlenül a termelőktől. Gyors szállítás, garantált minőség!
        </p>
        <a
          href="#"
          className="inline-block bg-[#7aa53e] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#5e7f2c] transition"
        >
          Nézd meg kínálatunkat
        </a>
      </div>
    </div>
  )
}

export default Banner