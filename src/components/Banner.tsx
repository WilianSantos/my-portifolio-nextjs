'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Typewriter } from 'react-simple-typewriter'

import { Button } from './ui/Button'

import profileImage from '@/assets/images/foto.jpg'

export function Banner() {
  return (
    <section
      id="banner"
      className="h-screen flex w-full items-center justify-between border-b-1 border-gray-300 overflow-hidden"
    >
      <div className="text-lg max-w-8/12 w-full flex flex-col gap-3">
        <p className="text-3xl">Olá, sou</p>
        <h2 className="text-5xl font-extrabold text-green-400">
          <Typewriter
            words={['Desenvolvedor Full-Stack']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-gray-800 mb-2">
          Especializado em aplicações{' '}
          <span className="text-green-600">front-end</span> e{' '}
          <span className="text-green-600">back-end</span> para web.
        </p>
        <div className="flex w-1/2 justify-between gap-2.5">
          <Button isGreen>
            <Link href="/projects" className="flex gap-2.5">
              <Icon icon="prime:arrow-right" className="h-7 w-7" />
              Projetos
            </Link>
          </Button>
          <Button>
            <Link href="/resume" className="flex gap-2.5">
              <Icon icon="mdi:text-account" className="h-7 w-7" />
              Resumo
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative w-80 h-90 mr-3">
        {/* Fundo animado atrás */}
        <div className="absolute inset-0 z-0 animate-spin-back bg-green-400 rounded-lg" />

        <Image
          src={profileImage}
          alt="Imagem de perfil"
          className="object-cover relative z-10 w-full h-full rounded-lg"
        />
      </div>
    </section>
  )
}
