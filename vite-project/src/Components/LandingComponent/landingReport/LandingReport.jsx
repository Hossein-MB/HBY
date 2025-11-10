import React from 'react'

const LandingReport = () => {
  return (
    <div className='w-full h-[74px]  mr-36 gap-[152px] mt-[2px] left[227px]  flex items-center justify-center'>
      <div className='w-[134px] h-[72px] gap-[6px]  flex '>
        <img src="../../../../public/report/icon.svg" alt="" />
        <div>
          <h1 className='text-[17px] font-bold'>259</h1>
          <h1 className='text-[12px]'>دانشجو{" "}
          <span className='text-[#06B03C66] text-[12px]'>زرنگ </span>
          </h1>
        </div>
      </div>
      <div className='w-[114px] h-[72px] gap-[6px]  flex '>
             <img src="../../../../public/report/icon1 1.svg"  />
        <div>
          <h1 className='text-[17px] font-bold'>15</h1>
          <h1 className='text-[12px]'>اخبار{" "}
          <span className='text-[#0E1CE166] text-[12px]'>جدید </span>
          </h1>
        </div>
      </div>
      <div className='w-[134px] h-[72px] gap-[11px]  flex '>
             <img src="../../../../public/report/icon(2).svg" alt="" />
        <div>
          <h1 className='text-[17px] font-bold'>97</h1>
          <h1 className='text-[12px]'>اساتید{" "}
          <span className='text-[#90909066] text-[12px]'>حرفه ای </span>
          </h1>
        </div>
      </div>
      <div className='w-[134px] h-[72px] gap-[6px]  flex '>
         <img src="../../../../public/report/icon(1).svg" alt="" />
        <div>
          <h1 className='text-[17px] font-bold'>155</h1>
          <h1 className='text-[12px]'>دوره های {" "}
          <span className='text-[#962a96] text-[12px]'>خفن</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default LandingReport

