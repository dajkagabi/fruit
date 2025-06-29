import React from 'react';
import almaImg from '../../assets/fruits/apple.png'
import avokadoImg from '../../assets/fruits/avocado.png';
import cseresznyeImg from '../../assets/fruits/cherry.png';
import narancsImg from '../../assets/fruits/orange.png';

const Termekek = () => {
  const fruits = [
    { name: 'Alma', price: 690, image: almaImg },
    { name: 'Avokádó', price: 920, image: avokadoImg },
    { name: 'Cseresznye', price: 2200, image: cseresznyeImg },
    { name: 'Narancs', price: 680, image: narancsImg },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4CAF50] mb-4">
          Termékeink
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Válogass a legfrissebb és legfinomabb gyümölcseink közül, közvetlenül a termelőktől!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {fruits.map((fruit, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            {/* object-cover helyett object-contain a képek teljes láthatóságáért */}
            <img src={fruit.image} alt={fruit.name} className="w-full h-36 object-contain" />
            <div className="p-3 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {fruit.name}
              </h2>
              <p className="text-md text-[#88B849] font-bold">
                {fruit.price} Ft/kg
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Termekek;