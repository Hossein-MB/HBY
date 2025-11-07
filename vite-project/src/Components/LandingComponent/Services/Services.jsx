import React from "react";

const Services = () => {
    return (
        <div className="w-[1302] h-[554px] border-2 border-amber-900">
            <div className="flex flex-col justify-center items-center my-10">
                <div className="flex w-full justify-center">
                <img
                    className="transform scale-x-[-1]"
                    src="../../../../public/span-icon/vect.svg"
                    alt=""
                />
                <h4 className="mb-2">خدمات حرفه ای،کیفیت بی نظیر</h4>
                <img
                    className="transform scale-x-[-1]"
                    src="../../../../public/span-icon/vect(1).svg"
                    alt=""
                />
                </div>
                <h1 className="font-bold text-2xl">با برترین استادان جهان آشنا شو</h1>
            </div>
            <div className="w-[1248] h-[424] border-2 border-amber-900">
                <div className="w-[475] h-[400]">
                    <img src="../../../../public/services/img.svg" alt="" />
                    <h1>تجربه ای بینظیر با خدمات ما، از شروع تا پایان !</h1>
                </div>
                <div></div>
            </div>   
        </div>
    );
};

export default Services;
