import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <Submit onClick={props.handleClick}>{props.text}</Submit>
  )
}

export default Button

const Submit = styled.button`
  width: 45%;
  max-width: 450px;
  border: none;
  padding: 15px;
  border-radius: 0.8rem;
  background-color: #e6b800;
  color: white;
  font-size: 1.7rem;
  margin: 10px 15px;
`