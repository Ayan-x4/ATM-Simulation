import React from "react";
import { useEffect, useState } from "react";

const Intro = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [pin,setPin] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);

    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 4000);

    const Set2 = setTimeout(() => {
      setShow2(true);
    }, 1000);
    const SetHide = setTimeout(() => {
      setShow2(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      clearTimeout(Set2);
    };
  }, []);

  return (
    <div className="mt-10 absolute translate-x-1/2  right-1/2 overflow-hidden">
      <div
        className={` h-[400px] w-[600px]   text-right
      ${show ? "bg-orange-200" : " bg-white"} relative`}
      >
        <div className="bg-black h-[80px] relative  ">
          <img
            src="https://wp.logos-download.com/wp-content/uploads/2016/06/Bank_of_Baroda_logo.png?dl"
            className="h-full  object-contain absolute leftt-0 p-2 "
          ></img>
          <div className=" z-0 absolute  mt-28">
            <img
              src="https://www.pngkey.com/png/full/3-35277_sun-rays-black-sun-rays-png.png"
              className={`h-full object-contain overflow-hidden  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}   `}
            ></img>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[20%] z-4 text-5xl font-medium text-orange-500 gap-3 ">
          <h1
            className={`transition-all duration-700 ease-in-out 
            ${show ? "opacity-100 translate-x-1" : "opacity-0 translate-y-5"} `}
          >
            👉WELCOME TO
          </h1>
          <div className="flex items-center justify-center">
            <span
              className={`transition-all duration-700 ease-in-out 
            ${show2 ? "opacity-100 translate-x-[-100]" : "opacity-0 translate-y-5"} text-center`}
            >
              ATM👈
            </span>
          </div>
        </div>
        <div className="absolute  translate-x-1/2  right-1/2 top-25  ">
        {(!show2 && !show) ?
        ( <h1 className="text-3xl text-nowrap font-medium text-orange-500 transition-all duration-700 ease-in-out ">
          What would you like to do?
          </h1> ): null }
        </div>
        <div className="bg-orange-500 w-[200px] text-nowrap  text-center rounded-r-4xl absolute   left-0 top-45 active:bg-orange-800 transition-smooth hover:scale-120 duration-200 hover:bg-black"> 
        {(!show2 && !show) ? 
         (<button className="p-4 text-2xl text-white cursor-pointer ">
            PIN Change 
          </button>):null}
        </div>
        <div className="bg-orange-500 w-[200px] text-nowrap  text-center rounded-l-4xl absolute   right-0 top-45 active:bg-yellow-400 transition-smooth transition-smooth hover:scale-120 duration-200 hover:bg-black ">
        {(!show2 && !show) ? 
          <button className="p-4 text-2xl text-white cursor-pointer ">
            Withdrawal
          </button>:null}
        </div>
        <div className="bg-orange-500 w-[200px] text-nowrap  text-center rounded-l-4xl absolute   right-0 top-70 active:bg-red-500 transition-smooth transition-smooth hover:scale-120 duration-200 hover:bg-black  ">
        {(!show2 && !show) ? 
          <button className="p-4 text-2xl text-white cursor-pointer ">
            Balance Enquiry
          </button>:null}
        </div>
        <div className="bg-orange-500 w-[200px] text-nowrap  text-center rounded-r-4xl absolute   left-0 top-70 active:bg-green-500 transition-smooth transition-smooth hover:scale-120 duration-200 hover:bg-black">
        {(!show2 && !show) ? 
         (<button className="p-4 text-2xl text-white cursor-pointer ">
            Deposite
          </button>):null}
        </div>
      </div>
    </div>
  );
};

export default Intro;
