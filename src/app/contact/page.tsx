import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'

import { ContactForm } from '@/components/ui/ContactForm'
import { Footer } from '@/components/Footer'

export default function Contact() {
  return (
    <main className="h-screen mt-20 lg:mt-0 overflow-y-scroll pr-2.5 pl-2.5 pt-10 pb-10 w-full">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex flex-col items-center justify-center p-5 pb-10 text-lg">
          <h3 className="text-3xl mb-3 font-extrabold">Projetos</h3>
          <p>
            Gostaria de conversar? Entre em contato pelas redes sociais ou
            preencha o formulário e envie um email para{' '}
            <span className="text-green-600">
              wilian.santos.dev@outlook.com
            </span>
            .
          </p>
          <ul className="flex items-center justify-between gap-4 mt-5">
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
        <div className="flex flex-col items-start justify-center gap-10 border-t-1 border-gray-200 w-full text-lg">
          <h3 className="text-5xl p-4 border-l-4 border-green-400 font-extrabold mt-10">
            Detalhes do contato
          </h3>
          <ul className="flex flex-wrap items-center justify-between w-full">
            <li className="p-5 mb-5 flex items-center justify-between border-l-2 border-green-400 ">
              <Icon
                icon="mdi:cellphone"
                className="h-15 w-15 text-green-400 mr-5"
              />
              <div className="flex flex-col items-start">
                <h4 className="text-2xl">Telefone</h4>
                <p className="text-base mt-2">+55 (19) 97133-0046</p>
              </div>
            </li>
            <li className="p-5 mb-5 flex items-center justify-between gap-2 border-l-2 border-green-400">
              <Icon
                icon="mdi:map-marker"
                className="h-15 w-15 text-green-400 mr-5"
              />
              <div className="flex flex-col items-start">
                <h4 className="text-2xl">Localização</h4>
                <p className="text-base mt-2">
                  Artur Nogueira, São Paulo, Brasil
                </p>
              </div>
            </li>
            <li className="p-5 mb-5 flex items-center justify-between gap-2 border-l-2 border-green-400 ">
              <Icon
                icon="mdi:email-open-outline"
                className="h-15 w-15 text-green-400 mr-5"
              />
              <div className="flex flex-col items-start">
                <h4 className="text-2xl">E-mail</h4>
                <p className="text-base mt-2">wilian.santos.dev@outlook.com</p>
              </div>
            </li>
          </ul>

          <h3 className="text-5xl p-4 border-l-4 border-green-400 font-extrabold mt-10">
            Entre em contato
          </h3>

          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
