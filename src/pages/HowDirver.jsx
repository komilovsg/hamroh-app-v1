import React from "react";
import direction from "../assets/img/direction.png";
import price from "../assets/img/price.png";
import travelDate from "../assets/img/travelDate.png";
import findPassengers from "../assets/img/findPassengers.png";
import numberOfPassengers from "../assets/img/numberOfPassengers.png";
import application from "../assets/img/application.png";

function HowDriver() {
  return (
    <div className="bg-white">
      <h1 className="text-[#054550] text-center text-[28px] p-24">
        Как это работает если вы водитель
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
          <img src={price} alt="" />
          <p className="text-[24px] text-[#054550]">
            Добавьте
            <br /> стоимость <br />
            поездки
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
          <img src={findPassengers} alt="" />
          <p className="text-[24px] text-[#054550]">
            Мы вам найдем
            <br />
            пассажиров
          </p>
        </div>
        <div className="flex items-center ml-20 p-5 mt-7">
          <img src={numberOfPassengers} alt="" />
          <p className="text-[24px] text-[#054550] ml-8">
            Добавьте
            <br /> количество <br />
            пассажиров
          </p>
        </div>
        <div className="flex items-center ml-20 p-5 mt-7">
          <img src={application} alt="" />
          <p className="text-[24px] text-[#054550]">
            Вы <br />
            подтверждаете
            <br /> заявку
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <button className=" text-[18px] text-white text-center bg-[#054550] rounded-full px-14 py-5 mt-14 active:scale-90 transition-all cursor-pointer hover:shadow-md hover:shadow-[#054550]">
          Узнать как это работает
        </button>
      </div>
    </div>
  );
}

export default HowDriver;
