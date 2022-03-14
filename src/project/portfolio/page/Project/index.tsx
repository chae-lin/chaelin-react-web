import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { PageLayout } from "../../common";
import { ProjectItem } from "./ProjectItem";

import imgWork1 from "../../assets/images/work1.png";

export const Project = () => {
  const projectList = [
    {
      imgUrl: imgWork1,
      title: "HTML5",
      tags: ["dd", "dd"],
      handleClick: () => null,
    },
    {
      imgUrl: imgWork1,
      title: "HTML5",
      tags: ["dd", "dd"],
      handleClick: () => null,
    },
  ];

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
        {projectList?.map(({ imgUrl, title, tags, handleClick }) => (
          <SwiperSlide>
            <ProjectItem
              imgUrl={imgUrl}
              title={title}
              tags={tags}
              handleClick={handleClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </PageLayout>
  );
};
