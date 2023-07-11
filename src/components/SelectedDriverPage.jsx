import React from "react";
import gulnoza from "../assets/img/gulnoza.svg";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import ellips from "../assets/img/EllipseLeft.svg";
import rectangle from "../assets/img/Rectangle.svg";
import phone from "../assets/img/phone-call.svg";
import pawe from "../assets/img/paw-ellips.png";
import nosmoke from "../assets/img/nosmoke.png";
import nomusic from "../assets/img/nomusic.png";

function SelectedDriverPage() {
  return (
    <div className="h-[100%]">
      <div className=" text-center mb-10">
        <p className="text-[#054550] text-[32px] font-bold mb-16">15 июня</p>
        <div className="flex justify-center items-center">
          <p className="text-[#88ACB0] text-[32px] cursor-pointer">Душанбе</p>
          <img
            src={ellips}
            className="border-4 border-[#054550] rounded-full ml-14"
            alt=""
          />
          <img src={rectangle} alt="" />
          <img
            src={ellips}
            className="border-4 border-[#054550] rounded-full mr-14"
            alt=""
          />
          <p className="text-[#88ACB0] text-[32px] cursor-pointer">Худжанд</p>
        </div>
        <p className="text-[#054550] text-[24px] font-bold">09:00</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-between border-y-2 border-[#88ACB0] w-[600px] py-10 px-7">
          <p className="text-[#88ACB0] text-[20px]">Итого за 1 пассажира</p>
          <p className="text-[#054550] text-[24px]">85 c</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-between w-[600px] py-10 px-7">
          <div>
            <p className="text-[#054550] text-[32px]">Гулноза</p>
            <p className="text-[#88ACB0] text-[20px]">25 лет</p>
          </div>
          <div className="cursor-pointer">
            <img
              className="w-[89px] h-[89px] border-2 rounded-full border-blue-700"
              src={gulnoza}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-5 items-center border-b-2 pb-10 border-[#88ACB0] w-[600px] text-[#528B93] font-semibold">
        <button className="flex justify-center items-center gap-5 active:scale-95 transition-all">
          <FaTelegramPlane className="w-14 h-14 text-blue-700" />
          <p className="text-[#528B93] text-[20px]">Связаться с Гулнозой</p>
        </button>
        <button className="flex justify-center items-center gap-5 active:scale-95 transition-all">
          <img className="w-12 h-12" src={phone} alt="" />
          <p className="text-[#528B93] text-[20px]">Связаться с Гулнозой</p>
        </button>
      </div>
      </div>
      <div className="flex justify-around items-center">
      <div className="text-[#528B93] font-semibold flex flex-col justify-center">
        <div className="mt-10 flex justify-start items-center gap-4 cursor-pointer">
          <img className="rounded-full w-20 h-20" src={nosmoke} alt="" />
          <p className="text-[#528B93] text-[20px]">
            Не люблю, когда попутчики курят
          </p>
        </div>
        <div className="mt-10 flex justify-start items-center gap-4 cursor-pointer">
          <img className="rounded-full w-20 h-20" src={pawe} alt="" />
          <p className="text-[#528B93] text-[20px]">Животные - это не мое</p>
        </div>
        <div className="mt-10 flex justify-start items-center gap-4 cursor-pointer">
          <img className="rounded-full w-20 h-20" src={nomusic} alt="" />
          <p className="text-blue-gray-300 text-[20px]">Музыка - это не мое</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SelectedDriverPage;
