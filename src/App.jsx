import './App.css'

import { NavBar } from './section/NavBar'
import { assets } from './assets/assets'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { BurgerPage } from './pages/Burger';
import { AboutPage } from './pages/About';
import { WhyUs } from './pages/WhyUs';
import MenuPage from './pages/MenuPage';
import { getLanguage } from "./hooks/Context";
export const App = () => {
  const { lang } = getLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <header className='fixed top-0 left-0 w-full z-50 bg-black p-2'>
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/burger/:id" element={<BurgerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feature" element={<WhyUs />} />
          <Route path='/menu' element={<MenuPage />} />
        </Routes>
      </main>

      <footer className="bg-black text-gray-200 py-12 pb-6 z-50">
        <div className="container px-5 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4 text-center">
            <img src={assets.logo_image} alt="logo" className='w-auto h-16 block mx-auto' />
            <h2 className="text-2xl font-bold text-orange-500">
              {lang === 'fi' ? 'Burger Heaven' : 'Burger Heaven'}
            </h2>
            <p className="text-gray-400">
              {lang === 'fi'
                ? 'Tarjoamme kaupungin mehukkaimmat ja herkullisimmat hampurilaiset, tuoreista raaka-aineista ja rakkaudella jokaisessa puraisussa.'
                : 'Serving the juiciest, most delicious burgers in town with fresh ingredients and love in every bite.'
              }
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-700/50 mt-12 pt-6 text-center text-gray-500 text-sm">
          {lang === 'fi'
            ? '© 2026 Burger Heaven. Kaikki oikeudet pidätetään.'
            : '© 2026 Burger Heaven. All rights reserved.'
          }
        </div>
      </footer>

    </>
  )
}
