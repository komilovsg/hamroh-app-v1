import React from "react";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";

function Footer() {
  return (
    <div className="bg-[#528B93]">
      <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-row md:justify-around py-10">
        <div className="">
          <h6 className="text-[24px] text-white mb-7">Все каталоги</h6>
          <a href=""><p className="text-[#B2C8CA] text-[18px] mb-3">Все автомаршруты</p></a>
          <a href=""><p className="text-[#B2C8CA] text-[18px] mb-3">Все автонаправление</p></a>
        </div>
        <div>
          <h6 className="text-[24px] text-white mb-7">Популярные маршруты</h6>
          <a href="">
            <p className="text-[#B2C8CA] text-[18px] mb-3 flex justify-center md:justify-start items-center">
              Душанбе
              <BsArrowRightShort className="w-11 h-14" />
              Худжанд
            </p>
          </a>
          <a href="">
            <p className="text-[#B2C8CA] text-[18px] mb-3 flex justify-center md:justify-start items-center">
              Худжанд
              <BsArrowRightShort className="w-11 h-14" />
              Душанбе
            </p>
          </a>
          <a href="">
          <p className="text-[#B2C8CA] text-[18px] mb-3 flex justify-center md:justify-start items-center">
            Душанбе
            <BsArrowRightShort className="w-11 h-14" />
            Самарканд
          </p>
          </a>
          <a href="">
            <p className="text-[#B2C8CA] text-[18px] mb-3 flex justify-center md:justify-start items-center">
            Душанбе
            <BsArrowRightShort className="w-11 h-14" />
            Хорог
          </p></a>
          <a href="">
          <p className="text-[#B2C8CA] text-[18px] mb-3 flex justify-center md:justify-start items-center">
            Куляб
            <BsArrowRightShort className="w-11 h-14" />
            Душанбе
          </p>
          </a>
        </div>
        <div>
          <h6 className="text-[24px] text-white mb-7">О нас</h6>
          <a href="">
            <p className="text-[#B2C8CA] text-[18px] mb-3">
              Как работает Hamroh
            </p>
          </a>
          <a href="">
            <p className="text-[#B2C8CA] text-[18px] mb-3">О нас</p>
          </a>
          <a href="">
            <p className="text-[#B2C8CA] text-[18px] mb-3">Центр помощи</p>
          </a>
          <a href="">
            <p className="text-[#B2C8CA] text-[18px] mb-3">Ищем сотрудников</p>
          </a>
          <div className="flex justify-center md:justify-start items-center gap-1 mt-7">
            <AiOutlineTwitter className="w-10 h-10 active:scale-90 transition-all text-blue-500 hover:scale-110 cursor-pointer" />
            <AiFillYoutube className="w-10 h-16 active:scale-90 transition-all text-red-500 hover:scale-110 cursor-pointer" />
            <FaTelegram className="w-10 h-10 active:scale-90 transition-all text-blue-600 hover:scale-110 cursor-pointer" />
            <AiOutlineInstagram className="w-10 h-10 active:scale-90 transition-all text-pink-600 hover:scale-110 cursor-pointer" />
            <FaFacebook className="w-10 h-10 active:scale-90 transition-all text-blue-700 hover:scale-110 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
