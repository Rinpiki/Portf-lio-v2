import React from 'react'
import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  padding: 24px;
  z-index: 10;
`

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #f9f9f9;
  @media (min-width: 700px) {
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
  }
`

export const BtnMenu = styled.img`
  z-index: 30;
  @media (min-width: 700px) {
    display: none;
  }
`

export const UlStyle = styled.ul`
  display: none;
  list-style: none;

  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    margin-right: 45px;
  }
  li + li {
    margin-right: 45px;
  }
  @media (min-width: 700px) {
    display: flex;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #f9f9f9;
  }
`
