import React from 'react'
import InputSearch from '../LandingComponent/HeroLanding/HerosectionRight/InputSearch'
import CourseCard from '../LandingComponent/Slider/CourseCard/CourseCard'

const CardCoursesPage = () => {
   
  return (
    <>
  
        <div className='flex justify-center gap-5 mr-10 ml-10 mt-10 '>
          {/* فیلتر */}
          <div className='border-2 border-amber-600 w-[300px] h-[500px]'></div>
          {/* کل دوره ها */}
          <div className='border-2 border-amber-600 w-[916px] h-[1500px]'>
            {/* هدر دوره ها */}
            <div className='border-2 border-amber-900 w-[916px] h-[80px] flex'>
              <div className='w-[455px] h-[79px]'>
                <div className='border-2 bg-gray-300 border-gray-400 w-[210px] h-[40px] mr-4 mt-4 rounded-[7px] flex'>
                  <div className=' w-[190px] h-[22px] mt-1 mr-2'>مرتب سازی بر اساس</div>
                  <img className='w-[24px] h-[23px] mt-2 mr-10' src="/public/dore/Search 2.svg" alt="" />
                </div>
              </div>
              <div className=' w-[455px] h-[79px] gap-3 pr-90 pt-4 flex'>
                <div className='shadow-2xl shadow-neutral-500 border-2 border-neutral-200 rounded-[8px] w-[40px] h-[40px]'>
                  <img className='w-[25px] h-[25px] mt-1.5 mr-1' src="/public/dore/Text Align Justify Center.svg" alt="" />
                </div>
                <div className='rounded-[8px] bg-[#9B0EE1] justify-center flex flex-row  w-[40px] h-[40px]'>
                  <img className='w-[25px] h-[25px] mt-2' src="/public/dore/Category.svg" alt="" />
                </div>
              </div>
            </div>
            {/* دوره ها */}
            <div className='border-2  border-cyan-400 mt-7 w-[916px] h-[1336px]'>
              <div className='border-2  border-amber-300 mt-7 flex flex-row flex-wrap gap-6 items-center justify-between w-[916px] h-[1228px]'>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
              </div>
              <div className='border-2  border-blue-800 mt-20 w-[916px] h-[100px] justify-center flex flex-row '>
                <div className='border-2 border-emerald-400 w-[272px] h-[40px] flex gap-4'>
                  <div className='bg-[#9B0EE1] w-[40px] h-[40px] rounded-[8px]'></div>
                  <div className='border-2 rounded-[8px] border-fuchsia-700 h-[40px] w-[40px] justify-center flex flex-row'>1</div>
                  <div className='border-2 rounded-[8px] border-fuchsia-700 h-[40px] w-[40px] justify-center flex flex-row'>2</div>
                  <div className='border-2 rounded-[8px] border-fuchsia-700 h-[40px] w-[40px] justify-center flex flex-row'>3</div>
                  <div className='bg-[#9B0EE1] w-[40px] h-[40px] rounded-[8px]'></div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CardCoursesPage