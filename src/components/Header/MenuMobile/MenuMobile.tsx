import React from 'react'

import { ContainerMenu, UlStyle } from './MenuStyle'

function MenuMobile() {
  return (
    <ContainerMenu>
      <UlStyle>
        <li>
          <a href="#">Sobre mim</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Minhas skills</a>
        </li>
      </UlStyle>
    </ContainerMenu>
  )
}

export default MenuMobile
