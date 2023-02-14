import React, { useState } from 'react'
import { BtnMenu, HeaderStyle, Logo, UlStyle } from './HeaderStyle'
import MenuBtn from '../../assets/Header/menuhamburguer.svg'
import MenuMobile from './MenuMobile/MenuMobile'

function Header() {
  const [menu, setMenu] = useState(false)
  const click = () => {
    setMenu(!menu)
    console.log(menu)
  }
  return (
    <HeaderStyle>
      <Logo>Portfólio</Logo>
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
      <BtnMenu src={MenuBtn} onClick={click} />
      {menu ? <MenuMobile /> : false}
    </HeaderStyle>
  )
}

export default Header
