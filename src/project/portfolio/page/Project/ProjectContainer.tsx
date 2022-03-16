import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { PageLayout } from "../../common";
import { ProjectItem } from "./ProjectItem";
import { ProjectModalContainer as ProjectModal } from "./Modal/ProjectModalContainer";

import imgWork1 from "../../assets/images/work1.png";
import imgWork2 from "../../assets/images/work2.jpg";
import imgWork3 from "../../assets/images/work3.png";
import imgWork4 from "../../assets/images/work4.jpg";
import imgWork5 from "../../assets/images/work5.jpg";
import imgWork7 from "../../assets/images/work7.jpg";
import imgWork8 from "../../assets/images/work8.jpg";

const projectList = [
  {
    imgUrl: imgWork8,
    title: "JAM LIVE (LIVE)",
    tags: ["#반응형", "#유동적 사이즈", "#sass"],
  },
  {
    imgUrl: imgWork7,
    title: "JAM LIVE (advertiser)",
    tags: ["#반응형", "#유동적 사이즈", "#sass"],
  },
  {
    imgUrl: imgWork1,
    title: "GROWTHY BRAND",
    tags: ["#반응형", "#다국어", "#sass"],
  },
  {
    imgUrl: imgWork2,
    title: "BT21 BABY, BT21 FESTIVAL2019",
    tags: ["#적응형", "#5개언어", "#swiper", "#slick"],
  },
  {
    imgUrl: imgWork3,
    title: "SMART PLACE",
    tags: ["#적응형", "sass", "#React", "#React Native", "#Component"],
  },
  {
    imgUrl: imgWork4,
    title: "WORK PLACE",
    tags: ["#적응형", "#sass", "#Foldable Phone", "#Component"],
  },
  {
    imgUrl: imgWork5,
    title: "DEVIEW2018",
    tags: ["#반응형", "#다국어", "#sass", "#Interaction"],
  },
];

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
}

export const ProjectContainer = () => {
  const [clickIndex, setClickIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const shouldRenderChild = useDelayUnmount(isMounted, 600);

  const handleClick = useCallback((index: number) => {
    setClickIndex(index);
    setIsMounted(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsMounted(false);
  }, []);

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
          768: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
        }}
        className="swiper-project"
      >
        {projectList?.map(({ imgUrl, title, tags }, index) => (
          <SwiperSlide key={index}>
            <ProjectItem
              imgUrl={imgUrl}
              title={title}
              tags={tags}
              handleClick={() => handleClick(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {shouldRenderChild && (
        <ProjectModal
          isMounted={isMounted}
          clickIndex={clickIndex}
          handleClose={handleCloseModal}
        />
      )}
    </PageLayout>
  );
};
