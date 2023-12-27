import React from 'react'
import styled from 'styled-components';
import {FaAngleRight} from "react-icons/fa"
import img2 from "../img2/Hulu2.jpg"
import Data from "../Pages/Data.json"
import Cards from './Cards';
import { Link } from 'react-router-dom';

const CardOne = () => {
   
  return (
    <div>
        <Container>
        <Wrapper>
    <Card>
        <p>BLUCKBUSTER MOVIES</p>
    </Card>
    <Card1>
        {Data.map((props) =>(
        <Link to={`/detail/${props.id}`}>
            <Cards key={props.id} img={props.img} text5 ={props.text5} text4={props.text4}/>
        </Link>
        ))}
       
       
         <Circle>
        <FaAngleRight />   
        </Circle>
       </Card1>
        </Wrapper>
        </Container>
    </div>
  )
}

export default CardOne;
const Wrapy = styled(Link)`
    
`
const Circle = styled.div`

display: flex;
justify-content: center;
align-items: center;
background-color: white;
font-size: 20px;
color: grey;
position: absolute;
width: 60px;
left: 1520px;
top: 1050px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
height: 60px;
cursor: pointer;
border-radius: 50%;
border: 3px solid white;
background-color: white;
`
const Div4 = styled.div`
height: 100%;
width: 24%;
/* background-color: green; */
display: flex;
justify-content: center;
align-items: center;
/* box-shadow: 0px 0px 9px 4px grey; */
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; 


`
const Div3 = styled.div`
height: 100%;
width: 24%;
/* background-color: green; */
display: flex;
justify-content: center;
align-items: center;
transition: all.3s ease;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; 
/* &:hover{
box-shadow: 0px 0px 9px 4px grey;
transform: scale(1.09);
} */
`
const Div = styled.div`
height: 60%;
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
/* background-color: green; */
`
const Div2 = styled.div`
height: 100%;
width: 24%;
/* background-color: grey; */
display: flex;
justify-content: center;
align-items: center;
/* box-shadow: 0px 0px 9px 4px grey; */
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
const Card = styled.div`
width: 100%;
height: 25%;
/* background-color: crimson; */
display: flex;
p{
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    color: black;
}
justify-content: flex-start;
align-items: center;
`
const Card1 = styled.div`
width: 100%;
min-height: 75%;
/* background-color: black; */
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`
const Wrapper = styled.div`
width: 85%;
display: flex;
/* height: 500px; */
height: 60%;
flex-direction: column;
/* background-color: green; */
justify-content: center;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 1050px;
/* background-color: grey; */
display: flex;
justify-content: center;
align-items: center;
`
