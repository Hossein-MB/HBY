// import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/footer/Footer'
import HeaderComponent from '../Components/LandingComponent/HeaderComponent/HeaderComponent'

const LayOut = () => {
  return (
    <div>
    <HeaderComponent/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default LayOut
