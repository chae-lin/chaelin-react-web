import { useCallback, useRef } from "react";
import { Global } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination } from "swiper";
import GlobalCommonStyle from "./GlobalCommonStyles";
import { Archiving, Home, Project, Skill } from "./page";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const swiperRef = useRef() as any;
  const pagiList = ["Home", "Skill", "Project", "Archiving"];
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + pagiList[index] + "</span>";
    },
  };

  const handleScroll = useCallback(() => {
    swiperRef.current?.swiper.slideTo(1);
  }, []);

  return (
    <>
      <Global styles={GlobalCommonStyle} />
      <Swiper
        onInit={(core: SwiperCore) => {
          swiperRef.current = core.el;
        }}
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={pagination}
        modules={[Mousewheel, Pagination]}
        className="swiper-portfolio"
      >
        <SwiperSlide>
          <Link to="/page1" style={{ zIndex: 555 }}>
            page1
          </Link>
          <Home handleScroll={handleScroll} />
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
