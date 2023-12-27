import React from 'react'
// import { Button } from 'react-scroll';
import styled from 'styled-components';
const GlobalButton = () => {
  return (
    <div>
      <Container>
        <Button pad='' bor='' c='' bc="" fs=''></Button>
      </Container>
    </div>
  )
}

export default GlobalButton;
const Button = styled.button<{pad:string, bor:string, c: string, bc:string, fs: string}>`
    padding: ${({pad}) =>(pad)};
    border: ${({bor}) =>(bor)};
    color: ${({c}) =>(c)};
    background-color: ${({bc}) =>(bc)};
    font-size: ${({fs}) =>(fs)};
`
const Container = styled.div`

`
