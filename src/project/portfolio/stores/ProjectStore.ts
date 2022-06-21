import imgWork1 from "../assets/images/work1_v2.jpg";
import imgWork2 from "../assets/images/work2.jpg";
import imgWork3 from "../assets/images/work3.png";
import imgWork4 from "../assets/images/work4.jpg";
import imgWork5 from "../assets/images/work5.jpg";
import imgWork6 from "../assets/images/work6.jpeg";
import imgWork7 from "../assets/images/work7.jpg";
import imgWork8 from "../assets/images/work8.png";

export class ProjectStore {
  projectList = [
    {
      imgUrl: imgWork8,
      title: "WAPL",
      tags: ["협업툴", "React", "TypeScript", "Styled Component"],
    },
    {
      imgUrl: imgWork7,
      title: "JAM LIVE (LIVE)",
      tags: ["반응형", "유동적 사이즈", "sass"],
    },
    {
      imgUrl: imgWork6,
      title: "JAM LIVE (advertiser)",
      tags: ["반응형", "유동적 사이즈", "sass"],
    },
    {
      imgUrl: imgWork1,
      title: "GROWTHY BRAND",
      tags: ["반응형", "다국어", "sass"],
    },
    {
      imgUrl: imgWork2,
      title: "BT21 BABY, BT21 FESTIVAL2019",
      tags: ["적응형", "5개언어", "swiper", "slick"],
    },
    {
      imgUrl: imgWork3,
      title: "SMART PLACE",
      tags: ["적응형", "sass", "React", "React Native", "Component"],
      bgColor: "#b8b8ba",
    },
    {
      imgUrl: imgWork4,
      title: "WORK PLACE",
      tags: ["적응형", "sass", "Foldable Phone", "Component"],
    },
    {
      imgUrl: imgWork5,
      title: "DEVIEW2018",
      tags: ["반응형", "다국어", "sass", "Interaction"],
    },
  ];
}

export const ProjectStoreImpl = new ProjectStore();
