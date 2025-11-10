import React from 'react'
import InputSearch from './InputSearch'
const HerosectionRight = () => {

  return (
    <>
    <div className=' left-[-126px] w-[550px] h-75  '> 
      <h1 className='mb-12 font-bold text-5xl'>آکادمی{" "}
        <span className='text-[#3C8B85] text-5xl font-bold'>دکتر کد</span>
      </h1>
      <h2 className='font-bold'>با ما به دنیای جذاب کدنویسی وارد شوید و مهارت‌های لازم برای 
        ساختن نرم‌افزارهای نوآورانه را یاد بگیرید.</h2>
    <div className='mt-10'>

      <InputSearch titel={"هر انچه در اکادمی دنبالش هستید..."} color={"#9B0EE1"}/>
    </div>
    </div>
  </>)
}

export default HerosectionRight
