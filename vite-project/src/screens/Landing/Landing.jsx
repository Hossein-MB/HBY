import React from 'react'
import HeroLanding from '../../Components/LandingComponent/HeroLanding/HeroLanding'
import LandingReport from '../../Components/LandingComponent/landingReport/landingReport'

import Slider from '../../Components/LandingComponent/Slider/Slider'
import SwiperComponent from '../../Components/LandingComponent/ProfessorSlider/swiper/SwiperComponent'

const Landing = () => {
  return (
    <div>
    <HeroLanding/>
    <LandingReport/>
    <Slider/>
    {/* <SwiperComponent/> */}
    
    </div>
  )
}

export default Landing
