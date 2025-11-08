import React from "react";
import SwiperComponent from "../ProfessorSlider/swiper/SwiperComponent";
import CourseCard from "../ProfessorSlider/CourseCard/CourseCard";

import prof1 from "../../../assets/profesore/img.png";
import prof2 from "../../../assets/profesore/Rectangle-1.png";
import prof3 from "../../../assets/profesore/Rectangle-2.png";
import prof4 from "../../../assets/profesore/Rectangle-3.png";
import prof5 from "../../../assets/profesore/img.png";

const teachers = [
  { name: "استاد بحر", role: "مدرس اصلی", img: prof1 },
  { name: "استاد بحر", role: "استاد دوره", img: prof2 },
  { name: " استاد بحر ", role: "استاد اصلی ", img: prof3 },
  { name: "استاد بحر", role: "مدرس اصلی", img: prof4 },
  { name: "استاد بحر", role: "مدرس اصلی", img: prof5 },
];
export default function Slider2() {
  const slides = teachers.map((t, i) => (
    <CourseCard key={i} name={t.name} role={t.role} img={t.img} />
  ));

  return (
    <div className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
                    <div className="flex flex-col justify-center items-center my-10">
                <div className="flex w-full justify-center">
                <img
                    className="transform scale-x-[-1]"
                    src="../../../../public/span-icon/vect.svg"
                    alt=""
                />
                <h4 className="mb-2">با هر استاد ،یک موفقیت</h4>
                <img
                    className="transform scale-x-[-1]"
                    src="../../../../public/span-icon/vect(1).svg"
                    alt=""
                />
                </div>
                <h1 className="font-bold text-2xl">با برترین استادان جهان آشنا شو</h1>
            </div>
        <SwiperComponent slides={slides} slideWidth={340} />
      </div>
    </div>
  );
}
