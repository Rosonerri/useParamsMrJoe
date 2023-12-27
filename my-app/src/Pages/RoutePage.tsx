import React from 'react'
import img from "../images/Hulu2.jpg"
import img2 from "../images/Espn.jpg"
import styled from 'styled-components';
import Data from "../Pages/Data.json"
import { useParams } from "react-router-dom";
import Details from './Details';

const RoutePage = () => {
  const params: any = useParams()
  const detail = Data[params.id - 1]
  return (
    <div>
      <Container>
        <Image Bakimg={detail.img}>
         <Content>
          <Wrap>
          <Header>
          <Logo>HULU</Logo>
          <Login>
            <p>Start Your Free Trials</p>
            <h4>Login</h4>
         </Login>
         </Header>
         <Body>
          <Title>
          {detail.text5}
          </Title>
          <Desc>
            {detail.Description}
          {/* When Billie finds herself reliving different versions of the same first date,<br /> she must break out of a series of loops created by her manipulative ex-girlfriend.....MORE <br />
          Director: Kelley Kali */}
          </Desc>
          <Desc2>
            {detail.Desc2}
          {/* TVMA Horror Black Stories+Movie2023 <br />
          Stream thousands of shows and movies, with plans starting at $7.99/month. */}
          </Desc2>
          <Button>
            START YOUR FREE TRIALS
          </Button>
          <Desc2>
          TVMA Horror Black Stories+Movie2023 <br />
          Stream thousands of shows and movies, with plans starting at $7.99/month.
          </Desc2>
         </Body>
         <Desc4>
          <Img>
          <img src={img2} alt="" />
          </Img>

          <Mydesc>
            <h4>
          DISNEY BUNDLE TRIO BASIC
            </h4>
            <h2>Get Hulu, Disney+, and ESPN+, all with ads, for $12.99/mo.*</h2>
            <p>*Price will increase to $14.99/month on 10/12/2023.</p>
          </Mydesc>
          <Button>
          GET ALL THREE
         </Button>
         </Desc4>
         
          </Wrap>
         </Content>
         
        </Image >
        <Trial>
          <TrialW>
          <p>YOU MAY ALSO LIKE</p>
          <h4>DETAILS</h4>
          </TrialW>
        </Trial>
        <Detailed>
          <SubD>
            <h4>About This Movie</h4>
            <Title>
              JAGGED MIND
            </Title>
            <Mydesc>
            <h4>
          DISNEY BUNDLE TRIO BASIC
            </h4>
            <h2>Get Hulu, Disney+, and ESPN+, all with ads, for $12.99/mo.*</h2>
            <p>*Price will increase to $14.99/month on 10/12/2023.</p>
          </Mydesc>
          <Button2>
            START YOUR FREE TRIALS
          </Button2>
          </SubD>
        </Detailed>
      </Container>
    </div>
  )
}

export default RoutePage;
const SubD = styled.div`
  width: 90%;
  height: 100%;
`
const Img = styled.div`
  width: 35%;
`
const Mydesc = styled.div`
h4,p, h2{
margin: 0;
}
`
const Desc4 = styled.div`
color: white;
width: 100%;
height: 30%;
background-color: rgba(0, 0, 0, 0.40);
display: flex;
justify-content: space-between;
align-items: center;
`
const Button = styled.button`
padding: 10px 10px 10px 10px;
border-radius: 5px;

`
const Button2 = styled.button`
padding: 10px 10px 10px 10px;
border-radius: 5px;
margin-top: 40px;
`
const Desc2 = styled.p`
font-size: 19px;
color: white;
`
const Desc = styled.p`
font-size: 19px;
color: white;

`
const Title = styled.h2`
color: white;
`
const Body = styled.div`
  width: 100%;
  height: 65%;
`
const Wrap = styled.div`
   width: 90%;
  height: 100%;
  /* background-color: white; */
`
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.40);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Detailed = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TrialW = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
cursor: pointer;
  h4{
    margin-left: 40px;
  }
`
const Trial = styled.div`
  width: 100%;
  height: 15%;
  background-color: white;
  border-bottom: 4px solid whitesmoke;
  display: flex;
justify-content: center;
align-items: center;
`
const HeaderHolder = styled.div`
width: 100%;
height: 15%; 
position: absolute;
top: 2px;
left: 0px;
display: flex;
justify-content: center;
align-items: center;
`
const Cover = styled.div`
background-color: rgba(0, 0, 0, 0.25);
width: 100%;
height: 79%;
position: absolute;
`

const Image = styled.div<{Bakimg: string}>`
    width: 100%;
    height: 85%;
    background-image: url(${(pro)=> pro.Bakimg});
    background-position: center;
    background-size: cover;
  img{
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.25); */
  }
  /* position: relative; */
`
const Logo = styled.div`
width: 10%;
/* background-color: grey; */
font-size: 33px;
  color: green;
`
const Login = styled.div`
width: 20%;
/* background-color: green; */
display: flex;
justify-content: space-between;
align-items: center;
p{
  font-size: 23px;
  color: white;
  margin: 0;
}
h4{
  font-weight: 700;
  font-size: 23px;
  margin: 0;
  color: white;
}
`
const Header =  styled.div`
width: 100%;
height: 10%;
display: flex;
justify-content: space-between;
align-items: center;

`
const Container =  styled.div`
width: 100%;
height: 170vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: green; */
flex-direction: column;
`

