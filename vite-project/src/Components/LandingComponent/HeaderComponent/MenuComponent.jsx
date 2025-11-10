// import React from 'react'

import { useNavigate } from "react-router-dom";

// import "tailwindcss";
const MenuComponent = () => {
   const navigate = useNavigate();
  
    const handleLoginClick = () => {
      navigate("/cource");
    };
  return (
    <div className='md:flex text-1x1 md:w-1247.84px h-40px md:justify-center  gap-4 hidden'>
      <div className="text-fuchsia-900">خانه</div>
      <div className="cursor-pointer" onClick={handleLoginClick}>دوره ها</div>
      <div>اخبار و مقالات</div>
      <div>اساتید</div>
      <div>ارتباط با ما</div>
    </div>
  )
}

export default MenuComponent
