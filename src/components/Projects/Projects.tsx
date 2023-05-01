import React from 'react'
import Cards from './Cards'
import * as S from './ProjectsStyle'

const projectData = [
  {
    title: 'JPfood',
    img: 'https://user-images.githubusercontent.com/74790193/235496927-80e50709-41de-4b76-be2f-c6959eda7a5b.png',
    tech: ['Next.js, Typescript, Tailwind'],
    link: 'https://github.com/Rinpiki/JPFooD',
  },
  {
    title: 'Blizzard',
    img: 'https://user-images.githubusercontent.com/74790193/214060442-5e093262-59e7-467a-92fd-0152941cd9ab.png',
    tech: ['React', 'Typescript', 'styled-components'],
    link: 'https://github.com/Rinpiki/Blizzard',
  },
  {
    title: 'Xbox-page',
    img: 'https://user-images.githubusercontent.com/74790193/206506843-239a3a73-3401-4088-8141-ec0c4466720f.png',
    tech: ['React', 'Typescript', 'styled-components'],
    link: 'https://github.com/Rinpiki/Xbox-page',
  },
  {
    title: 'Empire-burger',
    img: 'https://user-images.githubusercontent.com/74790193/195394165-a94a166a-2c71-490a-8418-bdf5ff4b7ad6.png',
    tech: ['React', 'Typescript', 'Tailwind'],
    link: 'https://github.com/Rinpiki/Empire-burger',
  },
  {
    title: 'GoNews',
    img: 'https://user-images.githubusercontent.com/74790193/202467546-31c33e9c-87e4-4692-966c-7d492fd22304.png',
    tech: ['React', 'Typescript', 'Tailwind'],
    link: 'https://github.com/Rinpiki/GoNews',
  },
  {
    title: 'BOLDO',
    img: 'https://raw.githubusercontent.com/Rinpiki/Pagina-Boldo/master/img/Demo.png',
    tech: ['html, css'],
    link: 'https://github.com/Rinpiki/Pagina-Boldo',
  },
  {
    title: 'Gerador de conselhos',
    img: 'https://github.com/Rinpiki/cartao-de-conselhos/blob/master/design/desktop-preview.jpg?raw=true',
    tech: ['html, css, js'],
    link: 'https://github.com/Rinpiki/cartao-de-conselhos',
  },
]

function Projects() {
  return (
    <S.ProjectContainer id="projetos">
      <S.Title>Projetos</S.Title>
      <S.CardsContainer>
        {projectData.map((project, index) => (
          <Cards
            key={index}
            title={project.title}
            img={project.img}
            tech={project.tech.join(', ')}
            link={project.link}
          />
        ))}
      </S.CardsContainer>
    </S.ProjectContainer>
  )
}

export default Projects
