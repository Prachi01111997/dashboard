import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const InputComponent = ({props}) => {
 
  return (
    <>
      <InputContainer>
        <InputType />
        <Submit />        
      </InputContainer>
    <ApiButton>
      <Button />
      <Button />
    </ApiButton>
    </>
  )
}

export default InputComponent

const InputContainer = styled.div`
    border: 1px solid white;
    margin: 40px;
    border-radius: 0.8rem;
    width: 92%;
    min-height: 4.5rem;
    display: flex;
    padding: .5rem;
    background-color: white;
    box-sizing: border-box;
    justify-content: space-around;
`

const InputType = styled.input`
  width: 60%;
  border: none;
  border-radius: 0.8rem;
  padding: 1rem;
  font-size: 2rem;
  text-align: center;
  outline: none;
`
const Submit = styled.button`
  width: 40%;
  border: none;
  /* border-radius: 0.8rem; */
  background-color: #ffcc00;
  color: white;
  font-size: 1.7rem;
`

const ApiButton = styled.div`
  display: flex;
  justify-content: center;
`
