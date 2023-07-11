import React from "react";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";
import ellips from "../assets/img/EllipseLeft.svg";
import rectangle from "../assets/img/Rectangle.svg";
import pawe from "../assets/img/paw-ellips.png";
import nosmoke from "../assets/img/nosmoke.png";
import nomusik from "../assets/img/nomusik.png";
import imran from '../assets/img/user-imran.svg'
import gulnoza from '../assets/img/user-gulnoza.svg'
import matin from '../assets/img/user-matin.svg'
import person from '../assets/img/user-person.svg'
import starts from '../assets/img/circle-stars.svg'


export default function SearchPage() {
  return (
    <div className="bg-white">
      <section className="container mx-auto md:mx-[256px] py-10 flex flex-col">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-2xl text-[#054550] font-bold">15 июня</h1>
          <div className="h-full flex flew-row items-center gap-1 text-xl font-semibold text-[#88ACB0]">
            <h1 className="cursor-pointer">Душанбе</h1>
            <BsArrowRightShort className="w-10 h-10 text-gray-400" />
            <h1 className="cursor-pointer">Худжанд</h1>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-10 w-full mt-11">
          <button className="w-[487px]  bg-white border-2 rounded-2xl border-white shadow-lg active:scale-95 transition-all">
            <div className="flex justify-between items-center px-4">
              <div className="h-full flex justify-start items-start gap-3 p-4 text-base font-bold text-[#88ACB0]">
                <h1>Душанбе</h1>
                <div className="flex justify-center items-center">
                  <img
                    src={ellips}
                    className="w-3 h-3 border-2 border-[#054550] rounded-full"
                    alt=""
                  />
                  <img className="h-7 w-16" src={rectangle} alt="" />
                  <img
                    src={ellips}
                    className="w-3 h-3 border-2 border-[#054550] rounded-full"
                    alt=""
                  />
                </div>
                <h1>Худжанд</h1>
              </div>
              <h1 className="text-[#88ACB0] flex justify-center items-center">
                15 июня
              </h1>
              <div className="flex justify-end items-center gap-3">
                <img className="w-9 h-9 rounded-full" src={nosmoke} alt="" />
                <img className="w-9 h-9 rounded-full" src={pawe} alt="" />
                <img className="w-9 h-9 rounded-full" src={nomusik} alt="" />
              </div>
            </div>
            <div className="flex justify-between items-center px-4">
              <div className="flex justify-start items-center gap-3 p-4 text-base font-bold text-[#88ACB0]">
                <img src={imran} alt="" />
                <div className="flex flex-col gap-3">
                    <h1 className="text-[#054550] font-bold text-xl">Имран</h1>
                    <div className="flex justify-start items-center gap-2">
                        <img src={starts} alt="" />
                        <p>4.9</p>
                    </div>
                </div>
              </div>
              <div className="text-[#88ACB0] flex justify-center items-center gap-1 mt-8 ml-20">
                <img className="w-[10px] h-[10px]" src={person} alt="" />
              <h1 className="w-[7px] h-[13px]">
                2
              </h1>
              </div>
              <div className="flex justify-end items-center text-4xl text-[#054550] mt-8">
                <h1>100 c</h1>
              </div>
            </div>
          </button>
          <button className="w-[487px]  bg-white border-2 rounded-2xl border-white shadow-lg active:scale-95 transition-all">
            <div className="flex justify-between items-center px-4">
              <div className=" flex justify-start items-start gap-3 p-4 text-base font-bold text-[#88ACB0]">
                <h1>Душанбе</h1>
                <div className="flex justify-center items-center">
                  <img
                    src={ellips}
                    className="w-3 h-3 border-2 border-[#054550] rounded-full"
                    alt=""
                  />
                  <img className="h-7 w-16" src={rectangle} alt="" />
                  <img
                    src={ellips}
                    className="w-3 h-3 border-2 border-[#054550] rounded-full"
                    alt=""
                  />
                </div>
                <h1>Худжанд</h1>
              </div>
              <h1 className="text-[#88ACB0] flex justify-center items-center">
                15 июня
              </h1>
              <div className="flex justify-end items-center gap-3">
                <img className="w-9 h-9 rounded-full" src={nosmoke} alt="" />
                <img className="w-9 h-9 rounded-full" src={pawe} alt="" />
                <img className="w-9 h-9 rounded-full" src={nomusik} alt="" />
              </div>
            </div>
            <div className="flex justify-between items-center px-4">
              <div className="h-full flex justify-start items-center gap-3 p-4 text-base font-bold text-[#88ACB0]">
                <img src={gulnoza} alt="" />
                <div className="flex flex-col gap-3">
                    <h1 className="text-[#054550] font-bold text-xl">Гульноза</h1>
                    <div className="flex justify-start items-center gap-2">
                        <img src={starts} alt="" />
                        <p>5.0</p>
                    </div>
                </div>
              </div>
              <div className="text-[#88ACB0] flex justify-center items-center gap-1 mt-8 ml-7">
                <img className="w-[10px] h-[10px]" src={person} alt="" />
              <h1 className="w-[7px] h-[13px]">
                1
              </h1>
              </div>
              <div className="flex justify-end items-center text-4xl text-[#054550] mt-8">
                <h1>85 c</h1>
              </div>
            </div>
          </button>
          <button className="w-[487px]  bg-white border-2 rounded-2xl border-white shadow-lg active:scale-95 transition-all">
            <div className="flex justify-between items-center px-4">
              <div className="h-full flex justify-start items-start gap-3 p-4 text-base font-bold text-[#88ACB0]">
                <h1>Душанбе</h1>
                <div className="flex justify-center items-center">
                  <img
                    src={ellips}
                    className="w-3 h-3 border-2 border-[#054550] rounded-full"
                    alt=""
                  />
                  <img className="h-7 w-16" src={rectangle} alt="" />
                  <img
                    src={ellips}
                    className="w-3 h-3 border-2 border-[#054550] rounded-full"
                    alt=""
                  />
                </div>
                <h1>Худжанд</h1>
              </div>
              <h1 className="text-[#88ACB0] flex justify-center items-center">
                15 июня
              </h1>
              <div className="flex justify-end items-center gap-3">
                <img className="w-9 h-9 rounded-full" src={nosmoke} alt="" />
                <img className="w-9 h-9 rounded-full" src={pawe} alt="" />
                <img className="w-9 h-9 rounded-full" src={nomusik} alt="" />
              </div>
            </div>
            <div className="flex justify-between items-center px-4">
              <div className="flex justify-start items-center gap-3 p-4 text-base font-bold text-[#88ACB0]">
                <img src={matin} alt="Matin" />
                <div className="flex flex-col gap-3">
                    <h1 className="text-[#054550] font-bold text-xl">Матин</h1>
                    <div className="flex justify-start items-center gap-2">
                        <img src={starts} alt="starts" />
                        <p>4.9</p>
                    </div>
                </div>
              </div>
              <div className="text-[#88ACB0] flex justify-center items-center gap-1 mt-8 ml-20">
                <img className="w-[10px] h-[10px]" src={person} alt="" />
              <h1 className="w-[7px] h-[13px]">
                4
              </h1>
              </div>
              <div className="flex justify-end items-center text-4xl text-[#054550] mt-8">
                <h1>120 c</h1>
              </div>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
