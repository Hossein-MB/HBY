import React from 'react'
import HeroLanding from '../../Components/LandingComponent/HeroLanding/HeroLanding'
import LandingReport from '../../Components/LandingComponent/landingReport/landingReport'

import Slider from '../../Components/LandingComponent/Slider/Slider'
import SliderPro from '../../Components/LandingComponent/ProfessorSlider/Slider'

const Landing = () => {
  return (
    <div>
    <HeroLanding/>
    <LandingReport/>
    <Slider/>
    <SliderPro />
    </div>
  )
}

export default Landing
