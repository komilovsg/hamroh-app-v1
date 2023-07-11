import React from "react";
import direction from "../assets/img/direction.png";
import writeDriver from "../assets/img/writeDriver.png";
import travelDate from "../assets/img/travelDate.png";
import meet from "../assets/img/meet.png";
import chooseDriver from "../assets/img/chooseDriver.png";
import tripAgreement from "../assets/img/tripAgreement.png";

function HowPassenger() {
  return (
    <div className="pb-10 bg-white">
      <h1 className="text-[#054550] text-center text-[28px] p-24">
        Как это работает если вы пассажир
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center ml-20 p-5">
          <img src={direction} alt="" />
          <p className="text-[24px] text-[#054550]">
            Выберите
            <br /> направление
          </p>
        </div>
        <div className="flex items-center ml-20 p-5">
          <img src={writeDriver} alt="" />
          <p className="text-[24px] text-[#054550]">
            Напишите
            <br /> водителю
          </p>
        </div>
        <div className="flex items-center ml-20 p-5 mt-7">
          <img src={travelDate} alt="" />
          <p className="text-[24px] text-[#054550]">
            Выберите
            <br /> дату
          </p>
        </div>
        <div className="flex items-center ml-20 p-5 mt-7">
          <img src={tripAgreement} alt="" />
          <p className="text-[24px] text-[#054550]">
            Договоритесь о
            <br /> поездке
          </p>
        </div>
        <div className="flex items-center ml-20 p-5 mt-7">
          <img src={chooseDriver} alt="" />
          <p className="text-[24px] text-[#054550]">
            Найдите
            <br />
            водителя
          </p>
        </div>
        <div className="flex items-center ml-20 p-5 mt-7">
          <img src={meet} alt="" />
          <p className="text-[24px] text-[#054550]">
            Подойдите к <br />
            месту встречи
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className=" text-[18px] text-white text-center bg-[#054550] rounded-full px-14 py-5 mt-14 active:scale-90 transition-all cursor-pointer hover:shadow-md hover:shadow-[#054550]">
          Узнать как это работает
        </button>
      </div>
    </div>
  );
}

export default HowPassenger;
