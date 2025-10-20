import React from "react";

const MainBox = () => {
  return (
    <div className="w-[430px] h-[265px] flex flex-col items-center">
      <p className="text-lg">{"خوش امدید :)"}</p>
      <h3 className='text-xl font-bold mt-[4px]'>{"ایجاد حساب کاربری"}</h3>
      <input className="rtl" placeholder="شماره تلفن همراه..."/>
    </div>
  );
};

export default MainBox;
