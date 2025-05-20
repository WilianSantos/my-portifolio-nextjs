import { Icon } from '@iconify/react'
import Link from 'next/link'

import { Card } from './ui/Card'

export function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col w-full items-start pb-30 mt-30 border-b-1 border-gray-300"
    >
      <h3 className="text-5xl font-extrabold border-l-4 mb-3 pl-2 border-green-400">
        Sou Front-end e Back-end
      </h3>
      <div>
        <p className="text-lg">
          Aqui esta um pouco das minhas habilidades. Confira meu{' '}
          <Link href="/resume" className="text-green-600">
            currículo online
          </Link>
          .
        </p>
      </div>
      <ul className="grid grid-cols-4 w-full gap-1 mt-6">
        {/* Linguagens */}
        <li className="h-60 w-full">
          <Card>
            <h2 className="text-lg font-semibold mb-2">Linguagens</h2>
            <div className="flex items-start justify-center flex-wrap gap-2">
              <div className="flex flex-col items-center">
                <Icon icon="logos:python" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon
                  icon="vscode-icons:file-type-html"
                  className="w-10 h-10"
                />
                <span className="text-sm mt-1 text-center">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="vscode-icons:file-type-css" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="logos:javascript" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="logos:typescript-icon" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">TypeScript</span>
              </div>
            </div>
          </Card>
        </li>

        {/* Frameworks & Bibliotecas */}
        <li className="h-60 w-full">
          <Card>
            <h2 className="text-lg font-semibold mb-2">
              Frameworks & Bibliotecas
            </h2>
            <div className="flex flex-wrap items-start justify-center gap-2">
              <div className="flex flex-col items-center">
                <Icon icon="logos:django-icon" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">Django</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="logos:django" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">Django REST</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="logos:nextjs-icon" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="logos:react" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">React</span>
              </div>
            </div>
          </Card>
        </li>

        {/* Frameworks CSS */}
        <li className="h-60 w-full">
          <Card>
            <h2 className="text-lg font-semibold mb-2">Frameworks CSS</h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex flex-col items-center">
                <Icon icon="logos:tailwindcss-icon" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">TailwindCSS</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="logos:bootstrap" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">Bootstrap</span>
              </div>
            </div>
          </Card>
        </li>

        {/* Pré-processadores & Build Tools */}
        <li className="h-60 w-full">
          <Card>
            <h2 className="text-lg font-semibold mb-2">
              Pré-processadores & Build Tools
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex flex-col items-center">
                <Icon
                  icon="vscode-icons:file-type-scss"
                  className="w-10 h-10"
                />
                <span className="text-sm mt-1 text-center">SCSS</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon
                  icon="vscode-icons:file-type-less"
                  className="w-10 h-10"
                />
                <span className="text-sm mt-1 text-center">LESS</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon
                  icon="vscode-icons:file-type-gulp"
                  className="w-10 h-10"
                />
                <span className="text-sm mt-1 text-center">Gulp</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon
                  icon="vscode-icons:file-type-grunt"
                  className="w-10 h-10"
                />
                <span className="text-sm mt-1 text-center">Grunt</span>
              </div>
            </div>
          </Card>
        </li>

        {/* Banco de Dados & Infraestrutura */}
        <li className="h-60 w-full">
          <Card>
            <h2 className="text-lg font-semibold mb-2">
              Banco de Dados & Infraestrutura
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex flex-col items-center">
                <Icon icon="logos:mysql" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">MySQL</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon icon="logos:docker-icon" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">Docker</span>
              </div>
            </div>
          </Card>
        </li>

        {/* Controle de Versão */}
        <li className="h-60 w-full">
          <Card>
            <h2 className="text-lg font-semibold mb-2">Controle de Versão</h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex flex-col items-center">
                <Icon icon="logos:git-icon" className="w-10 h-10" />
                <span className="text-sm mt-1 text-center">Git</span>
              </div>
            </div>
          </Card>
        </li>
      </ul>
    </section>
  )
}
