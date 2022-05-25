import top8 from "../assets/images/bg_project_top8.png";
import top7 from "../assets/images/bg_project_top7.png";
import top6 from "../assets/images/bg_project_top6.png";
import top5 from "../assets/images/bg_project_top5.jpg";
import top4 from "../assets/images/bg_project_top4.png";
import top3 from "../assets/images/bg_project_top3.jpg";
import top2 from "../assets/images/bg_project_top2.jpg";
import top1 from "../assets/images/bg_project_top1.png";

import overView8 from "../assets/images/img_project8.png";
import overView7 from "../assets/images/img_project7.png";
import overView6 from "../assets/images/img_project6.png";
import overView5 from "../assets/images/img_project5.png";
import overView4 from "../assets/images/img_project4.png";
import overView3 from "../assets/images/img_project3.png";
import overView2 from "../assets/images/img_project2.png";
import overView1 from "../assets/images/img_project1_v2.png";

export class ProjectModalStore {
  projectModalList = [
    {
      bgImg: top8,
      title: "WAPL",
      standard: "WEBSITE",
      summarys: [
        {
          summaryTitle: "프로젝트 기간",
          summaryInfo: ["2021.10.11 ~ 2022.01.31"],
        },
        {
          summaryTitle: "사이트 특징",
          summaryInfo: ["협업 툴", "다국어 지원", "테마기능 제공"],
        },
        {
          summaryTitle: "크로스브라우징",
          summaryInfo: ["Chrome", "Firefox", "Safari"],
        },
        {
          summaryTitle: "담당업무",
          summaryInfo: [
            "React, TypeScript 기반 UI 마크업",
            "프론트엔드 기능 구현",
            "common 컴포넌트 구현",
            "플랫폼, 캘린더, 어드민 담당",
            "Storybook을 통한 컴포넌트 가이드 제공",
          ],
        },
      ],
      overViewLink: ["https://wapl.ai/spaces"],
      overViewImg: overView8,
    },
    {
      bgImg: top7,
      title: "JAM LIVE (LIVE)",
      standard: "RESPONSIVE WEBSITE",
      summarys: [
        {
          summaryTitle: "프로젝트 기간",
          summaryInfo: ["2020.06.03 ~ 2020.08.26"],
        },
        {
          summaryTitle: "사이트 특징",
          summaryInfo: [
            "잼 라이브 생방송 사이트",
            "반응형 웹 사이트",
            "vh, vw 단위 기반 유동적 UI",
          ],
        },
        {
          summaryTitle: "크로스브라우징",
          summaryInfo: ["IE 10 +", "Chrome", "Firefox", "Safari"],
        },
        {
          summaryTitle: "담당업무",
          summaryInfo: [
            "HTML5, SASS 기반 UI 마크업 100%",
            "애니메이션 효과 및 인터렉션 작업",
            "라이브 안내와 라이브 두가지 형태의 페이지 지원",
            "JS라이브러리 적용(Slick.js, Swiper.js)",
          ],
        },
      ],
      overViewLink: ["https://jamlive.tv/lives"],
      overViewImg: overView7,
    },
    {
      bgImg: top6,
      title: "JAM LIVE (advertiser)",
      standard: "RESPONSIVE WEBSITE",
      summarys: [
        {
          summaryTitle: "프로젝트 기간",
          summaryInfo: ["2020.05.04 ~ 2020.05.22"],
        },
        {
          summaryTitle: "사이트 특징",
          summaryInfo: [
            "잼 라이브 광고주용 사이트",
            "반응형 웹 사이트",
            "vh, vw 단위 기반 유동적 UI",
          ],
        },
        {
          summaryTitle: "크로스브라우징",
          summaryInfo: ["IE 10 +", "Chrome", "Firefox", "Safari"],
        },
        {
          summaryTitle: "담당업무",
          summaryInfo: [
            "HTML5, SASS 기반 UI 마크업 100%",
            "애니메이션 효과 및 인터렉션 작업",
            "JS라이브러리 사용(Slick.js, Swiper.js)",
          ],
        },
      ],
      overViewLink: ["https://jamlive.tv/advertiser"],
      overViewImg: overView6,
    },
    {
      bgImg: top1,
      title: "GROWTHY BRAND",
      standard: "RESPONSIVE WEBSITE",
      summarys: [
        {
          summaryTitle: "프로젝트 기간",
          summaryInfo: ["2020.03.02 ~ 2020.04.30"],
        },
        {
          summaryTitle: "사이트 특징",
          summaryInfo: ["GROWTHY 상품 소개 사이트", "반응형 웹 사이트"],
        },
        {
          summaryTitle: "크로스브라우징",
          summaryInfo: ["IE 10 +", "Chrome", "Firefox", "Safari"],
        },
        {
          summaryTitle: "담당업무",
          summaryInfo: ["HTML5, SASS 기반 UI 마크업 100%", "CSS Animation"],
        },
      ],
      overViewLink: [""],
      overViewImg: overView1,
    },
    {
      bgImg: top2,
      title: "BT21",
      standard: "ADAPTIVE WEBSITE",
      summarys: [
        {
          summaryTitle: "프로젝트 기간",
          summaryInfo: [
            "BABY : 2020.02.17 ~ 2020.02.28",
            "FESTIBAL : 2019.12.02 ~ 2019.12.11",
          ],
        },
        {
          summaryTitle: "사이트 특징",
          summaryInfo: [
            "라인프렌즈와 방탄소년단의 콜라보레이션 캐릭터 이벤트 웹사이트",
            "적응형 웹 사이트",
            "5개국어 대응 (한국어, 영어, 일본어, 간체, 번체)",
          ],
        },
        {
          summaryTitle: "크로스브라우징",
          summaryInfo: ["IE 10 +", "Chrome", "Firefox", "Safari"],
        },
        {
          summaryTitle: "담당업무",
          summaryInfo: [
            "HTML5, SASS 기반 UI 마크업 100%",
            "BT21 BABY",
            "BT21 FESTIVAL",
            "CSS Animation",
            "JS라이브러리 사용(Slick.js, Swiper.js)",
          ],
        },
      ],
      overViewLink: [
        "https://www.bt21.com/BT21BABY",
        "https://www.bt21.com/BT21FESTIVAL2019",
      ],
      overViewImg: overView2,
    },
    {
      bgImg: top3,
      title: "SMART PLACE",
      standard: "ADAPTIVE WEBSITE",
      summarys: [
        {
          summaryTitle: "프로젝트 기간",
          summaryInfo: ["2019.10.07 ~ 2020.01.10"],
        },
        {
          summaryTitle: "사이트 특징",
          summaryInfo: [
            "네이버 업체 등록 웹사이트",
            "ocr, 업체 조회, 업체 리뷰 개편 및 유지보수 마크업 담당",
            "Pc: Angular, Mobile: React, App: ReactNative",
          ],
        },
        {
          summaryTitle: "크로스브라우징",
          summaryInfo: ["IE 10 +", "Chrome", "Firefox", "Safari"],
        },
        {
          summaryTitle: "담당업무",
          summaryInfo: [
            "HTML5, SASS 기반 UI 마크업 100%",
            "ocr, 업체 조회, 업체 리뷰",
            "Storybook을 통한 컴포넌트 가이드 제공",
          ],
        },
      ],
      overViewLink: ["https://smartplace.naver.com/"],
      overViewImg: overView3,
    },
    {
      bgImg: top4,
      title: "WORK PLACE",
      standard: "ADAPTIVE WEBSITE",
      summarys: [
        {
          summaryTitle: "프로젝트 기간",
          summaryInfo: ["2019.02.01 ~ 2019.09.26"],
        },
        {
          summaryTitle: "사이트 특징",
          summaryInfo: ["네이버 기업정보시스템"],
        },
        {
          summaryTitle: "크로스브라우징",
          summaryInfo: ["IE 10 +", "Chrome", "Firefox", "Safari"],
        },
        {
          summaryTitle: "담당업무",
          summaryInfo: [
            "HTML5, SASS 기반 UI 마크업 100%",
            "리뉴얼 프로젝트 마크업 담당",
            "폴더블 스마트폰(250px) 대응",
            "REDMINE을 통한 협업",
          ],
        },
      ],
      overViewLink: [
        "https://www.ncloud.com/product/businessApplication/workplace",
      ],
      overViewImg: overView4,
    },
    {
      bgImg: top5,
      title: "DEVIEW2018",
      standard: "RESPONSIVE WEBSITE",
      summarys: [
        {
          summaryTitle: "프로젝트 기간",
          summaryInfo: ["2018.06.15 ~ 2018.09.18"],
        },
        {
          summaryTitle: "사이트 특징",
          summaryInfo: [
            "개발자 컨퍼런스 사이트",
            "반응형 웹페이지",
            "다국어 지원",
          ],
        },
        {
          summaryTitle: "크로스브라우징",
          summaryInfo: ["IE 10 +", "Chrome", "Firefox", "Safari"],
        },
        {
          summaryTitle: "담당업무",
          summaryInfo: [
            "HTML5, SASS 기반 UI 마크업 100%",
            "메인 페이지",
            "서브 페이지 (schedule, faq)",
            "DEVIEW CFS페이지",
            "SASS, CSS, Animation",
          ],
        },
      ],
      overViewLink: ["https://deview.kr/2018/"],
      overViewImg: overView5,
    },
  ];
}

export const ProjectModalStoreImpl = new ProjectModalStore();
