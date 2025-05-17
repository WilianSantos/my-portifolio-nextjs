import type { Metadata } from 'next'
import { Rubik, Nunito } from 'next/font/google'
import './globals.css'

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
        className={`${nunito.variable} ${rubik.variable} antialiased text-gray-950 font-nunito`}
      >
        {children}
      </body>
    </html>
  )
}
