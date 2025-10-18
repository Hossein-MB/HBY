import React from 'react'
import MenuComponent from "./MenuComponent"
import LoginComponent from "./LoginComponent"
import LogoComponent from "./LogoComponent"
const HeaderComponent = () => {
  return (
    <div className="flex flex-row justify-around items-center bg-red-400 text-center w-full h-14" >
    <LogoComponent/>     
    <MenuComponent/>
    <LoginComponent/>

    </div>
  )
}

export default HeaderComponent
