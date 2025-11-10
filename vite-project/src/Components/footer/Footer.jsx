import React from 'react'
import SearchFooter from '../common/SearchFooter'


const Footer = () => {
  return (
    <div className=' w-full h-[410px] top-[3631px]'>
  
      <div className="w-[230px] h-[130px] -z-50 relative top-0 left-0 ">
       <img src="../../../public/footer/Group(1).svg"  />
      </div>
      <div className=" bg-[#9B0EE1] w-full  h-[335px]">
       <div className='flex justify-between mb-10 mx-20 py-10 '>
        <div className='w-[20%] h-[38px] text-white font-bold gap-3 flex flex-col'>
          <p className='  mb-5'>ارتباط با ما</p>
          <span>09112222222</span>
          <span>bahar@gmail.com</span>
          <span>آدرس : مازندران ساری زیبا</span>

        </div>
        <div className='w-[30%] h-[38px] gap-3 flex items-center flex-col'>
      <img  className="w-42 flex justify-center" src="../../../../public/logo/Logofoter.png" alt="" />
      <p className='text-white font-bold my-5'>همین حالا اقدام کن و به ما ملحق شو</p>
       <SearchFooter/>
    </div>
    <div className='w-[20%] h-[38px] gap-3  text-white font-bold flex items-center flex-col'>
      <h2 className='mb-3'>لینک ها</h2>
      <p>دوره ها</p>
      <p>  اساتید برتر</p>
      <p> دانشجویان برتر</p>
      <p>خبر های داغ</p>
    </div>
    </div>
      </div>
    </div>
      
  
  )
}

export default Footer
