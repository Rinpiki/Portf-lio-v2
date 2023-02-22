import React from 'react'
import Cards from './Cards'
import * as S from './ContactStyle'
import linkedin from '../../assets/AboutMeIcons/linkein.png'
import mail from '../../assets/AboutMeIcons/mail.svg'
import phone from '../../assets/AboutMeIcons/phone.svg'
import smile from '../../assets/AboutMeIcons/smile.svg'

import { Zoom } from 'react-awesome-reveal'

function Contact() {
  return (
    <S.ContactContainer>
      <Zoom cascade damping={0.2}>
        <Cards icon={smile} ftext="WhatsApp" stext="62996794325" />
        <Cards icon={mail} ftext="E-mail" stext="marcospablocm@gmail.com" />
        <Cards icon={phone} ftext="Telefone" stext="62996794325" />
        <Cards icon={linkedin} ftext="Linkedin" link="Marcos Pablo" />
      </Zoom>
    </S.ContactContainer>
  )
}

export default Contact
