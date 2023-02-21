import React from 'react'
import styled, { keyframes } from 'styled-components'

const moveUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
`

export const MySkills = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  color: #f9f9f9;
  margin-bottom: 24px;
`
export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  @media (min-width: 630px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (min-width: 1200px) {
    grid-column-gap: 62px;
  }
`

export const CardSkill = styled.div`
  background: #212121;
  padding: 21px 24px;
  border: solid 2px #333333;
  /* animação */
  transition: transform 0.2s ease-in-out;
  &:hover {
    animation: ${moveUp} 0.2s ease-in-out forwards;
  }

  img {
    width: 42.33px;
    height: 48px;
    @media (min-width: 1200px) {
      width: 80px;
      height: 80px;
    }
  }
`
