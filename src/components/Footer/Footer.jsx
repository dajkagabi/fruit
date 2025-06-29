import React from 'react'
import logoImg from '../../assets/logo.png' 

const Footer = () => {
  return (
    <footer className="bg-[#e4efe6] text-gray-800 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        
        
        <div className="flex items-center gap-4">
          <img src={logoImg} alt="Fruito Logo" className="w-14 h-14 object-contain" />
          <div>
            <h4 className="text-xl font-bold text-[#7aa53e]">Fruito</h4>
            <p className="text-sm">Természetes frissesség minden nap</p>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <div className="flex flex-col space-y-2">
            <h5 className="font-semibold text-[#7aa53e]">Menü</h5>
            <a href="#" className="hover:underline">Kezdőlap</a>
            <a href="#" className="hover:underline">Termékek</a>
            <a href="#" className="hover:underline">Rólunk</a>
          </div>
          <div className="flex flex-col space-y-2">
            <h5 className="font-semibold text-[#7aa53e]">Kapcsolat</h5>
            <a href="mailto:info@fruito.hu" className="hover:underline">info@fruito.hu</a>
            <p>+36 30 123 4567</p>
            <p>Budapest, Gyümölcs utca 12.</p>
          </div>
        </div>

        
        <div className="flex flex-col gap-4">
          <h5 className="font-semibold text-[#7aa53e]">Kövess minket</h5>
          <div className="flex gap-4">
            <a href="#"><img src="src/icons/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src="src/icons/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
            <a href="#"><img src="src/icons/tiktok.svg" alt="TikTok" className="w-5 h-5" /></a>
          </div>
        </div>

      </div>

      
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} Fruito. Minden jog fenntartva.
      </div>
    </footer>
  )
}

export default Footer
