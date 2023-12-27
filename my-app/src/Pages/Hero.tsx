import React from 'react'
import styled from 'styled-components'
import img2 from "../images/Sys.png"

const Hero = () => {
  return (
    <div>
      <Container>
      <Wrapper>
        <Left>
        <h2>Action Movies</h2>
        <p>Watch any action Movie with any Hulu plan starting at <br /><span>$7.55/Month</span></p>
        <Button>
            Sign Up now
        </Button>
        <h6>Hulu free trial available for new and eligible returning Hulu subscribers only. Cancel anytime. <br /> Additional terms apply.</h6>
        </Left>
        <Left1>
        </Left1>
      </Wrapper>
      </Container>
    </div>
  )
}

export default Hero;
const Button = styled.div`
cursor: pointer;
padding: 10px 15px;
color: black;
background-color: white;
display: inline-block;
font-size: 18px;
font-weight: 700;
`

const Left = styled.div`
h6{
   font-size: 12px;
}
span{
    font-weight: 700;
}
`
const Left1 = styled.div``
const Container = styled.div`
width: 100%;
height: 65vh;
display: flex;
background-image: url(${img2});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 90%;
height: 100%;
font-size: 25px;
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
