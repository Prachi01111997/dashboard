import React from 'react'
import styled from 'styled-components'
import InputComponent from './Input'

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <InputComponent/>
      </Content>
    </FooterContainer>
  )
}


export default Footer

const FooterContainer = styled.div`
    height: calc(100vh - 17vw - 120px);
    background-color: black;
    display: flex;
    justify-content: center;
`
const Content = styled.div`
  width: 50vw;
  box-sizing: border-box;
  justify-content: space-around;
`