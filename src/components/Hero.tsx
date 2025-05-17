import Image from 'next/image'

import profileImage from '@/assets/images/foto.jpg'

export function Hero() {
  return (
    <section
      id="about"
      className="flex flex-col items-center md:flex-row lg:flex-row md:items-start lg:items-start gap-6 mb-60"
    >
      <div className="rounded-full overflow-hidden w-58 h-58">
        <Image
          src={profileImage}
          alt="Imagem de perfil"
          className="object-cover w-58 h-58"
        />
      </div>
      <div className="text-lg w-full">
        <h2 className="font-rubik text-4xl mb-2">
          Olá, sou <span className="block">Desenvolvedor Web Full Stack</span>
        </h2>
        <p className="text-gray-800 mb-2">
          Especializado em aplicações <strong>front-end</strong> e{' '}
          <strong>back-end</strong> para web.
        </p>
        <div>
          <p className="text-gray-600">
            Sou programador Full Stack e estou cursando{' '}
            <strong>Desenvolvedor Full Stack Python</strong>, um curso
            profissionalizante e estou no 3° semestre de{' '}
            <strong>Analise e Desenvolvimento de Sistemas</strong>. Sou cristão,
            baterista e um pouco geek, meus hobbies se dividem em ouvir musicas,
            ler mangas, assistir animes e ler livros. Me dedico sempre para o
            bom funcionamento de tudo aplicando boas praticas e fazendo tudo de
            forma organizada.
          </p>
        </div>
      </div>
    </section>
  )
}
