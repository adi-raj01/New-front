import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'



function Shop() {
  return (
    <div>
      <Hero/>
      <br/><br/><br/><br/><br/>
    
      <Popular/>
    <br/><br/><br/><br/><br/><br/><br/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    

    </div>
  )
}

export default Shop