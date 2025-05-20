import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/Footer'

import ProfileImage from '@/assets/images/foto.jpg'

export default function Resume() {
  return (
    <main className="h-screen overflow-y-scroll pr-2.5 pl-2.5 pt-10 pb-10 w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center p-5 pb-10">
          <h3 className="text-2xl mb-3">Currículo Online</h3>
          <Button isGreen>
            <Link
              className="flex gap-2 items-center text-sm"
              href="/files/Wilian-Soares-dos-Santos-curriculo.pdf"
            >
              <Icon icon="mdi:file-pdf-box" className="h-7 w-7" />
              Download PDF
            </Link>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl p-10 border-t-1 border-gray-200 bg-gray-300 w-full text-lg">
          <div className="flex items-center p-5 justify-between w-full border-b-1 border-gray-200">
            <div>
              <h2 className="text-green-400 font-extrabold text-5xl">
                Wilian Soares dos Santos
              </h2>
              <p className="font-bold text-2xl mt-3">
                Desenvolvedor Full-Stack Python
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 p-5 border-l-1 border-gray-100">
              <p>+55 (19) 97133-0046</p>
              <p>wilian.santos.dev@outlook.com</p>
              <p>Artur Nogueira, SP, Brasil</p>
            </div>
          </div>

          <div className="flex items-center justify-between w-full border-b-1 border-gray-200">
            <Image
              src={ProfileImage}
              alt="Foto do perfil"
              className="w-50 h-50 object-cover rounded-full"
            />
            <div className="w-10/12 ml-3 p-5">
              <p>
                Especializado em aplicações front-end e back-end para web. Sou
                programador a 2 anos, não tenho experiencia profissional na área
                de programação até agora tenho me dedicado aos estudos e a
                pratica com projetos acadêmicos. Atualmente estou cursando
                Desenvolvedor Full Stack Python, um curso profissionalizante e
                estou no 3° semestre de Análise e Desenvolvimento de Sistemas,
                em meus estudos desenvolve habilidades de como programar de
                forma limpa, sempre aplicando as boas práticas da comunidade.
                Sou cristão, baterista e um pouco geek, meus hobbies se dividem
                em ouvir músicas, ler mangas, assistir animes e ler livros.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 p-10 border-b-1 border-gray-200 w-full">
            <div className="flex flex-col items-start border-r-1 border-gray-100 p-5">
              <div className="mb-10">
                <h4 className="text-green-400 text-3xl font-bold pl-2 border-l-4 border-green-400">
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
                <h4 className="text-green-400 text-3xl font-bold pl-2 border-l-4 border-green-400">
                  Idiomas
                </h4>
                <ul className="list-disc ml-5 p-5">
                  <li>
                    <p>Português(Nativo)</p>
                  </li>
                  <li>
                    <p>Ingles - Básico</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-start p-5">
              <div>
                <h4 className="text-green-400 text-3xl font-bold pl-2 border-l-4 border-green-400">
                  Habilidades
                </h4>
                <div className="mt-3">
                  <h5 className="font-bold">Técnica</h5>
                  <ul className="list-disc ml-5 p-5">
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
                  <h5 className="font-bold">Profissional</h5>
                  <ul className="list-disc ml-5 p-5">
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
