import React from 'react'
import styled from 'styled-components'

export const ContainerMenu = styled.div`
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: left;
  align-items: left;
  width: 100%;
  max-width: 1300px;
  padding: 24px;
  background: #212121;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
`
export const UlStyle = styled.ul`
  li {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #f9f9f9;
    list-style: none;
  }
  li + li {
    margin-bottom: 10px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
