import React from "react";
import coins from "../assets/img/coins.png";
import bolt from "../assets/img/bolt.png";
import commentUser from "../assets/img/comment-user.png";

function SectionFeatures() {
  return (
    <div className="bg-white px-20 flex justify-center items-center">
      <div className="grid sm:w-[350px] md:w-full grid-cols-1 md:grid-cols-3 gap-10">
        <div className="m-10">
          <img src={coins} alt="" className="mb-8 w-14" />
          <h4 className="text-[18px] text-[#054550] whitespace-nowrap mb-3 font-bold">
            Ваша поездка по низкой цене
          </h4>
          <p className="text-[#B2C8CA] text-[14px] font-bold">
            Куда бы вы ни собирались, на автобусе или с попутчиками, вы сможете
            найти свою идеальную поездку среди множества маршрутов и доехать по
            самой низкой цене.
          </p>
        </div>
        <div className="m-10">
          <img src={commentUser} alt="" className="mb-8 w-14" />
          <h4 className="text-[18px] text-[#054550] whitespace-nowrap mb-3 font-bold">
            Доверяйте своим попутчикам
          </h4>
          <p className="text-[#B2C8CA] text-[14px] font-bold">
            Мы стараемся узнать ваших будущих попутчиков и автобусных
            перевозчиков как можно лучше. Мы проверяем отзывы, профили
            попутчиков, чтобы вы знали, с кем поедете.
          </p>
        </div>
        <div className="m-10">
          <img src={bolt} alt="" className="mb-8 w-14" />
          <h4 className="text-[18px] text-[#054550] whitespace-nowrap mb-3 font-bold">
            В дорогу за пару кликов!
          </h4>
          <p className="text-[#B2C8CA] text-[14px] font-bold">
            Забронировать поездку проще простого. В нашем приложении легко
            разобраться: мощный алгоритм за пару минут найдет водителя
            поблизости, и вам останется нажать пару кнопок для брони.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionFeatures;