import React from 'react'

import { ContainerMenu, UlStyle } from './MenuStyle'

function MenuMobile() {
  return (
    <ContainerMenu>
      <UlStyle>
        <li>
          <a href="#sobre">Sobre mim</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#skills">Minhas skills</a>
        </li>
      </UlStyle>
    </ContainerMenu>
  )
}

export default MenuMobile
