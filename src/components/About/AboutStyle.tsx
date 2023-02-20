import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
  width: 90%;
  @media (min-width: 768px) {
    max-width: 745px;
    margin-top: 170px;
  }
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  color: #f9f9f9;
  margin-bottom: 14px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`
export const AboutText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #828282;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }
`
