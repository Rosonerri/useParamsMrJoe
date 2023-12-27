import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <div>
      <Container>
      <Wrapper>
        <h2>HULU</h2>
        <p>Sign</p>
      </Wrapper>
      </Container>
    </div>
  )
}

export default Header;
const Container = styled.div`
width: 100%;
height: 10vh;
background-color: #2B2610;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 95%;
height: 100%;
/* background-color: white; */
h2{
  color: green;
}
p{
  font-weight: 600;
  font-size: 20px;
  color: white;
}
display: flex;
justify-content: space-between;
align-items: center;
`
