import React from "react";
import mobileApp from "../assets/img/MobileApp.png";
import appstore from "../assets/img/appstore.svg";
import googleplay from "../assets/img/google.svg";

function MobileApp() {
  return (
    <div className="flex justify-center bg-white py-32">
      <div className="flex flex-col text-center md:flex-row md:text-left md:items-center">
        <img src={mobileApp} alt="" />
        <div>
          <h2 className="text-[24px] text-[#054550] mb-5">
            Путешествовать удобнее с<br /> приложением Hamroh
          </h2>
          <p className="text-[#528B93] text-[18px]">
            Все поездки и билеты в одном месте, самая <br />
            последняя информация и специальные функции
            <br /> для смартфонов.
          </p>
          <div className="flex justify-center">
            <div className="flex mt-10 border-[1px] border-[#3F3D56] w-[144px] rounded-lg shadow-lg px-5 py-3 mr-10 active:scale-95 transition-all">
              <img src={googleplay} alt="" />
              <button className="text-[12px] ml-5 ">Google Play</button>
            </div>
            <div className="flex mt-10 border-[1px] border-[#3F3D56] w-[144px] rounded-lg shadow-lg px-5 py-3 active:scale-95 transition-all">
              <img src={appstore} alt="" />
              <button className="text-[12px] ml-5">App Store</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
