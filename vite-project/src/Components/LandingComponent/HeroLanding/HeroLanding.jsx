import React from 'react'
import HeroSectionLeft from './HeroSectionLeft'
import HerosectionRight from './HerosectionRight'
const HeroLanding = () => {
  return (
    <div className='flex items-center justify-center mr-36'> 
  
        <HerosectionRight/>
        <HeroSectionLeft/>
    </div>
  )
}

export default HeroLanding
