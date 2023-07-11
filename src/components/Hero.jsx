import React from "react";
import homepage from "../assets/img/homePage.png";

export default function Hero() {
  return (
    <div>
      <header className="text-gray-600 body-font bg-white py-14 flex flex-col justify-center items-center">
        <h1 className="text-[#054550] text-6xl font-bold text-center lg:text-[3rem] md:text-[3rem] sm:text-3xl mt-10">
          Поездки на ваш выбор по самым <br /> низким ценам
        </h1>
        <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col justify-center items-center pt-10">
          <div className="lg:w-2/6 md:w-1/2 md:mx-10 sm:w-[550px] bg-[#528B93] rounded-lg p-8 flex flex-col w-full mt-10 md:ml-32 lg:ml-36 md:mt-0 px-12">
            <h2 className="text-white font-semibold text-lg title-font mb-5 text-center">
              Куда вы хотите поехать?
            </h2>
            <div className="relative mb-4">
              <input
                type="text"
                id="From"
                name="From"
                placeholder="Откуда"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="text"
                id="where"
                name="where"
                placeholder="Куда"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
              />
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Сегодня"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
              />
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Пассажиров"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
              />
            </div>
            <button className="text-white border-0 py-2 mt-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg bg-[#054550] active:scale-95 transition-all">
              Поиск
            </button>
          </div>
          <div className="lg:w-3/5 md:w-1/2 flex justify-center items-center md:mr-14 lg:mr-16">
            <img className="cover-full -scale-x-105" src={homepage} alt="car" />
          </div>
        </div>
      </header>
    </div>
  );
}
