import React from 'react'
import Hero from './Hero'
import CardProps from "./CardProps"
import Cards from '../Pages/Cards'
// import RoutePage from './RoutePage'
import Details from './Details'

const HomePages = () => {
  return (
    <div>
      <Hero/>
      {/* <Cards/> */}
      <CardProps />
      {/* <RoutePage/> */}
      <Details />
    </div>
  )
}

export default HomePages;
