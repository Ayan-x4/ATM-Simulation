import React from "react";
import { useEffect, useState } from "react";

const Intro = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [Visible, setVisible] = useState(false);
  const [Visible1, setVisible1] = useState(false);
  const [Visible2, setVisible2] = useState(false);
  const [Visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  const [amount, setAmount] = useState(500);
  const [deposite, setDeposite] = useState(false);
  const [deposite2, setDeposite2] = useState(false);
  const [widthrawl, setWidthrawl] = useState(false);
  const [widthrawl1, setWidthrawl1] = useState(false);
  const [balance, setBalance] = useState(false);
  const [balance1, setBalance1] = useState(500);
  const [val, setVal] = useState([]);
  const [set, setPin] = useState("2020");

  const addOne = (num) => {
    setVal((prev) => (prev.length < 4 ? prev + num : prev));
  };
  const addOne2 = (num) => {
    setVal((prev) => (prev.length < 100000 ? prev + num : prev));
  };

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
    <div className="mt-3 absolute translate-x-1/2  right-1/2 overflow-hidden    ">
      <img
        src="https://png.pngtree.com/png-vector/20241108/ourmid/pngtree-close-up-camera-lens-with-purple-and-blue-reflections-png-image_14306980.png"
        className="h-[30px] relative translate-x-[280px] "
      ></img>
      <div
        className={` h-[400px] w-[600px] overflow-hidden border-6  border-gray-500 text-right 
      ${show ? "bg-black" : " bg-white "} relative`}
      >
        <div className="bg-black h-[80px] relative  ">
          <img
            src="https://wp.logos-download.com/wp-content/uploads/2016/06/Bank_of_Baroda_logo.png?dl"
            className="h-full  object-contain absolute leftt-0 p-2 "
          ></img>
          <div className=" z-0 absolute  mt-28  ">
            <img
              src="src\assets\Gemini_Generated_Image_h8e4vvh8e4vvh8e4 copy.jpg"
              className={`h-full object-contain overflow-hidden transition-all duration-900 ease-in  [mask-image:radial-gradient(circle,black_10%,transparent_100%)]  ${show ? "opacity-80 translate-y-0" : "opacity-0 translate-y-5"}   `}
            ></img>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[20%] z-4 text-5xl font-medium text-orange-500 gap-3 ">
          <h1
            className={`transition-all duration-700 ease-out  text-nowrap text-transparent [-webkit-text-stroke:.5px_white]
            ${show ? "opacity-100 [text-shadow:0_0_30px_white] translate-x-1" : "opacity-0 translate-y-5"} `}
          >
            👉WELCOME TO ATM👈
          </h1>
          <div className="flex items-center justify-center">
            <span
              className={`transition-all duration-700 ease-in-out 
            ${show2 ? "opacity-100 translate-x-[-100]" : "opacity-0 translate-y-5"} text-center`}
            ></span>
          </div>
        </div>
        {isVisible && (
          <div className="absolute  translate-x-1/2  right-1/2 top-25  ">
            {!show2 && !show ? (
              <h1 className="text-3xl text-nowrap font-medium text-orange-500 transition-all duration-700 ease-in-out ">
                What would you like to do?
              </h1>
            ) : null}
          </div>
        )}
        {isVisible && (
          <div
            className={`bg-orange-500 w-[230px] text-nowrap text-center rounded-r-4xl absolute   left-0 top-45 active:bg-orange-800 transition-smooth hover:scale-120 duration-200 hover:bg-black `}
          >
            {!show2 && !show ? (
              <button
                onClick={() => {
                  setIsVisible(false);
                  setVisible(true);
                }}
                className={`p-4 text-2xl text-white cursor-pointer`}
              >
                PIN Change
              </button>
            ) : null}
          </div>
        )}
        {Visible && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-25  ">
              <h1 className="text-3xl text-nowrap font-medium text-orange-500 transition-all duration-700 ease-in-out text-center ">
                Change PIN
              </h1>
              <input
                type="text"
                placeholder="Enter your old pin"
                value={val}
                className="text-center   text-3xl  mt-[25%] w-[250px] h-[100px] border-none outline-none focus:outline-none"
              ></input>
            </div>
          </div>
        )}
        {visible4 && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-25  ">
              <h1 className="text-3xl text-nowrap font-medium text-orange-500 transition-all duration-700 ease-in-out text-center ">
                Set new PIN
              </h1>
              <input
                type="password"
                placeholder="New PIN"
                value={val}
                className="text-center   text-3xl  mt-[25%] w-[250px] h-[100px] border-none outline-none focus:outline-none"
              ></input>
            </div>
          </div>
        )}

        {isVisible && (
          <div className="bg-orange-500 w-[230px] text-nowrap  text-center rounded-l-4xl absolute   right-0 top-45 active:bg-yellow-400 transition-smooth transition-smooth hover:scale-120 duration-200 hover:bg-black ">
            {!show2 && !show ? (
              <button
                onClick={() => {
                  setIsVisible(false);
                  setVisible1(true);
                }}
                className="p-4 text-2xl text-white cursor-pointer "
              >
                Withdrawal
              </button>
            ) : null}
          </div>
        )}
        {Visible1 && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-25  ">
              <h1 className="text-3xl text-nowrap font-medium text-orange-500 transition-all duration-700 ease-in-out text-center ">
                Enter Your PIN
              </h1>
              <input
                type="text"
                placeholder=" "
                value={val}
                className="text-center   text-3xl  mt-[25%] w-[250px] h-[100px] border-none outline-none focus:outline-none"
              ></input>
            </div>
          </div>
        )}
        {visible5 && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-25  flex items-center justify-center flex-wrap ">
              <h1 className="text-3xl text-nowrap font-medium text-orange-500 transition-all duration-700 ease-in-out text-center ">
                Amount Must Be Multiple of 500
              </h1>
              <input
                type="number"
                placeholder="Enter Amount"
                value={val}
                className="text-center   text-3xl  mt-[15%] flex items-center w-[250px] h-[100px] border-none outline-none focus:outline-none"
              ></input>
            </div>
          </div>
        )}
        {widthrawl && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-25  flex items-center justify-center flex-wrap   ">
              <img
                src="https://media.tenor.com/CpeMRxkYB7IAAAAi/check-mark-check.gif"
                className="h-[200px]"
              ></img>
              <h1 className="absolute  translate-x-[50%] right-[50%] translate-y-[300%] text-4xl font-medium ">
                ₹{amount}
              </h1>
              <h1 className="absolute  translate-x-[50%] right-[50%] translate-y-[450%] text-3xl font-bold text-green-600">
                WITHDRAWAL
              </h1>
            </div>
          </div>
        )}

        {widthrawl1 && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-30  flex items-center justify-center flex-wrap   ">
              <video
                src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/rupee-loader-animation-gif-download-14312142.mp4"
                loop
                autoPlay
                className="h-[200px]"
              ></video>
              <span>Withdrawal Process....</span>
            </div>
          </div>
        )}

        {isVisible && (
          <div className="bg-orange-500 w-[230px] text-nowrap  text-center rounded-l-4xl absolute   right-0 top-70 active:bg-red-500 transition-smooth transition-smooth hover:scale-120 duration-200 hover:bg-black  ">
            {!show2 && !show ? (
              <button
                onClick={() => {
                  setIsVisible(false);
                  setVisible2(true);
                }}
                className="p-4 text-2xl text-white cursor-pointer "
              >
                Balance Enquiry
              </button>
            ) : null}
          </div>
        )}
        {Visible2 && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-25  ">
              <h1 className="text-3xl text-nowrap font-medium text-orange-500 transition-all duration-700 ease-in-out text-center ">
                Enter Your PIN
              </h1>
              <input
                type="text"
                placeholder=" "
                value={val}
                className="text-center   text-3xl  mt-[25%] w-[250px] h-[100px] border-none outline-none focus:outline-none"
              ></input>
            </div>
          </div>
        )}
        {balance && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-25  flex items-center justify-center flex-wrap ">
              <h1 className="text-3xl text-nowrap font-medium text-orange-500 transition-all duration-700 ease-in-out text-center ">
                Your bank balance is
              </h1>
              <h1 className="absolute  translate-x-[50%] right-[50%] translate-y-[300%] text-4xl font-medium ">
                ₹{balance1}
              </h1>
            </div>
          </div>
        )}
        {isVisible && (
          <div className="bg-orange-500 w-[230px] text-nowrap  text-center rounded-r-4xl absolute   left-0 top-70 active:bg-green-500 transition-smooth transition-smooth hover:scale-120 duration-200 hover:bg-black">
            {!show2 && !show ? (
              <button
                onClick={() => {
                  setIsVisible(false);
                  setVisible3(true);
                }}
                className="p-4 text-2xl text-white cursor-pointer "
              >
                Deposite
              </button>
            ) : null}
          </div>
        )}

        {deposite && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-25  flex items-center justify-center flex-wrap   ">
              <video
                src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/secure-bank-loader-animation-gif-download-14312144.mp4"
                loop
                autoPlay
                className="h-[200px]"
              ></video>
              <h1 className="absolute  translate-x-[50%] right-[50%] translate-y-[300%] text-4xl font-medium ">
                ₹{amount}
              </h1>
              <h1 className="absolute  translate-x-[50%] right-[50%] translate-y-[450%] text-3xl font-bold text-green-600">
                DEPOSITE
              </h1>
            </div>
          </div>
        )}
        {deposite2 && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-30  flex items-center justify-center flex-wrap   ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20170503175831"
                className="h-[200px]"
              ></img>
              <span>Deposite Process....</span>
            </div>
          </div>
        )}

        {Visible3 && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-25  ">
              <h1 className="text-3xl text-nowrap font-medium text-orange-500 transition-all duration-700 ease-in-out text-center ">
                Enter Your PIN
              </h1>
              <input
                type="text"
                placeholder=" "
                value={val}
                className="text-center   text-3xl  mt-[25%] w-[250px] h-[100px] border-none outline-none focus:outline-none"
              ></input>
            </div>
          </div>
        )}

        {visible7 && (
          <div>
            <div className="absolute  translate-x-1/2  right-1/2 top-25  flex items-center justify-center flex-wrap ">
              <h1 className="text-3xl text-nowrap font-medium text-orange-500 transition-all duration-700 ease-in-out text-center ">
                Amount Must Be Mul Of 500
              </h1>
              <input
                type="text"
                placeholder="Type Amount...."
                value={val}
                className="text-center   text-3xl  mt-[15%] flex items-center  w-[250px] h-[100px] border-none outline-none focus:outline-none"
              ></input>
            </div>
          </div>
        )}
      </div>
      {Visible && (
        <div className=" mt-2 p-2 grid grid-cols-6 grid-rows-3 gap-4 place-items-center text-amber-50 ">
          <div class="bg-red-400/50 active:bg-red-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("1");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              1
            </button>
          </div>
          <div class="bg-red-400/50 active:bg-red-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("2");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              2
            </button>
          </div>
          <div class="bg-red-400/50 active:bg-red-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("3");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              3
            </button>
          </div>
          <div class="bg-red-400/50 active:bg-red-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("4");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              4
            </button>
          </div>
          <div class="bg-red-400/50 active:bg-red-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("5");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              5
            </button>
          </div>
          <div class="bg-red-400/50 active:bg-red-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("6");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              6
            </button>
          </div>
          <div class="bg-red-400/50 active:bg-red-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("7");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              7
            </button>
          </div>
          <div class="bg-red-400/50 active:bg-red-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("8");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              8
            </button>
          </div>
          <div class="bg-red-400/50 active:bg-red-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("9");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              9
            </button>
          </div>
          <div class="bg-red-400/50 active:bg-red-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("0");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              0
            </button>
          </div>
          <div class="bg-green-600 active:bg-green-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl ">
            <button
              onClick={() => {
                if (val == set) {
                  setVisible(false);
                  setIsVisible(false);
                  setVisible4(true);
                  setVal("");
                } else {
                  setTimeout(() => {
                    setVal("");
                  }, 1000);
                  setVal("Wrong PIN");
                }
              }}
              className="h-full w-full text-center cursor-pointer  cursor-pointer"
            >
              Enter
            </button>
          </div>
          <div class="bg-red-600 active:bg-red-400  h-[50px] w-[100px] flex justify-center items-center rounded-2xl">
            <button
              onClick={() => {
                setVisible(false);
                setIsVisible(true);
                setVal("");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {Visible1 && (
        <div className=" mt-2 p-2 grid grid-cols-6 grid-rows-3 gap-4 place-items-center text-amber-50 ">
          <div
            class="bg-purple-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl  active:bg-yellow-300 active:text-black  "
          >
            <button
              onClick={() => {
                addOne("1");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              1
            </button>
          </div>
          <div
            class="bg-purple-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl  active:bg-yellow-300 active:text-black "
          >
            <button
              onClick={() => {
                addOne("2");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              2
            </button>
          </div>
          <div
            class="bg-purple-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl  active:bg-yellow-300 active:text-black "
          >
            <button
              onClick={() => {
                addOne("3");
              }}
              className="h-full w-full text-center   cursor-pointer"
            >
              3
            </button>
          </div>
          <div
            class="bg-purple-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl  active:bg-yellow-300 active:text-black "
          >
            <button
              onClick={() => {
                addOne("4");
              }}
              className="h-full w-full text-center  cursor-pointer"
            >
              4
            </button>
          </div>
          <div
            class="bg-purple-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl  active:bg-yellow-300 active:text-black "
          >
            <button
              onClick={() => {
                addOne("5");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              5
            </button>
          </div>
          <div
            class="bg-purple-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl  active:bg-yellow-300 active:text-black "
          >
            <button
              onClick={() => {
                addOne("6");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              6
            </button>
          </div>
          <div
            class="bg-purple-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl  active:bg-yellow-300 active:text-black "
          >
            <button
              onClick={() => {
                addOne("7");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              7
            </button>
          </div>
          <div
            class="bg-purple-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl  active:bg-yellow-300 active:text-black "
          >
            <button
              onClick={() => {
                addOne("8");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              8
            </button>
          </div>
          <div
            class="bg-purple-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl  active:bg-yellow-300 active:text-black"
          >
            <button
              onClick={() => {
                addOne("9");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              9
            </button>
          </div>
          <div
            class="bg-purple-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
  transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl  active:bg-yellow-300 active:text-black "
          >
            <button
              onClick={() => {
                addOne("0");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              0
            </button>
          </div>
          <div class="bg-green-600 active:bg-green-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl">
            <button
              onClick={() => {
                if (val == set) {
                  setVisible(false);
                  setIsVisible(false);
                  setVisible5(true);
                  setVisible1(false);
                  setVal("");
                } else {
                  setTimeout(() => {
                    setVal("");
                  }, 1000);
                  setVal("Wrong PIN");
                }
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              Enter
            </button>
          </div>
          <div class="bg-red-600 active:bg-red-400  h-[50px] w-[100px] flex justify-center items-center rounded-2xl">
            <button
              onClick={() => {
                setVisible1(false);
                setIsVisible(true);
                setVal("");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {Visible2 && (
        <div className=" mt-2 p-2 grid grid-cols-6 grid-rows-3 gap-4 place-items-center text-amber-50 ">
          <div class="bg-blue-500/40 active:bg-blue-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("1");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              1
            </button>
          </div>
          <div class="bg-blue-500/40 active:bg-blue-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("2");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              2
            </button>
          </div>
          <div class="bg-blue-500/40 active:bg-blue-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("3");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              3
            </button>
          </div>
          <div class="bg-blue-500/40 active:bg-blue-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("4");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              4
            </button>
          </div>
          <div class="bg-blue-500/40 active:bg-blue-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("5");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              5
            </button>
          </div>
          <div class="bg-blue-500/40 active:bg-blue-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("6");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              6
            </button>
          </div>
          <div class="bg-blue-500/40 active:bg-blue-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("7");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              7
            </button>
          </div>
          <div class="bg-blue-500/40 active:bg-blue-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("8");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              8
            </button>
          </div>
          <div class="bg-blue-500/40 active:bg-blue-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("9");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              9
            </button>
          </div>
          <div class="bg-blue-500/40 active:bg-blue-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("0");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              0
            </button>
          </div>
          <div class="bg-green-600 active:bg-green-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl">
            <button
              onClick={() => {
                if (val == set) {
                  setBalance(true);
                  setVisible2(false);
                  setVisible9(true);
                } else {
                  setTimeout(() => {
                    setVal("");
                  }, 1000);
                  setVal("Wrong PIN");
                }
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              Enter
            </button>
          </div>
          <div class="bg-red-600 active:bg-red-400  h-[50px] w-[100px] flex justify-center items-center rounded-2xl">
            <button
              onClick={() => {
                setVisible2(false);
                setIsVisible(true);
                setVal("")
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {Visible3 && (
        <div className=" mt-2 p-2 grid grid-cols-6 grid-rows-3 gap-4 place-items-center text-amber-50 ">
          <div class="bg-green-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("1");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              1
            </button>
          </div>
          <div class="bg-green-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white ">
            <button
              onClick={() => {
                addOne("2");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              2
            </button>
          </div>
          <div class="bg-green-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("3");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              3
            </button>
          </div>
          <div class="bg-green-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("4");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              4
            </button>
          </div>
          <div class="bg-green-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("5");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              5
            </button>
          </div>
          <div class="bg-green-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("6");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              6
            </button>
          </div>
          <div class="bg-green-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("7");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              7
            </button>
          </div>
          <div class="bg-green-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("8");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              8
            </button>
          </div>
          <div class="bg-green-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("9");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              9
            </button>
          </div>
          <div class="bg-green-400/40 active:bg-green-600 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl   active:text-white">
            <button
              onClick={() => {
                addOne("0");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              0
            </button>
          </div>
          <div class="bg-green-600 active:bg-green-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl">
            <button
              onClick={() => {
                if (val == set) {
                  setVisible(false);
                  setIsVisible(false);
                  setVisible7(true);
                  setVal("");
                  setVisible3(false);
                } else {
                  setTimeout(() => {
                    setVal("");
                  }, 1000);
                  setVal("Wrong PIN");
                }
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              Enter
            </button>
          </div>
          <div class="bg-red-600 active:bg-red-400  h-[50px] w-[100px] flex justify-center items-center rounded-2xl">
            <button
              onClick={() => {
                setVisible3(false);
                setIsVisible(true);
                setVal("");
              }}
              className="h-full w-full text-center cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {visible4 && (
        <div className=" mt-2 p-2 grid grid-cols-6 grid-rows-3 gap-4 place-items-center text-amber-50 ">
          <div class="bg-red-500/80 active:bg-red-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne("1");
              }}
              className="h-full w-full text-center"
            >
              1
            </button>
          </div>
          <div class="bg-red-500/80 active:bg-red-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne("2");
              }}
              className="h-full w-full text-center"
            >
              2
            </button>
          </div>
          <div class="bg-red-500/80 active:bg-red-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne("3");
              }}
              className="h-full w-full text-center"
            >
              3
            </button>
          </div>
          <div class="bg-red-500/80 active:bg-red-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne("4");
              }}
              className="h-full w-full text-center"
            >
              4
            </button>
          </div>
          <div class="bg-red-500/80 active:bg-red-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne("5");
              }}
              className="h-full w-full text-center"
            >
              5
            </button>
          </div>
          <div class="bg-red-500/80 active:bg-red-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne("6");
              }}
              className="h-full w-full text-center"
            >
              6
            </button>
          </div>
          <div class="bg-red-500/80 active:bg-red-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne("7");
              }}
              className="h-full w-full text-center"
            >
              7
            </button>
          </div>
          <div class="bg-red-500/80 active:bg-red-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne("8");
              }}
              className="h-full w-full text-center"
            >
              8
            </button>
          </div>
          <div class="bg-red-500/80 active:bg-red-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne("9");
              }}
              className="h-full w-full text-center"
            >
              9
            </button>
          </div>
          <div class="bg-red-500/80 active:bg-red-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne("0");
              }}
              className="h-full w-full text-center"
            >
              0
            </button>
          </div>
          <div class="bg-green-600 active:bg-green-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl  shadow-[0_4px_0_rgb(30_64_175)] ">
            <button
              onClick={() => {
                setVisible3(false);
                setIsVisible(true);
                setVisible4(false);
                setPin(val);
                setVal("");
              }}
              className="h-full w-full text-center"
            >
              Enter
            </button>
          </div>
          <div class="bg-red-600 active:bg-red-400  h-[50px] w-[100px] flex justify-center items-center rounded-2xl shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                setVisible3(false);
                setIsVisible(true);
                setVisible4(false);
              }}
              className="h-full w-full text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {visible5 && (
        <div className=" mt-2 p-2 grid grid-cols-6 grid-rows-3 gap-4 place-items-center text-amber-50 ">
          <div class="bg-purple-500/80 active:bg-purple-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("1");
              }}
              className="h-full w-full text-center"
            >
              1
            </button>
          </div>
          <div class="bg-purple-500/80 active:bg-purple-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("2");
              }}
              className="h-full w-full text-center"
            >
              2
            </button>
          </div>
          <div class="bg-purple-500/80 active:bg-purple-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("3");
              }}
              className="h-full w-full text-center"
            >
              3
            </button>
          </div>
          <div class="bg-purple-500/80 active:bg-purple-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("4");
              }}
              className="h-full w-full text-center"
            >
              4
            </button>
          </div>
          <div class="bg-purple-500/80 active:bg-purple-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("5");
              }}
              className="h-full w-full text-center"
            >
              5
            </button>
          </div>
          <div class="bg-purple-500/80 active:bg-purple-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("6");
              }}
              className="h-full w-full text-center"
            >
              6
            </button>
          </div>
          <div class="bg-purple-500/80 active:bg-purple-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("7");
              }}
              className="h-full w-full text-center"
            >
              7
            </button>
          </div>
          <div class="bg-purple-500/80 active:bg-purple-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("8");
              }}
              className="h-full w-full text-center"
            >
              8
            </button>
          </div>
          <div class="bg-purple-500/80 active:bg-purple-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("9");
              }}
              className="h-full w-full text-center"
            >
              9
            </button>
          </div>
          <div class="bg-purple-500/80 active:bg-purple-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("0");
              }}
              className="h-full w-full text-center"
            >
              0
            </button>
          </div>
          <div class="bg-green-600 active:bg-green-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                if (
                  parseInt(val) >= 500 &&
                  parseInt(val) % 500 == 0 &&
                  parseInt(val) <= balance1 &&
                  parseInt(val) <= 14000
                ) {
                  setAmount(val);
                  setWidthrawl(false);
                  setVisible3(false);
                  setIsVisible(false);
                  setVisible5(false);
                  setVisible6(true);
                  setWidthrawl1(true);
                  setBalance1(parseInt(balance1) - parseInt(val));
                  setTimeout(() => {
                    setWidthrawl(true);
                    setWidthrawl1(false);
                    setVisible6(false);
                  }, 7000);

                  setTimeout(() => {
                    setWidthrawl(false);
                    setVisible3(false);
                    setIsVisible(false);
                    setVisible5(false);
                    setVisible6(false);
                    setDeposite2(false);
                    setIsVisible(true);
                    setVal("");
                  }, 11000);
                } else {
                  setVisible5(true);
                  setVal("");
                  setVisible3(false);
                  setIsVisible(false);
                }
              }}
              className="h-full w-full text-center"
            >
              Enter
            </button>
          </div>
          <div class="bg-red-600 active:bg-red-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                setVisible3(false);
                setIsVisible(true);
                setVisible5(false);
              }}
              className="h-full w-full text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {visible6 && (
        <video
          src="src\assets\gemini_generated_video_21ea5657.mp4"
          loop
          autoPlay
          className="h-[350px] w-[1000px] mt-[-165px]"
        ></video>
      )}
      {visible7 && (
        <div className=" mt-2 p-2 grid grid-cols-6 grid-rows-3 gap-4 place-items-center text-amber-50 ">
          <div class="bg-green-500/80 active:bg-green-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("1");
              }}
              className="h-full w-full text-center"
            >
              1
            </button>
          </div>
          <div class="bg-green-500/80 active:bg-green-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)] ">
            <button
              onClick={() => {
                addOne2("2");
              }}
              className="h-full w-full text-center"
            >
              2
            </button>
          </div>
          <div class="bg-green-500/80 active:bg-green-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("3");
              }}
              className="h-full w-full text-center"
            >
              3
            </button>
          </div>
          <div class="bg-green-500/80 active:bg-green-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("4");
              }}
              className="h-full w-full text-center"
            >
              4
            </button>
          </div>
          <div class="bg-green-500/80 active:bg-green-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("5");
              }}
              className="h-full w-full text-center"
            >
              5
            </button>
          </div>
          <div class="bg-green-500/80 active:bg-green-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("6");
              }}
              className="h-full w-full text-center"
            >
              6
            </button>
          </div>
          <div class="bg-green-500/80 active:bg-green-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("7");
              }}
              className="h-full w-full text-center"
            >
              7
            </button>
          </div>
          <div class="bg-green-500/80 active:bg-green-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("8");
              }}
              className="h-full w-full text-center"
            >
              8
            </button>
          </div>
          <div class="bg-green-500/80 active:bg-green-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("9");
              }}
              className="h-full w-full text-center"
            >
              9
            </button>
          </div>
          <div class="bg-green-500/80 active:bg-green-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("0");
              }}
              className="h-full w-full text-center"
            >
              0
            </button>
          </div>
          <div class="bg-green-600 active:bg-green-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                if (parseInt(val) >= 500 && parseInt(val) % 500 == 0) {
                  setBalance1(parseInt(balance1) + parseInt(val));

                  setAmount(val);
                  setVisible3(false);
                  setIsVisible(false);
                  setVisible8(true);

                  setTimeout(() => {
                    setDeposite(true);
                    setDeposite2(false);
                    setVisible8(false);
                  }, 7000);
                  setTimeout(() => {
                    setDeposite(false);
                    setIsVisible(true);
                    setVal("");
                  }, 12000);
                  setDeposite2(true);
                  setVisible7(false);
                } else {
                  setVisible7(true);
                  setVal("");
                  setVisible3(false);
                  setIsVisible(false);
                }
              }}
              className="h-full w-full text-center"
            >
              Enter
            </button>
          </div>
          <div class="bg-red-600 active:bg-red-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                setVisible3(false);
                setIsVisible(true);
                setVisible5(false);
                setVisible7(false);

                setVal("");
              }}
              className="h-full w-full text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {visible8 && (
        <div className="bg-white h-[261px]">
          <video
            src="src\assets\deposite.mp4"
            loop
            autoPlay
            className=" p-1 h-full w-full  mt-[-85px] object-cover"
          ></video>
        </div>
      )}
      {visible9 && (
        <div className=" mt-2 p-2 grid grid-cols-6 grid-rows-3 gap-4 place-items-center text-amber-50 ">
          <div class="bg-blue-500/80 active:bg-blue-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("1");
              }}
              className="h-full w-full text-center"
            >
              1
            </button>
          </div>
          <div class="bg-blue-500/80 active:bg-blue-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("2");
              }}
              className="h-full w-full text-center"
            >
              2
            </button>
          </div>
          <div class="bg-blue-500/80 active:bg-blue-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("3");
              }}
              className="h-full w-full text-center"
            >
              3
            </button>
          </div>
          <div class="bg-blue-500/80 active:bg-blue-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("4");
              }}
              className="h-full w-full text-center"
            >
              4
            </button>
          </div>
          <div class="bg-blue-500/80 active:bg-blue-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("5");
              }}
              className="h-full w-full text-center"
            >
              5
            </button>
          </div>
          <div class="bg-blue-500/80 active:bg-blue-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("6");
              }}
              className="h-full w-full text-center"
            >
              6
            </button>
          </div>
          <div class="bg-blue-500/80 active:bg-blue-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("7");
              }}
              className="h-full w-full text-center"
            >
              7
            </button>
          </div>
          <div class="bg-blue-500/80 active:bg-blue-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("8");
              }}
              className="h-full w-full text-center"
            >
              8
            </button>
          </div>
          <div class="bg-blue-500/80 active:bg-blue-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("9");
              }}
              className="h-full w-full text-center"
            >
              9
            </button>
          </div>
          <div class="bg-blue-500/80 active:bg-blue-300 backdrop-blur-xl font-medium text-xl border border-white  text-gray-800 hover:scale-105 hover:bg-white/60
transition-all duration-300 h-[50px] w-[70px] flex justify-center items-center rounded-2xl text-white hover:text-black  active:text-white  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                addOne2("0");
              }}
              className="h-full w-full text-center"
            >
              0
            </button>
          </div>
          <div class="bg-green-600 active:bg-green-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl  shadow-[0_4px_0_rgb(30_64_175)]">
            <button className="h-full w-full text-center">Enter</button>
          </div>
          <div class="bg-red-600 active:bg-red-300 h-[50px] w-[90px] flex justify-center items-center rounded-2xl  shadow-[0_4px_0_rgb(30_64_175)]">
            <button
              onClick={() => {
                setVisible3(false);
                setIsVisible(true);
                setVisible5(false);
                setVisible7(false);
                setBalance(false);
                setVisible9(false);

                setVal("");
              }}
              className="h-full w-full text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
