import { Project } from './ui/Project/Project'

import praiseApi from '@/assets/images/preise-api/praise-api.png'

import pageLogin from '@/assets/images/praise-site/page-login.png'
import pageDashboard from '@/assets/images/praise-site/page-dashboard.png'
import pageMusics from '@/assets/images/praise-site/page-musics.png'
import pageProfile from '@/assets/images/praise-site/page-profile.png'
import pageCategory from '@/assets/images/praise-site/page-categorys.png'
import pageFunction from '@/assets/images/praise-site/page-functions.png'
import pageMember from '@/assets/images/praise-site/page-membros.png'
import pagePlaylist from '@/assets/images/praise-site/page-playlist.png'
import pageScale from '@/assets/images/praise-site/page-scales.png'

import pageHome from '@/assets/images/efood/page-home.png'
import pageRestaurant from '@/assets/images/efood/page-restaurant.png'
import pageRestaurantAdd from '@/assets/images/efood/page-restaurant-add.png'
import pageRestaurantModal from '@/assets/images/efood/page-restaurant-modal.png'

export function Projects() {
  return (
    <section
      id="projects"
      className="mt-5 mt-60 pt-10 pb-10 flex flex-col items-center justify-center gap-5"
    >
      <h3 className="text-3xl font-rubik font-extrabold mb-7">Projetos</h3>
      <div className="flex flex-col items-center gap-5 w-full">
        <Project
          title="Sistema de Gerenciamento do Louvor (API)"
          tags={['Python', 'Django', 'Django REST framework', 'Docker']}
          images={[praiseApi]}
          githubLink="https://github.com/WilianSantos/api-gerenc-louvor.git"
        >
          <p>
            Neste projeto desenvolvi um sistema para atividades relacionadas ao
            Ministério de Louvor da igreja, utilizei o python para o back-end e
            usei o Django junto com o Django REST framework, com autenticação
            JWT, onde é criado cookies e através deles é verificado se a
            requisição é valida, decide optar por essa abordagem poder armazenar
            os token de acesso de forma mais segura, e uma melhora na segurança
            seria criptografar esse cookies para melhor segurança.
          </p>
          <p className="mt-1.5">
            Essa aplicação foi pensada para atividades semanais da comunidade
            que frequento, todas as semanas é feito atividade como procura de
            musicas que não tocamos ainda, geração de slides para as musicas
            escaladas em determinado evento, organização de musicas de forma
            mais automática do que utilizar uma montanha de papeis. Ainda existe
            desafios a ser resolvidos como por exemplo a publicação da api e
            possíveis custos relacionados a aplicação. Neste projeto procurei
            utilizar da automação que Django Rest proporciona ao máximo que pode
            compreender.
          </p>
          <p className="mt-1.5">Encontrei alguns desafios no projeto como:</p>
          <ul className="p-5 flex flex-col items-start gap-2">
            <li>
              <strong>Autenticação:</strong> Demorei um pouco para compreender
              como o usuário na minha aplicação do Next.js logaria com a api,
              para buscar informações, a configuração do cors das requisição,
              principalmente para adequar a autenticação por meio de cookies.
            </li>
            <li>
              <strong>Transferência de imagens:</strong> como eu até em tão só
              tinha desenvolvido aplicação para transferência de aplicação
              Django para Django, não imaginava que para aplicação Next.js os
              arquivos são enviados através do FormData.
            </li>
            <li>
              <strong>Docker:</strong> A comunicação com banco de dados através
              do docker container foi outro desafio, porque percebi a
              necessidade de usar o docker principalmente para a conexão com
              Banco de Dados.
            </li>
          </ul>
          <p>
            Foram vários os desafios, que foram resolvidos com muita busca para
            a solução do problema, mas o melhor de tudo foi ter uma compreensão
            de como um projeto exige dedicação e empenho para que tudo sai de
            acordo.
          </p>
        </Project>
        <Project
          title="Sistema de Gerenciamento do Louvor (SITE)"
          tags={['Next.js', 'TailwindCSS']}
          images={[
            pageLogin,
            pageDashboard,
            pageProfile,
            pageFunction,
            pageMember,
            pageMusics,
            pagePlaylist,
            pageScale,
            pageCategory
          ]}
          githubLink="https://github.com/WilianSantos/nextjs_worship-site.git"
        >
          <p>
            Este projeto se trata de um site para a api do ministério de louvor,
            utilizei Next.js, pois é uma das tecnologias que estão mais em alta
            para o front-end, mas claro que o motivo maior foi pela facilidade
            de manipular os elementos de uma pagina de forma mais intuitiva e
            pratica, e também por proporcionar uma experiencia melhora para o
            usuário.
          </p>
          <p className="mt-1.5">
            Essa aplicação foi pensada em proporcionar uma experiencia melhora
            para usuários tanto de um desktop, notebook, tablet ou cellular. E
            apresentar as informações de forma clara e objetiva.
          </p>
          <p className="mt-1.5">As dificuldades nesta aplicação foram:</p>
          <ul className="p-5 flex flex-col items-start gap-2">
            <li>
              <strong>Next.js:</strong> No começo tive dificuldade em entender
              como o Next.js funcionava, o curso que faço ensina o react e com
              base ja com esse conhecimento procurei fui descobrindo como tudo
              funcionava.
            </li>
            <li>
              <strong>Design:</strong> Para o design tive muita dificuldade e
              para resolver isso utilizei de IA para apresentar um layout melhor
              do que eu ja vinha fazendo, então a partir disso comecei a
              desenvolver com algo meio pronto ja.
            </li>
            <li>
              <strong>Orval:</strong> Para a tipagem e a padronização da
              construção dos hooks utilizei o Orval para geral esses arquivos
              vindos da api de forma mais automática, e por essa razão tive
              dificuldade para entender como funcionava, para configurar meus
              hooks com react-query para requisições.
            </li>
          </ul>
          <p>
            Nesta aplicação pode ver que uma api bem documentada pode facilitar
            e muito o trabalho do front-end, também percebi que quem manipula os
            dados do banco de dados é o back-end e o front-end tem que
            apresentar os dados da melhor forma possível para que o usuário
            compreenda.
          </p>
        </Project>
        <Project
          title="Site de gerenciamento de restaurantes"
          tags={['React']}
          images={[
            pageHome,
            pageRestaurant,
            pageRestaurantModal,
            pageRestaurantAdd
          ]}
          githubLink="https://github.com/WilianSantos/ebac_efood-react.git"
        >
          <p>
            Este projeto foi proposto para desenvolver no final do módulo de
            front-end, foi desenvolvido com React e acessa uma api para obter as
            informações.
          </p>
          <p className="mt-1.5">
            Essa aplicação segui o layout proposto pelo Figma, é um site de
            gerenciamento de estabelecimento de restaurantes o usuário acessa um
            restaurante especifico que vem de uma api, e depois é redirecionado
            para uma pagina onde ele pode adicionar o produto que ele deseja ao
            carinho de compras e no carinhos de compras ele pode seguir o seu
            pedido.
          </p>
        </Project>
      </div>
    </section>
  )
}
