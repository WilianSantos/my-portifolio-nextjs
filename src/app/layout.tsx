import type { Metadata } from 'next'
import { Rubik, Nunito } from 'next/font/google'

import './globals.css'

import { Sidebar } from '@/components/Sidebar'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin']
})

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Portifolio Wilian',
  description: 'Portifolio de Wilian Soares dos Santos',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${nunito.variable} ${rubik.variable} antialiased text-white bg-gray-500 font-nunito`}
      >
        <div className="flex relative">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
