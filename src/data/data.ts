import { StaticImageData } from 'next/image'

import praiseApiImage from '@/assets/images/praise-api.png'
import praiseSiteImage from '@/assets/images/praise-site.png'
import efoodImage from '@/assets/images/efood.png'
import eplayImage from '@/assets/images/eplay.png'
import disneyPlus from '@/assets/images/disneyplus.png'

type Project = {
  type: 'Back-end' | 'Front-end'
  title: string
  technologies: string[]
  image: StaticImageData
  description: string
  github: string
}

export const projectsData: Project[] = [
  {
    type: 'Back-end',
    title: 'Sistema de Gerenciamento do Louvor (API)',
    technologies: [
      'Python',
      'Django',
      'Django REST',
      'Docker',
      'Redis',
      'MySQL'
    ],
    github: 'https://github.com/WilianSantos/api-gerenc-louvor.git',
    image: praiseApiImage,
    description:
      'Neste projeto utilizei o python e Django junto com o Django REST, com autenticação\
      JWT, onde é criado cookies e através deles é verificado se a requisição é valida\
      Essa aplicação foi pensada para atividades semanais da comunidade\
      que frequento, todas as semanas é feito atividade como procura de\
      musicas que não tocamos ainda, geração de slides para as musicas\
      escaladas em determinado evento, organização de musicas de forma\
      mais automática do que utilizar uma montanha de papeis. '
  },
  {
    type: 'Front-end',
    title: 'Sistema de Gerenciamento do Louvor (SITE)',
    technologies: ['Next.js', 'TailwindCSS', 'React Query', 'Orval'],
    image: praiseSiteImage,
    github: 'https://github.com/WilianSantos/nextjs_worship-site.git',
    description:
      'Essa aplicação se trata de um site desenvolvido em Next.js e TailwindCSS para a api do ministério do louvor.\
      Para as a tipagem utilizei o Orval para gerar tudo, dessa forma pode criar os hooks para requisições com o React Query.'
  },
  {
    type: 'Front-end',
    title: 'Site de gerenciamento de restaurantes',
    technologies: ['React', 'React Redux'],
    image: efoodImage,
    github: 'https://github.com/WilianSantos/ebac_efood-react.git',
    description:
      ' Este projeto foi proposto para desenvolver no final do módulo de front-end,\
       foi desenvolvido com React e acessa uma api através do reduxjs-toolkit para obter as informações.\
      A aplicação trata-se de um site de gerenciamento de estabelecimento de restaurantes onde o\
       usuário acessa um restaurante que deseja, e depois pode adicionar ao carrinho e comprar.'
  },
  {
    type: 'Front-end',
    title: 'Site de venda de jogos',
    technologies: ['React', 'React Redux'],
    image: eplayImage,
    github: 'https://github.com/WilianSantos/ebac_eplay-react.git',
    description:
      ' Este é outro projeto desenvolvido no final do módulo de front-end,\
       foi desenvolvido com React e acessa uma api através do reduxjs-toolkit para obter as informações.\
      O site é uma loja de jogos onde o usuário pode adicionar seu jogo no carrinho e comprar.'
  },
  {
    type: 'Front-end',
    title: 'Clone da Disney Plus',
    technologies: ['HTML', 'SCSS', 'GRUNT'],
    image: disneyPlus,
    github: 'https://github.com/WilianSantos/ebac_clone_disneyplus.git',
    description:
      'Aqui foi desenvolvido um clone do site da Disney, as tecnologias usadas foram HTML o SCSS e grunt para automatizar as tarefas.'
  }
]
