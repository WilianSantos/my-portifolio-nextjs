import Link from 'next/link'
import { Icon } from '@iconify/react'

import { Project } from './ui/Project'
import { Button } from './ui/Button'

import { projectsData } from '@/data/data'

export function Projects() {
  return (
    <section className="pb-30 mt-30 flex flex-col items-start gap-5">
      <h3 className="text-5xl font-extrabold border-l-4 mb-3 pl-2 border-green-400">
        Projetos
      </h3>
      <div className="flex items-center justify-between text-lg w-full">
        <p>Aqui estão alguns projetos desenvolvidos.</p>

        <div className="mr-5">
          <Button isGreen>
            <Link
              href="/projects"
              className="w-full gap-2 flex items-center justify-center"
            >
              <Icon icon="prime:arrow-right" className="h-7 w-7" />
              Projetos
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {projectsData.map((item) => (
          <Project
            key={item.github}
            title={item.title}
            tags={item.technologies}
            image={item.image}
            description={item.description}
            github={item.github}
          />
        ))}
      </div>
    </section>
  )
}
