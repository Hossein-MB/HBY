import React from 'react'
import HeroLanding from '../../Components/LandingComponent/HeroLanding/HeroLanding'
import LandingReport from '../../Components/LandingComponent/landingReport/landingReport'

import Slider from '../../Components/LandingComponent/Slider/Slider'
import Slider2 from '../../Components/LandingComponent/ProfessorSlider/Slider2'
import Services from '../../Components/LandingComponent/Services/Services'


const Landing = () => {
  return (
    <div>
    <HeroLanding/>
    <LandingReport/>
    <Slider/>
    <Slider2/>
    <Services/>
    </div>
  )
}

export default Landing
