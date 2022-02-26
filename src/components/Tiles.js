import React from 'react';
import styled from 'styled-components'

const Tiles = (props) => {
  return (
    <TilesContainer>
      <Span>{props.title}</Span>
      <Span>{props.value}</Span>
    </TilesContainer>
  )
}

export default Tiles

const TilesContainer = styled.div`
    padding: 40px;
    margin: 20px;
    border-radius: 50%;
    background-color: #006080;    
    width: 13vw;
    height: 13vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 15px solid #007399;    
`

const Span = styled.span`
  color: white;
  font-size: 1.8rem;
`