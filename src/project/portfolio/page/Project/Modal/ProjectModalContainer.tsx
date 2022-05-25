import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ModalPortal } from "../../../common";
import { ProjectModalItem } from "./ProjectModalItem";
import * as S from "./styles";

import { ProjectModalStoreImpl } from "../../../stores/ProjectModalStore";

interface props {
  isMounted: boolean;
  clickIndex: number;
  handleClose: (e: React.MouseEvent<HTMLElement>) => unknown;
}

export const ProjectModalContainer: FC<props> = ({
  isMounted,
  clickIndex,
  handleClose,
}) => {
  return (
    <ModalPortal>
      <S.ModalWrap className={isMounted ? "open-modal" : "close-modal"}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          onSwiper={(swiper) => swiper.slideTo(clickIndex)}
          className="swiper-modal"
        >
          {ProjectModalStoreImpl.projectModalList?.map((modalData, index) => (
            <SwiperSlide key={index}>
              <ProjectModalItem
                modalData={modalData}
                num={index}
                handleClose={handleClose}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.ModalWrap>
    </ModalPortal>
  );
};
