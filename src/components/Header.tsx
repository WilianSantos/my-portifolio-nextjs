'use client'

import { useEffect, useState } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`flex items-center justify-between w-screen fixed top-0 right-0 p-3.5 h-20 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : ''}`}
    >
      <div className="flex flex-col items-center md:flex-row lg:flex-row md:items-center md:justify-between lg:items-center lg:justify-between max-w-5xl p-6 mr-auto ml-auto w-full">
        <h1 className="text-2xl font-bold">Wilian Soares dos Santos</h1>
        <nav>
          <ul className="flex mt-2.5 md:mt-0 lg:mt-0 items-center gap-3.5">
            <li className="text-lg text-gray-700 hover:text-blue-400">
              <a href="#about">Sobre</a>
            </li>

            <li className="text-lg text-gray-700 hover:text-blue-400">
              <a href="#projects">Projetos</a>
            </li>
            <li className="text-lg text-gray-700 hover:text-blue-400">
              <a href="#skills">Habilidades</a>
            </li>

            <li className="text-lg text-gray-700 hover:text-blue-400">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
