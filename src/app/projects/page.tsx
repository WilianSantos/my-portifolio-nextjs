'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Project } from '@/components/ui/Project'
import { Footer } from '@/components/Footer'

import { projectsData } from '@/data/data'

export default function Projects() {
  const [tabProjects, setTabProjects] = useState<
    'all' | 'Front-end' | 'Back-end'
  >('all')
  return (
    <main className="h-screen mt-20 lg:mt-0 overflow-y-scroll pr-2.5 pl-2.5 pt-10 pb-10 w-full">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex flex-col items-center justify-center p-5 pb-10 text-lg">
          <h3 className="text-3xl mb-3 font-extrabold">Projetos</h3>
          <p>Aqui se encontra minha experiencia com Programação.</p>
          <div className="mt-6">
            <Button isGreen>
              <Link className="flex gap-2 items-center text-sm" href="/contact">
                <Icon icon="mdi:email-send" className="h-7 w-7" />
                Contate-me
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-t-1 border-gray-200 w-full text-lg">
          <ul className="flex items-center justify-center flex-wrap mb-5 gap-4 text-lg text-gray-250 font-bold">
            <li
              className={`p-3 border-b-2 cursor-pointer border-gray-500 ${tabProjects === 'all' && 'border-green-400'}`}
              onClick={() => setTabProjects('all')}
            >
              Todos
            </li>
            <li
              className={`p-3 border-b-2 cursor-pointer border-gray-500 ${tabProjects === 'Front-end' && 'border-green-400'}`}
              onClick={() => setTabProjects('Front-end')}
            >
              Front-end
            </li>
            <li
              className={`p-3 border-b-2 cursor-pointer border-gray-500 ${tabProjects === 'Back-end' && 'border-green-400'}`}
              onClick={() => setTabProjects('Back-end')}
            >
              Back-end
            </li>
          </ul>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {tabProjects === 'all' && (
              <>
                {projectsData.map((item) => (
                  <Project
                    key={item.github}
                    description={item.description}
                    github={item.github}
                    image={item.image}
                    tags={item.technologies}
                    title={item.title}
                  />
                ))}
              </>
            )}

            {tabProjects === 'Front-end' && (
              <>
                {projectsData
                  .filter((item) => item.type === 'Front-end')
                  .map((item) => (
                    <Project
                      key={item.github}
                      description={item.description}
                      github={item.github}
                      image={item.image}
                      tags={item.technologies}
                      title={item.title}
                    />
                  ))}
              </>
            )}

            {tabProjects === 'Back-end' && (
              <>
                {projectsData
                  .filter((item) => item.type === 'Back-end')
                  .map((item) => (
                    <Project
                      key={item.github}
                      description={item.description}
                      github={item.github}
                      image={item.image}
                      tags={item.technologies}
                      title={item.title}
                    />
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
