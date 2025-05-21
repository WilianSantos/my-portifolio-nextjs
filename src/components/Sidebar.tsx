import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import image from '@/assets/images/foto.jpg'

export function Sidebar() {
  return (
    <div className="absolute z-20 lg:relative top-0 right-0 left-0 flex flex-col justify-center lg:justify-start p-6 border-t-2 border-gray-200 bg-gray-500 lg:bg-gray-300 h-20 lg:h-screen lg:max-w-2xs w-full">
      <div className="lg:flex flex-col items-center gap-4 pb-10 border-b-1 border-gray-200 hidden md:hidden sm:hidden">
        <Image
          src={image}
          alt="Foto de perfil"
          className="rounded-full object-cover w-20 h-20"
        />
        <div className="text-white">
          <h2 className="text-2xl">Wilian S. Santos</h2>
          <p className="text-sm">Desenvolvedor Full Stack</p>
        </div>
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Link href="https://www.linkedin.com/in/wilian-soares-dos-santos-115328124">
              <div className="border-1 text-green-400 hover:text-white border-gray-200 p-2 rounded-full hover:border-green-400 hover:bg-green-400">
                <Icon icon="mdi:linkedin" className="w-5 h-5" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/WilianSantos">
              <div className="border-1 text-green-400 hover:text-white border-gray-200 p-2 rounded-full hover:border-green-400 hover:bg-green-400">
                <Icon icon="mdi:github" className="w-5 h-5" />
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <nav className="pt-10 pb-10">
        <ul className="flex flex-row lg:h-full lg:flex-col text-gray-100 text-base justify-between gap-1">
          <li className="hidden sm:hidden md:block lg:block">
            <Link
              href="/"
              className="flex gap-2.5 items-center p-2 w-full hover:bg-green-400 rounded-md"
            >
              <Icon icon="mdi:account" className="w-8 h-8" />
              Sobre
            </Link>
          </li>
          <li className="block sm:block md:hidden lg:hidden">
            <Link
              href="/"
              className="flex gap-2.5 items-center p-2 w-full hover:bg-green-400 rounded-md"
            >
              <Icon icon="mdi:account" className="w-8 h-8" />
            </Link>
          </li>

          <li className="hidden sm:hidden md:block lg:block">
            <Link
              href="/projects"
              className="flex gap-2.5 items-center p-2 w-full hover:bg-green-400 rounded-md"
            >
              <Icon icon="mdi:folder-open" className="w-8 h-8" />
              Projetos
            </Link>
          </li>
          <li className="block sm:block md:hidden lg:hidden">
            <Link
              href="/projects"
              className="flex gap-2.5 items-center p-2 w-full hover:bg-green-400 rounded-md"
            >
              <Icon icon="mdi:folder-open" className="w-8 h-8" />
            </Link>
          </li>

          <li className="hidden sm:hidden md:block lg:block">
            <Link
              href="/resume"
              className="flex gap-2.5 items-center p-2 w-full hover:bg-green-400 rounded-md"
            >
              <Icon icon="mdi:text-account" className="w-8 h-8" />
              Resumo
            </Link>
          </li>
          <li className="block sm:block md:hidden lg:hidden">
            <Link
              href="/resume"
              className="flex gap-2.5 items-center p-2 w-full hover:bg-green-400 rounded-md"
            >
              <Icon icon="mdi:text-account" className="w-8 h-8" />
            </Link>
          </li>

          <li className="hidden sm:hidden md:block lg:block">
            <Link
              href="/contact"
              className="flex gap-2.5 items-center p-2 w-full hover:bg-green-400 rounded-md"
            >
              <Icon icon="mdi:email" className="w-8 h-8" />
              Contato
            </Link>
          </li>
          <li className="block sm:block md:hidden lg:hidden">
            <Link
              href="/contact"
              className="flex gap-2.5 items-center p-2 w-full hover:bg-green-400 rounded-md"
            >
              <Icon icon="mdi:email" className="w-8 h-8" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
