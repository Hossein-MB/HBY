import React from "react";

const MainBox = () => {
  return (
    <div className="w-[430px] h-[265px] flex flex-col items-center">
      <p className="text-lg select-none">{"خوش امدید :)"}</p>
      <h3 className="text-xl font-bold mt-[4px] select-none">{"ایجاد حساب کاربری"}</h3>
      <div className="relative w-1/1">
        <input
          className="text-sm font-semibold rtl w-1/1 bg-[#4B4B4B14] select-none h-[48px] border-0 pl-[16px] pr-[40px] py-[4px] rounded-[8px] mt-[32px]"
          placeholder="شماره تلفن همراه..."
        />
        <img src="register/phone_black.png" className="h-[30px] w-[30px] absolute top-[36px] right-[5px] my-1 "/>
      </div>
      <button className="w-1/1 h-[48px] rounded-[8px] mt-[24px] bg-[#3C8B85] text-white cursor-pointer">دریافت کد تایید</button>
      <p>حساب کاربری ندارید؟<a className="underline text-blue-600 cursor-pointer mr-1 font-semibold">ورود</a></p>
    </div>
  );
};

export default MainBox;
