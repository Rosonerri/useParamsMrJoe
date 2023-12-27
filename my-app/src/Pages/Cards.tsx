import React, {useState} from 'react'
import styled from 'styled-components';
import {AiOutlineArrowRight} from "react-icons/ai";
import img from "../Pages/images/Taken.jpg"

    interface iCard{
    img?: string
    text5: string
    text4: string
}

const Cards = ({img, text5, text4}:iCard) => {

  return (
    <div>
      <Container>
        <Wrapper>
            <Image src={img} alt={""} />
            <ImageHover>
            <Save>
           <AiOutlineArrowRight/>
            </Save>
            <Images>
               
            </Images>
            </ImageHover>
        </Wrapper>
        <TextHolder>
            <H2>
                {text5}
            </H2>
            <Icon>
            <SubIcon1>
            <P>
            </P>
            </SubIcon1>
            <SubIcon2>
            <P>
            </P>
            </SubIcon2>
            </Icon>
        </TextHolder>
        <Arrow>
            <H4>
                {text4}
            </H4>
           
        </Arrow>
        <Topcard>
           
        </Topcard>
      </Container>

    </div>

  )
}

export default Cards;


const PopPic3 = styled.div`
/* background-color: purple; */
margin-right: 20px;

img{
    width: 100%;
    cursor: pointer;
    height: 100%;
}
`
const PopPic2 = styled.div`
/* background-color: white; */
img{
    width: 100%;
    cursor: pointer;
    margin-left: 9px;
    height: 100%;
}
`
const PopPic1 = styled.div`
/* background-color: orange; */
img{
    width: 100%;
    cursor: pointer;
    margin-left: 15px;
    height: 100%;
}
`
const Popdiv1 = styled.div`
width: 100%;
height: 50%;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding: 10px;
`;
const Btns = styled.div`
padding: 10px 15px;
border: 1px solid grey;
border-radius: 20px;
cursor: pointer;
`
const PopButton = styled.div`
margin-right: 30px;
font-size: 20px;
`
const Stat2 = styled.div`
   background-color: grey;
   color: white;
   cursor: pointer;
   justify-content: center;
   align-items: center;
   display: flex;
   width: 6%;
   height: 5%;
   border-radius: 4px;
   padding: 5px 20px;
   font-size: 10px;
   font-weight: 700;
   letter-spacing: 0.3em;
   position: absolute;
   bottom: 142px;
   right: 407px;
   transition: all 350ms ease;
   &:hover{
    background-color: black;
   }
`
const MainPop = styled.div``
const SubPop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 23px;
margin-left: 5px;

p, h4{
    margin: 0;
    font-size: 17px;
}
`
const SubPop1 = styled.div`
  img{
    width: 100px;
    height: 100px;
  }
`
const Popdiv = styled.div`
width: 100%;
height: 50%;
display: flex;
margin-left: 20px;
justify-content: space-between;
align-items: center;
/* background-color: pink; */
div{
    display: flex;
    img{
        border-radius: 50%;
        cursor: pointer;
    }
}
`;

const Images = styled.div`
width: 25%;
height: 23%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: black; */
/* margin-left: 10px; */
`
const Save = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
left: 140px;
top: 70px;
font-size: 20px;
font-size: 22px;
color: white;
width: 60px;
height: 60px;
border-radius: 50%;
border: 3px solid white;
background-color: transparent;
transition: all.3s ease;
p{
    font-size: 15px;
    font-weight: 700;
}

`
const ImageHover = styled.div`
  background-color: rgba(0,0,0,0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  transition: .3s ease;
  opacity: 0;
    
`
const Topcard = styled.h4`
width: 100%;
`
const H4 = styled.h4`
color: grey;
margin-right: 3px;
cursor: pointer;
`
const P = styled.p`
font-size: 16px;
margin-left: 5px;
`
const SubIcon1 = styled.div`
color: grey;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
`
const SubIcon2 = styled.div`
color: grey;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
`
const Icon = styled.div`
width: 32%;
color: grey;
font-size: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
const H2 = styled.h2`
font-size: 18px;
`
const Arrow = styled.div`
width: 100%;
cursor: pointer;
height: 20px;
background-color: white;
display: flex;
/* justify-content: space-between; */
align-items: center;
`
const TextHolder = styled.div`
width: 100%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
`
const Image = styled.img`
width: 350px;
height: 200px;
/* background-color: green; */
/* border-radius: 10px; */
`
const Wrapper = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    /* overflow: hidden; */
    &:hover {
        ${ImageHover}{
        opacity: 1;
        }
    }
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    /* flex-wrap: wrap; */
    flex-direction: column;
    position: relative;
    /* background-color: crimson; */


    /*Copied*/
    
`