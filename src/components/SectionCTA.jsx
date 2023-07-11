import React from 'react'
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

export default function SectionCTA() {
  return (
    <section className="flex flex-col justify-center items-center bg-[#528B93]">
    <h1 className="text-white text-3xl my-10 font-bold">
      Самые популярные направление
    </h1>
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 pb-[33px]">
      <button className=" bg-white border-2 rounded-2xl w-[293px]  border-white shadow-lg active:scale-95 transition-all">
        <div className=" flex justify-center items-center gap-5 p-4 text-2xl font-bold text-[#054550]">
          <h1>Душанбе</h1>
          <BsArrowRightShort className="w-14 h-14" />
          <h1>Худжанд</h1>
          <IoIosArrowForward className="w-14 h-14" />
        </div>
      </button>
      <button className=" bg-white border-2 rounded-2xl w-[293px]  border-white shadow-lg active:scale-95 transition-all">
        <div className=" flex justify-center items-center gap-5 p-4 text-2xl font-bold text-[#054550]">
          <h1>Душанбе</h1>
          <BsArrowRightShort className="w-14 h-14" />
          <h1>Куляб</h1>
          <IoIosArrowForward className="w-14 h-14" />
        </div>
      </button>
      <button className=" bg-white border-2 rounded-2xl w-[293px]  border-white shadow-lg active:scale-95 transition-all">
        <div className=" flex justify-center items-center gap-5 p-4 text-2xl font-bold text-[#054550]">
          <h1>Душанбе</h1>
          <BsArrowRightShort className="w-14 h-14" />
          <h1>Хорог</h1>
          <IoIosArrowForward className="w-14 h-14" />
        </div>
      </button>
    </div>
  </section>
  )
}
