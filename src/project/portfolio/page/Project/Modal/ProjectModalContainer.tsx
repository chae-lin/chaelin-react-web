import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ModalPortal } from "../../../common";
import { ProjectModalItem } from "./ProjectModalItem";
import * as S from "./styles";

import top7 from "../../../assets/images/bg_project_top7.png";

import overView7 from "../../../assets/images/img_project7.png";

const modalList = [
  {
    bgImg: top7,
    title: "JAM LIVE (LIVE)",
    standard: "RESPONSIVE WEBSITE",
    summartTitle: "Summary",
    summarys: [
      {
        summaryTitle: "프로젝트 기간",
        summaryInfo: ["2020.06.03 ~ 2020.07.10"],
      },
      {
        summaryTitle: "사이트 특징",
        summaryInfo: [
          "잼 라이브 생방송 사이트",
          "반응형 웹 사이트",
          "vh, vw 단위 기반 유동적 UI",
          "애니메이션 효과 및 인터렉션 작업",
          "JS라이브러리 (Slick.js, Swiper.js)",
        ],
      },
      {
        summaryTitle: "크로스브라우징",
        summaryInfo: ["IE 10 +", "Chrome", "Firefox", "Safari"],
      },
      {
        summaryTitle: "담당업무",
        summaryInfo: ["HTML5, SASS 기반 UI 마크업 100%"],
      },
    ],
    overViewLink: "https://jamlive.tv/lives",
    overViewImg: overView7,
  },
  {
    bgImg: "dd",
    title: "JAM LIVE (LIVE)",
    standard: "RESPONSIVE WEBSITE",
    summartTitle: "Summary",
    summarys: [
      {
        summaryTitle: "프로젝트 기간",
        summaryInfo: ["2020.06.03 ~ 2020.07.10"],
      },
      {
        summaryTitle: "사이트 특징",
        summaryInfo: [
          "잼 라이브 생방송 사이트",
          "반응형 웹 사이트",
          "vh, vw 단위 기반 유동적 UI",
          "애니메이션 효과 및 인터렉션 작업",
          "JS라이브러리 (Slick.js, Swiper.js)",
        ],
      },
      {
        summaryTitle: "크로스브라우징",
        summaryInfo: ["IE 10 +", "Chrome", "Firefox", "Safari"],
      },
      {
        summaryTitle: "담당업무",
        summaryInfo: ["HTML5, SASS 기반 UI 마크업 100%"],
      },
    ],
    overViewLink: "https://jamlive.tv/lives",
    overViewImg: overView7,
  },
];

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
          className="swiper-modal"
          onSwiper={(swiper) => swiper.slideTo(clickIndex)}
        >
          {modalList?.map((modalData, index) => (
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
