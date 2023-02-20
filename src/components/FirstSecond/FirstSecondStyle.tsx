import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  @media (min-width: 330px) {
    margin-top: 32px;
  }
  @media (min-width: 800px) {
    justify-content: space-between;
    margin-top: 100px;
    width: 100%;
    max-width: 1300px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 300px;
  flex-direction: column;
  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 31px;
    text-align: center;
    margin-bottom: 8px;
    color: #f9f9f9;
    @media (min-width: 330px) {
      font-size: 24px;
    }
    @media (min-width: 800px) {
      font-weight: 700;
      font-size: 40px;
      line-height: 47px;
      align-items: left;
      text-align: left;
      max-width: 281px;
      margin-bottom: 20px;
    }
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    color: #828282;
    margin-bottom: 32px;
    word-break: break-word;
    max-width: 200px;
    @media (min-width: 600px) {
      max-width: none;
    }
  }
  @media (min-width: 320px) {
    max-width: 320px;
  }
  @media (min-width: 320px) {
    max-width: 390px;
  }
  @media (min-width: 800px) {
    margin-top: 40px;
    max-width: 450px;
    text-align: left;
    align-items: flex-start;
    margin-left: 24px;
    font-size: 18px;
  }
`

export const ContainerBtns = styled.div`
  display: flex;
`
export const FirstButton = styled.button`
  background: #00df5e;
  font-weight: 500;
  border: none;
  padding: 8.5px 22px;
  margin-right: 12px;
  a {
    color: #171717;
    color: inherit;
    text-decoration: none;
  }
  @media (min-width: 370px) {
    padding: 8.5px 28px;
  }
  @media (min-width: 390px) {
    padding: 8.5px 38px;
  }
  @media (min-width: 800px) {
    padding: 12px 18px;
    font-size: 14px;
  }
`
export const SecondButton = styled(FirstButton)`
  border: 0.697202px solid #333333;
  background: none;
  margin-right: 0px;
  a {
    color: #f9f9f9;
  }
`
export const Person = styled.img`
  display: none;
  @media (min-width: 800px) {
    display: block;
    margin-right: 24px;
    transition: 0.3s ease;
  }
`
