import { PageLayout } from "../../common";
import { SkillItem } from "./SkillItem";
import * as S from "./styles";

const dataList = [
  {
    title: "HTML5",
    percent: 95,
    text: "웹접근성을 준수하여 태그를 사용합니다.",
  },
  {
    title: "Git",
    percent: 70,
    text: "GitLab을 통해 프로젝트 버전 관리를 진행하였으며, GitHu을 활용하여 블로그 및 포트폴리오 사이트를 관리합니다.",
  },
  {
    title: "CSS",
    percent: 95,
    text: "네이버 검색 페이지 작성시 IE7까지 대응이 필요한 페이지를 제작한 경험이 있습니다.",
  },
  { title: "SCSS", percent: 80, text: "sdfsdf" },
  {
    title: "Javascript",
    percent: 75,
    text: "javascript의 기본 문법을 익혀 웹게임을 제작하고 ajax를 통해 서버와 통신하여 워크스페이스 생성기능을 구현하였습니다.",
  },
  { title: "React", percent: 60, text: "sdfsdf" },
  { title: "Typescript", percent: 40, text: "sdfsdf" },
];

export const SkillContainer = () => {
  return (
    <PageLayout title="Skill">
      <S.SkillList>
        {dataList?.map(({ title, percent, text }, index) => (
          <SkillItem key={index} title={title} percent={percent} text={text} />
        ))}
      </S.SkillList>
    </PageLayout>
  );
};
