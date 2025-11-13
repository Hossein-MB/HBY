// import React, { useEffect, useState } from 'react'
import MenuComponent from "./MenuComponent"
import LoginComponent from "./LoginComponent"
import LogoComponent from "./LogoComponent"
import DarcModeComponent from './DarcModeComponent'
// import {
//   Bars3Icon,
//   BellIcon,
//   XMarkIcon,
//   MoonIcon,
//   SunIcon,
// } from "@heroicons/react/24/outline";

const HeaderComponent = () => {
  // const [darkMode, setDarkMode] = useState(false);
  
  //   useEffect(() => {
  //     if (darkMode) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }, [darkMode]);
  return (
    <div className="flex flex-row justify-around items-center  text-center mt-[25px] w-full h-[24px]" >
    <LogoComponent/>     
    <MenuComponent/>
      {/* <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="rounded-full p-2 text-gray-500 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  {darkMode ? (
                    <SunIcon className="size-5" />
                  ) : (
                    <MoonIcon className="size-5" />
                  )}
                </button> */}
                <DarcModeComponent/>
    <LoginComponent/>

    </div>
  )
}

export default HeaderComponent
