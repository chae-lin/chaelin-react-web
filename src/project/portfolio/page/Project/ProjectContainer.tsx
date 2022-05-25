import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { PageLayout } from "../../common";
import { ProjectItem } from "./ProjectItem";
import { ProjectModalContainer as ProjectModal } from "./Modal/ProjectModalContainer";

import { ProjectStoreImpl } from "../../stores/ProjectStore";

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
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
        }}
        className="swiper-project"
      >
        {ProjectStoreImpl.projectList?.map(
          ({ imgUrl, title, tags, bgColor }, index) => (
            <SwiperSlide key={index}>
              <ProjectItem
                imgUrl={imgUrl}
                bgColor={bgColor}
                title={title}
                tags={tags}
                handleClick={() => handleClick(index)}
              />
            </SwiperSlide>
          )
        )}
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
