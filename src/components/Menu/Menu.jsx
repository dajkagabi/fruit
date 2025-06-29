import React from 'react'
import apple from '../../assets/fruits/apple.png'
import avocado from '../../assets/fruits/avocado.png'
import cherry from '../../assets/fruits/cherry.png'
import orange from '../../assets/fruits/orange.png'

const fruits = [
  {
    name: 'Alma',
    price: '693 Ft/kg',
    img: apple
  },
  {
    name: 'Avokádó',
    price: '920 Ft/kg',
    img: avocado
  },
  {
    name: 'Cseresznye',
    price: '2200 Ft/kg',
    img: cherry
  },
  {
    name: 'Narancs',
    price: '690 Ft/kg',
    img: orange
  }
]

const Menu = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {fruits.map((fruit, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4">
          <img src={fruit.img} alt={fruit.name} className="w-32 h-32 object-cover rounded-lg mb-4" />
          <h3 className="text-lg font-semibold mb-2">{fruit.name}</h3>
          <span className="text-green-700 font-bold text-base">{fruit.price}</span>
        </div>
      ))}
    </div>
  )
}

export default Menu