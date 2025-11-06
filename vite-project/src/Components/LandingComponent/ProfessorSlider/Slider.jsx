import React from 'react'
import SwiperComponent from './swiper/SwiperComponent'
import CourseCard from '../Slider/CourseCard/CourseCard';

const SliderPro = () => {
  const slides = [
   <CourseCard
      key={1}
      title="ری اکت"
      instructor="استاد "
      students={20}
      startsAt="۱۴۰۴/۰۲/۱۴"
      price="۲,۵۰۰,۰۰۰ تومان"
      rating={4}
      bgImage="/slider/Img.svg"
    />,
    <CourseCard
      key={2}
      title="Node.js"
      instructor="استاد ساداتی"
      students={35}
      startsAt="۱۴۰۴/۰۴/۱۰"
      price="۳,۸۰۰,۰۰۰ تومان"
      rating={7}
      bgImage="/slider/cover.svg"
    />,
    <CourseCard
      key={3}
      title="HTML CSS"
      instructor="استاد بحر"
      students={20}
      startsAt="۱۴۰۴/۰۲/۱۴"
      price="۲,۵۰۰,۰۰۰ تومان"
      rating={4}
      bgImage="/slider/Img.svg"
    />,
    <CourseCard
      key={4}
      title="HTML CSS"
      instructor="استاد بحر"
      students={20}
      startsAt="۱۴۰۴/۰۲/۱۴"
      price="۲,۵۰۰,۰۰۰ تومان"
      rating={4}
      bgImage="/slider/Img.svg"
    />,
    <CourseCard
      key={5}
      title="React js"
      instructor="استاد ساداتی"
      students={20}
      startsAt="۱۴۰۴/۰۲/۱۴"
      price="۲,۵۰۰,۰۰۰ تومان"
      rating={5}
      bgImage="/slider/Img.svg"
    />,
  ];
  return (
    <div>
      <SwiperComponent slides={slides}  />
    </div>
  )
}

export default SliderPro
