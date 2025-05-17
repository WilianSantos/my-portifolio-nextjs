'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useState } from 'react'
import { ContactForm } from './ui/ContactForm'

export function Contact() {
  const [isEmail, setIsEmail] = useState(false)
  return (
    <section
      id="contact"
      className="pt-10 pb-10 mt-65 mb-65 flex flex-col items-center gap-5"
    >
      <h3 className="text-3xl font-rubik font-extrabold mb-7">Contato</h3>
      <div className="w-full text-center">
        <p className="text-lg text-gray-500">
          Gostaria de conversar? Entre em contato pelas redes sociais ou por
          email
        </p>
      </div>
      <ul className="flex items-center justify-between gap-2">
        <li>
          <Link href="https://www.linkedin.com/in/wilian-soares-dos-santos-115328124">
            <div className="bg-blue-50 p-6 rounded-full hover:bg-blue-500 hover:text-white">
              <Icon icon="mdi:linkedin" width={30} height={30} />
            </div>
          </Link>
        </li>
        <li>
          <div
            onClick={() => setIsEmail(!isEmail)}
            className="bg-blue-50 p-6 rounded-full hover:bg-blue-500 hover:text-white flex flex-col items-center cursor-pointer"
          >
            <Icon icon="mdi:alternate-email" width={30} height={30} />
            {isEmail && (
              <p className="text-lg">wilian.santos.dev@outlook.com</p>
            )}
          </div>
        </li>
      </ul>
      <ContactForm />
    </section>
  )
}
