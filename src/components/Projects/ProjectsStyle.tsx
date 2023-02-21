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

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardsContainer = styled.div`
  @media (min-width: 670px) {
    display: grid;
    grid-column-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1105px) {
    display: grid;
    grid-column-gap: 40px;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 31px;
  text-align: center;
  color: #f9f9f9;
  margin-bottom: 32px;
`

//cards

export const Card = styled.div`
  background: #333333;
  padding: 16px 18px 7px 18px;
  margin-bottom: 24px;
  border-radius: 5px;
  border: solid 2px #333333;
  /* animação */
  transition: transform 0.2s ease-in-out;
  &:hover {
    animation: ${moveUp} 0.2s ease-in-out forwards;
  }
`
export const CardImg = styled.img`
  width: 275px;
  height: 150px;
  border-radius: 5px;
  @media (min-width: 1200px) {
    width: 300px;
    height: 170px;
  }
`
export const CardTitle = styled.div`
  font-weight: 500;
  font-size: 13.05px;
  line-height: 17px;
  text-align: left;
  color: #ffffff;
  margin-top: 7px;
  @media (min-width: 630px) {
    font-size: 18px;
    margin-bottom: 4px;
  }
  a {
    color: #ffffff;
  }
`
export const Tech = styled.span`
  font-weight: 400;
  font-size: 10.15px;
  line-height: 13px;
  text-align: center;
  color: #828282;
  @media (min-width: 630px) {
    font-size: 14px;
  }
`
