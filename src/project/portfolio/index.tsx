import React from "react";
import { Global } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import GlobalCommonStyle from "./GlobalCommonStyles";

import { Home, Skill } from "./page";
import "swiper/css/pagination";

const Portfolio = () => {
  return (
    <>
      <Global styles={GlobalCommonStyle} />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        onSlideChange={() => console.log("slide change")}
        className="mySwiper"
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <Skill />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Portfolio;
