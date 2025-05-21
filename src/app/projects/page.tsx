'use client'

import { Button } from '@/components/ui/Button'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useState } from 'react'

import praiseApi from '@/assets/images/preise-api/praise-api.png'
import pageDashboard from '@/assets/images/praise-site/page-dashboard.png'
import pageRestaurant from '@/assets/images/efood/page-restaurant.png'
import { Project } from '@/components/ui/Project'
import { Footer } from '@/components/Footer'

export default function Projects() {
  const [tabProjects, setTabProjects] = useState<'all' | 'front' | 'back'>(
    'all'
  )
  return (
    <main className="h-screen overflow-y-scroll pr-2.5 pl-2.5 pt-10 pb-10 w-full">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex flex-col items-center justify-center p-5 pb-10 text-lg">
          <h3 className="text-3xl mb-3 font-extrabold">Projetos</h3>
          <p>Aqui se encontra minha experiencia com Programação.</p>
          <div className="mt-6">
            <Button isGreen>
              <Link
                className="flex gap-2 items-center text-sm"
                href="/files/Wilian-Soares-dos-Santos-curriculo.pdf"
              >
                <Icon icon="mdi:email-send" className="h-7 w-7" />
                Contate-me
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-t-1 border-gray-200 w-full text-lg">
          <ul className="flex items-center justify-center mb-5 gap-4 text-lg text-gray-250 font-bold">
            <li
              className={`p-3 border-b-2 cursor-pointer border-gray-500 ${tabProjects === 'all' && 'border-green-400'}`}
              onClick={() => setTabProjects('all')}
            >
              Todos
            </li>
            <li
              className={`p-3 border-b-2 cursor-pointer border-gray-500 ${tabProjects === 'front' && 'border-green-400'}`}
              onClick={() => setTabProjects('front')}
            >
              Front-end
            </li>
            <li
              className={`p-3 border-b-2 cursor-pointer border-gray-500 ${tabProjects === 'back' && 'border-green-400'}`}
              onClick={() => setTabProjects('back')}
            >
              Back-end
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-6 w-full">
            {tabProjects === 'all' && (
              <>
                <Project
                  title="Sistema de Gerenciamento do Louvor (API)"
                  tags={['Python', 'Django', 'Django REST framework', 'Docker']}
                  image={praiseApi}
                />
                <Project
                  title="Sistema de Gerenciamento do Louvor (SITE)"
                  tags={['Next.js', 'TailwindCSS', 'React Query', 'Orval']}
                  image={pageDashboard}
                />
                <Project
                  title="Site de gerenciamento de restaurantes"
                  tags={['React']}
                  image={pageRestaurant}
                />
              </>
            )}

            {tabProjects === 'front' && (
              <>
                <Project
                  title="Sistema de Gerenciamento do Louvor (SITE)"
                  tags={['Next.js', 'TailwindCSS', 'React Query', 'Orval']}
                  image={pageDashboard}
                />
                <Project
                  title="Site de gerenciamento de restaurantes"
                  tags={['React']}
                  image={pageRestaurant}
                />
              </>
            )}

            {tabProjects === 'back' && (
              <>
                <Project
                  title="Sistema de Gerenciamento do Louvor (API)"
                  tags={['Python', 'Django', 'Django REST framework', 'Docker']}
                  image={praiseApi}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
