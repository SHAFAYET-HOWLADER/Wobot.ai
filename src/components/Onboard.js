import { FaCaretDown } from "react-icons/fa";
import logo_img from "../images/logo.png";
import solid_line from "../images/solidLine.png";
import bacground_img from "../images/background_img.png";
import { useState } from "react";
const Onboard = () => {
  const [bg1, setBg1] = useState(false);
  const [bg2, setBg2] = useState(false);
  const [bg3, setBg3] = useState(false);
  const [bg4, setBg4] = useState(false);
  const [bg5, setBg5] = useState(false);
  const setSizeOne = () => {
    setBg1(true);
    setBg2(false);
    setBg3(false);
    setBg4(false);
    setBg5(false);
  };
  const setSizeTwo = () => {
    setBg1(false);
    setBg2(true);
    setBg3(false);
    setBg4(false);
    setBg5(false);
  };
  const setSizeThree = () => {
    setBg1(false);
    setBg2(false);
    setBg3(true);
    setBg4(false);
    setBg5(false);
  };
  const setSizeFour = () => {
    setBg1(false);
    setBg2(false);
    setBg3(false);
    setBg4(true);
    setBg5(false);
  };
  const setSizeFive = () => {
    setBg1(false);
    setBg2(false);
    setBg3(false);
    setBg4(false);
    setBg5(true);
  };
  return (
    <section
      className="onboard_area"
      style={{
        background: `url(${bacground_img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#F9F9F9",
      }}
    >
      <div className="logo container mx-auto pt-14">
        <img src={logo_img} alt="logo_img" />
        <div
          className="onboard py-11 w-[420px] lg:w-[560px] lg:h-[700px]  md:w-[560px] md:h-[700px] px-24 bg-onboard-bg container mx-auto rounded-xl"
          style={{
            boxShadow: "4px 4px 20px rgba(157, 157, 157, 0.12)",
          }}
        >
          <img className="mx-auto my-6" src={solid_line} alt="line_img" />
          <h2 className="text-center font-roboto text-3xl font-medium">
            It’s a delight to have you onboard
          </h2>
          <p className="text-center text-sm font-roboto font-normal w-full md:w-96 lg:w-96 text-paragraph-color leading-5 pt-4 pb-6">
            Help us know you better.
            <br />
            (This is how we optimize Wobot as per your business needs)
          </p>
          <div className="mb-7">
            <label className="text-sm font-inter font-bold text-paragraph-color pt-4">
              Company Name
            </label>
            <br />
            <input
              className="w-full md:w-[368px] lg:w-[368px] px-3 py-2 rounded-md border-2 border-input-border  mt-2 focus:outline-none"
              type="text"
              placeholder="e.g Example Inc"
            />
          </div>
          <div className="relative mb-7">
            <label className="text-sm font-inter font-bold text-paragraph-color pt-4">
              Industry
            </label>
            <br />
            <select
              className="w-full md:w-[368px] lg:w-[368px] px-3 py-2 rounded-md border-2 border-input-border mt-2 font-roboto font-normal text-sm text-[#A0A0A0] focus:outline-none"
              style={{
                appearance: "none",
              }}
            >
              <option>Select</option>
              <option>Sequoia</option>
              <option>Navidia</option>
              <option>Microsoft</option>
              <option>Mongodb</option>
              <option>Intel</option>
            </select>
            <div className="dropdown_icon absolute right-3 top-11 text-paragraph-color">
              <FaCaretDown />
            </div>
          </div>

          <label className="text-sm font-inter font-bold text-paragraph-color pt-4 pb-2">
            Company Size
          </label>
          <div className="size_range mt-2 text-sm font-inter font-bold text-paragraph-color">
            <span
              onClick={setSizeOne}
              className={
                bg1
                  ? "text-onboard-bg font-inter font-medium text-sm mr-4 py-1 px-2  transition ease-in-out delay-150 bg-btn-color rounded-sm cursor-pointer"
                  : "py-1 px-2 bg-[#f0f0f0] mr-3 rounded-sm cursor-pointer"
              }
            >
              1-20
            </span>
            <span
              onClick={setSizeTwo}
              className={
                bg2
                  ? "text-onboard-bg  font-inter font-medium text-sm  mr-4  py-1 px-2  transition ease-in-out delay-150 bg-btn-color rounded-sm cursor-pointer"
                  : "py-1 px-2 bg-[#f0f0f0] mr-3 rounded-sm cursor-pointer mb-32"
              }
            >
              21-50
            </span>
            <span
              onClick={setSizeThree}
              className={
                bg3
                  ? "text-onboard-bg  font-inter font-medium text-sm mr-4  py-1 px-2  transition ease-in-out delay-150 bg-btn-color rounded-sm cursor-pointer"
                  : "py-1 px-2 bg-[#f0f0f0] mr-3 rounded-sm cursor-pointer"
              }
            >
              51-200
            </span>
            <span
              onClick={setSizeFour}
              className={
                bg4
                  ? "text-onboard-bg  font-inter font-medium text-sm mr-4  py-1 px-2  transition ease-in-out delay-150 bg-btn-color rounded-sm cursor-pointer"
                  : "py-1 px-2 bg-[#f0f0f0] mr-3 rounded-sm cursor-pointer"
              }
            >
              201-500
            </span>
            <span
              onClick={setSizeFive}
              className={
                bg5
                  ? "text-onboard-bg  font-inter font-medium text-sm py-1 px-2  transition ease-in-out delay-150 bg-btn-color rounded-sm cursor-pointer"
                  : "py-1 px-2 bg-[#f0f0f0] mr-3 rounded-sm cursor-pointer"
              }
            >
              500+
            </span>
          </div>
          <div className="btn text-center mt-14">
            <button className="bg-btn-color w-full md:w-[368px] lg:w-[368px]  rounded-md py-2.5 text-sm font-roboto font-medium text-onboard-bg">
              Get Started
            </button>
          </div>
        </div>
        <div className="terms_privacy pt-32 pb-14">
          <p  className="text-center text-sm font-roboto font-normal text-paragraph-color">Terms of use | Privacy policy </p>
        </div>
      </div>
    </section>
  );
};

export default Onboard;