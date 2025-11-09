import React, { useState } from "react";
import { FaUser, FaLock, FaBars } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f4f4f4] font-sans relative" dir="rtl">
      {/* آیکون منو بالا */}
      <div className="absolute top-[130px] left-[320px] text-purple-600 cursor-pointer hover:scale-110 transition border rounded-full  w-[40px] h-[40px] flex items-center justify-center">
        <FaBars size={26} />
      </div>

      {/* بدنه اصلی */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex bg-white rounded-3xl shadow-lg w-[95%] max-w-[1300px] h-[720px] overflow-hidden">
          
          {/* بخش چپ - تصویر */}
          <div className="relative w-1/2 bg-gray-50 flex flex-col items-center justify-center overflow-hidden">
            {/* لوگو */}
            <img
              src="/Capture3.png"
              alt="لوگو"
              className="absolute top-8 right-8 w-[200px] z-20"
            />

            {/* تصویر موتور */}
            <img
              src="/public/image.png"
              alt="موتور"
              className="w-[600px] mt-10 z-20"
            />

            {/* دکمه ثبت نام */}
            <button className="absolute top-[160px] right-[100px] mt-2 bg-purple-600 text-white px-8 py-2 rounded-lg hover:bg-purple-700 transition z-40">
              ثبت نام
            </button>
          </div>

          {/* بخش راست - فرم ورود */}
          <div className="w-1/2 flex flex-col justify-center items-center px-14 py-10">
            <h2 className="text-gray-700 mb-2 text-base">خوش آمدی :)</h2>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              ورود به حساب کاربری
            </h1>

            <div className="w-full max-w-[400px]">
              <label className="block text-gray-600 text-base mb-3">
                ورود با{" "}
                <span className="text-purple-600 font-medium cursor-pointer">
                  شماره همراه
                </span>
              </label>

              {/* فیلد ایمیل */}
              <div className="relative mb-5">
                <input
                  type="email"
                  placeholder="ایمیل"
                  className="w-full border border-gray-300 rounded-lg p-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-base"
                />
                <FaUser className="absolute right-3 top-4 text-gray-400" />
              </div>

               {/* فیلد رمز عبور  */}
              <div className="relative mb-5">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="رمز عبور"
                  className="w-full border border-gray-300 rounded-lg p-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-base"
                />
                <FaLock className="absolute right-3 top-4 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-4 text-gray-400"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm mb-8">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-purple-600" />
                  مرا به خاطر بسپار
                </label>
                <a href="#" className="text-purple-600 hover:underline">
                  فراموشی رمز عبور
                </a>
              </div>

              <button className="w-full bg-teal-600 text-white py-3 rounded-lg text-lg hover:bg-teal-700 transition">
                ورود به حساب
              </button>
              <p className="text-center mt-6 text-base text-gray-600">
                حساب کاربری نداری؟{" "}
                <a href="#" className="text-purple-600 font-semibold hover:underline">
                  ثبت نام
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

        <div className="w-[80px] h-[200] absolute top-[330px] left-[320px]">

          <img src="../../../public/Capture2.png" />
        
        </div>
    </div>
  );
};