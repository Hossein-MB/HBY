import React from "react";
import CardNews from "./CardNews/CardNews";

const News = () => {
    return (
        <div className="  w-full h-[800px] mt-20">
            <div className="  w-full h-[528px]">
                    <div className="flex flex-col justify-center items-center my-10">
                    <div className="flex w-full justify-center">
                    <img
                        className="transform scale-x-[-1]"
                        src="../../../../public/span-icon/vect.svg"
                        alt=""
                    />
                    <h4 className="mb-2">با هر خبر، از همه جلوتر</h4>
                    <img
                        className="transform scale-x-[-1]"
                        src="../../../../public/span-icon/vect(1).svg"
                        alt=""
                    />
                    </div>
                    <h1 className="font-bold text-2xl">خبر های داغ دریچه ای به دنیای تازه ها </h1>
                    </div>
                <div className="  gap-[40px]  w-full h-full flex  items-center justify-center">
                    <CardNews/>
                    <CardNews/>
                    <CardNews/>
                </div>
            </div>
        <div  className="h-[40px] w-[120px] border-2 border-fuchsia-700 rounded-2xl flex flex-col justify-center items-center text-fuchsia-700 mr-278 mt-50">بیشتر ببین </div>
        </div>
    );
};

export default News;
