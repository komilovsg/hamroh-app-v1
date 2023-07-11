// REACT
import React from "react";

// REACT ROUTER
import { useNavigate } from "react-router";

// FROM ASSETS
import company from "../assets/img/company.png";

function SectionHow() {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-white">
      <div className="flex justify-center">
        <div className="flex flex-col text-center md:text-left md:flex-row md:items-center ">
          <div>
            <h2 className="text-[24px] text-[#054550] font-bold mb-5">
              Экономьте, когда вы за рулем
            </h2>
            <p className="text-[#528B93] text-[18px]">
              Зарегистрируйте профиль водителя, берите <br />
              попутчиков и экономьте на бензине. Чтобы
              <br /> опубликовать первую поездку, нужно всего пару
              <br /> минут. Готовы ехать?
            </p>
            <div className="flex justify-center">
              <button
                className=" text-[18px] text-white text-center bg-[#054550] rounded-full px-14 py-5 my-14 active:scale-90 transition-all cursor-pointer hover:shadow-md hover:shadow-[#054550]"
                onClick={() => navigate("how-work")}
              >
                Узнать как это работает
              </button>
            </div>
          </div>
          <img src={company} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SectionHow;
