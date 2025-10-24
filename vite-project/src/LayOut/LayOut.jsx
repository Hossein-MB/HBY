import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/footer/Footer'
import HeaderComponent from '../Components/LandingComponent/HeaderComponent/HeaderComponent'
import HeroLanding from '../Components/LandingComponent/HeroLanding/HeroLanding'


const LayOut = () => {
  return (
    <div>
    <HeaderComponent/>
     <HeroLanding/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default LayOut
