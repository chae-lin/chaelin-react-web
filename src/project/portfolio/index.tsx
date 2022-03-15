import React from "react";
import { Global } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import GlobalCommonStyle from "./GlobalCommonStyles";
import { Archiving, Home, Project, Skill } from "./page";

const Portfolio = () => {
  const pagiList = ["Home", "Skill", "Project", "Archiving"];
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + pagiList[index] + "</span>";
    },
  };

  return (
    <>
      <Global styles={GlobalCommonStyle} />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={pagination}
        modules={[Mousewheel, Pagination]}
        onSlideChange={() => console.log("slide change")}
        className="swiper-portfolio"
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <Skill />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Archiving />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Portfolio;
