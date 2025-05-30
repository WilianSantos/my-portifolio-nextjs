import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/Footer'

import ProfileImage from '@/assets/images/foto.jpg'

export default function Resume() {
  return (
    <main className="h-screen mt-20 lg:mt-0 overflow-y-scroll pr-2.5 pl-2.5 pt-10 pb-10 w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center p-5 pb-10">
          <h3 className="text-2xl mb-3">Currículo Online</h3>
          <Button isGreen>
            <Link
              className="flex gap-2 items-center text-sm"
              href="/files/wilian-s-santos-curriculo.pdf"
            >
              <Icon icon="mdi:file-pdf-box" className="h-7 w-7" />
              Download PDF
            </Link>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl p-10 border-t-1 border-gray-200 bg-gray-300 w-full text-base lg:text-lg">
          <div className="flex items-center flex-col md:flex-row lg:flex-row p-5 justify-between w-full border-b-1 border-gray-200">
            <div>
              <h2 className="text-green-400 font-extrabold text-5xl hidden sm:hidden md:hidden lg:block">
                Wilian Soares dos Santos
              </h2>
              <h2 className="text-green-400 font-extrabold text-3xl block lg:hidden">
                Wilian Soares dos Santos
              </h2>
              <p className="font-bold text-2xl mt-3 hidden sm:hidden md:hidden lg:block">
                Desenvolvedor Full-Stack Python
              </p>
              <p className="font-bold text-xl mt-3 block lg:hidden">
                Desenvolvedor Full-Stack Python
              </p>
            </div>

            <div className="flex flex-col mt-3 md:mt-0 lg:mt-0 items-start gap-3 p-5 border-l-1 border-gray-100">
              <p>+55 (19) 97133-0046</p>
              <p>wilian.santos.dev@outlook.com</p>
              <p>Artur Nogueira, SP, Brasil</p>
            </div>
          </div>

          <div className="flex flex-col mt-3 lg:mt-0 md:mt-0 md:flex-row lg:flex-row items-center justify-between w-full border-b-1 border-gray-200">
            <Image
              src={ProfileImage}
              alt="Foto do perfil"
              className="w-50 h-50 object-cover rounded-full"
            />
            <div className="w-full md:w-10/12 lg:w-10/12 mt-3 md:ml-3 lg:ml-3 lg:p-5">
              <p>
                Sou especializado em aplicações front-end e back-end web. Tenho
                conhecimento em construir paginas web com HTML, CSS e JavaScript
                simples á paginas com utilização de pré-processadores como SCSS
                e automatizadores de tarefas como GRUNT, também desenvolvo
                páginas com frameworks como React.js, Vue.js e Next.js, tenho
                familiaridade com styled-components, redux e react-query. Com o
                back-end posso construir APIs com Python e Django. Atualmente
                sou estudante de programação, não tenho experiência profissional
                com programação, tenho me dedicado aos estudos e a pratica com
                projetos acadêmicos. Minhas formações é Desenvolvedor Full Stack
                Python, um curso profissionalizante também estou no 3° semestre
                de Análise e Desenvolvimento de Sistemas, em meus estudos
                desenvolve habilidades para programar de forma limpa, sempre
                aplicando as boas práticas da comunidade. Sou cristão, baterista
                e um pouco geek, meus hobbies se dividem em ouvir músicas, ler
                mangas, assistir animes e ler livros.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-10 border-b-1 border-gray-200 w-full">
            <div className="flex flex-col items-start md:p-5 lg:p-5">
              <div className="mb-10">
                <h4 className="text-green-400 text-2xl lg:text-3xl font-bold pl-2 border-l-4 border-green-400">
                  Formação
                </h4>
                <div className="mt-3">
                  <h5 className="font-bold">
                    UNINTER - Centro Universitário Internacional
                  </h5>
                  <p>jul - 2021 | jan - 2025</p>
                </div>
                <div className="mt-3">
                  <h5 className="font-bold">
                    EBAC - Escola Britânica de Artes Criativas e Tecnologia
                  </h5>
                  <p>set - 2024 | ago - 2025</p>
                </div>
              </div>
              <div>
                <h4 className="text-green-400 mt-3 md:mt-0 lg:mt-0 text-2xl lg:text-3xl font-bold pl-2 border-l-4 border-green-400">
                  Idiomas
                </h4>
                <ul className="list-disc ml-2 p-2">
                  <li>
                    <p>Português(Nativo)</p>
                  </li>
                  <li>
                    <p>Ingles - Básico</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-start md:border-l-1 md:border-bg-gray-100 lg:border-l-1 lg:border-gray-100 md:p-5 lg:p-5">
              <div>
                <h4 className="text-green-400 mt-3 md:mt-0 lg:mt-0 text-2xl lg:text-3xl font-bold pl-2 border-l-4 border-green-400">
                  Habilidades
                </h4>
                <div className="mt-3">
                  <h5 className="font-bold">Técnica</h5>
                  <ul className="list-disc ml-2 p-2">
                    <li>
                      <p>TypeScript/React/Vue.js/Next.js</p>
                    </li>
                    <li>
                      <p>TailwindCSS/Bootstrap</p>
                    </li>
                    <li>
                      <p>Gulp/Grunt/LESS/SCSS</p>
                    </li>
                    <li>
                      <p>Python/Django/Django Rest</p>
                    </li>
                    <li>
                      <p>MySQL/Docker</p>
                    </li>
                    <li>
                      <p>Git/Postman/Figma(básico)</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold mt-3 md:mt-0 lg:mt-0">
                    Profissional
                  </h5>
                  <ul className="list-disc ml-2 p-2">
                    <li>
                      <p>Trabalho em equipe</p>
                    </li>
                    <li>
                      <p>Comprometimento</p>
                    </li>
                    <li>
                      <p>Proatividade</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-5">
            <ul className="flex items-center justify-between gap-4">
              <li className="flex items-center gap-2 text-sm">
                <Link href="https://www.linkedin.com/in/wilian-soares-dos-santos-115328124">
                  <div className="border-1 text-green-400 hover:text-white border-gray-200 p-2 rounded-full hover:border-green-400 hover:bg-green-400">
                    <Icon icon="mdi:linkedin" className="h-5 w-5" />
                  </div>
                </Link>
                Linkedin
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Link href="https://github.com/WilianSantos">
                  <div className="border-1 text-green-400 hover:text-white border-gray-200 p-2 rounded-full hover:border-green-400 hover:bg-green-400">
                    <Icon icon="mdi:github" className="h-5 w-5" />
                  </div>
                </Link>
                Github
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
