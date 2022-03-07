import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { PageLayout } from "../../common";

import "swiper/css/navigation";
import { ProjectItem } from "./ProjectItem";

import imgWork1 from "../../assets/images/work1.png";

export const Project = () => {
  return (
    <PageLayout type="project" title="Project">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 30,
          },
          769: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <ProjectItem
            imgUrl={imgWork1}
            title="d"
            tags={["dd", "dd"]}
            handleClick={() => null}
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </PageLayout>
  );
};
