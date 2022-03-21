import { PageLayout } from "../../common";
import { SkillItem } from "./SkillItem";
import * as S from "./styles";

const dataList = [
  {
    title: "HTML5",
    percent: 95,
    text: "웹표준을 준수하며, 시멘틱태그를 사용한 시멘틱 마크업을 할 수 있습니다.",
  },
  {
    title: "CSS",
    percent: 95,
    text: "반응형 웹페이지를 주로 제작하였으며, animaion과 같은 인터렉션기능을 사용할 수 있습니다. 또한 css성능을 향상시킬 수 있습니다.",
  },
  {
    title: "Git",
    percent: 80,
    text: "GitLab을 통해 프로젝트 버전 관리를 진행하였으며, GitHu을 활용하여 스터디 및 포트폴리오 사이트를 관리합니다.",
  },
  {
    title: "Javascript",
    percent: 75,
    text: "javascript의 기본 문법을 익혀 웹게임을 제작하였으며, async와 await를 사용한 비동기 처리를 할 수 있습니다. 또한 서버와 통신하여 워크스페이스 생성기능을 구현하였습니다.",
  },
  {
    title: "React",
    percent: 60,
    text: "react Hooks을 사용한 함수형 컴포넌트를 제작할 수 있습니다. 또한 useMemo, useCallback 등을 사용하여 성능을 최적화 합니다.",
  },
  {
    title: "Typescript",
    percent: 60,
    text: "코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러와 버그를 사전에 제거할 수 있습니다.",
  },
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
