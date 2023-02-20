import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 56px;
  width: 80%;
  margin-top: 26px;
  margin-bottom: 56px;
  @media (min-width: 630px) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 85px;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212121;
  padding: 13px 13px;
  border-radius: 100%;
  @media (min-width: 630px) {
    padding: 15px;
  }
`
export const Icon = styled.img`
  width: 24px;
  height: 24px;
  @media (min-width: 630px) {
    width: 32px;
    height: 32px;
  }
`
export const FirstText = styled.div`
  font-weight: 700;
  font-size: 13.348px;
  line-height: 17px;
  text-align: center;
  color: #f9f9f9;
  margin-top: 14px;
  margin-bottom: 4px;
  @media (min-width: 630px) {
    font-size: 18px;
    line-height: 23px;
  }
`
export const SecondText = styled.div`
  font-weight: 400;
  font-size: 11.8649px;
  line-height: 15px;
  text-align: center;
  color: #828282;
  @media (min-width: 630px) {
    font-size: 16px;
    line-height: 21px;
  }
`
export const link = styled.a`
  font-weight: 400;
  font-size: 11.8649px;
  line-height: 15px;
  text-align: center;
  color: #828282;
  @media (min-width: 630px) {
    font-size: 16px;
    line-height: 21px;
  }
`
