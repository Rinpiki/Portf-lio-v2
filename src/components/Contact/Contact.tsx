import React from 'react'
import Cards from './Cards'
import * as S from './ContactStyle'
import linkedin from '../../assets/AboutMeIcons/linkein.png'
import mail from '../../assets/AboutMeIcons/mail.svg'
import phone from '../../assets/AboutMeIcons/phone.svg'
import smile from '../../assets/AboutMeIcons/smile.svg'

function Contact() {
  return (
    <S.ContactContainer>
      <Cards icon={smile} ftext="WhatsApp" stext="62996794325" />
      <Cards icon={mail} ftext="E-mail" stext="MarcosDoPneu.com" />
      <Cards icon={phone} ftext="Telefone" stext="62996794325" />
      <Cards icon={linkedin} ftext="Linkedin" link="Marcos Pablo" />
    </S.ContactContainer>
  )
}

export default Contact
