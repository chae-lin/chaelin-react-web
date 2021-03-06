import { forwardRef } from "react";
import { SectionProps, SetionTitle } from "../../common";
import { ArchiveItem } from "./ArchiveItem";
import logoTi from "../../assets/images/logo-tistory.png";
import logoGit from "../../assets/images/logo-github.png";
import * as S from "./styles";

export const ArchiveContainer = forwardRef<HTMLDivElement, SectionProps>(
  ({ className }, ref) => {
    return (
      <S.Warp ref={ref} className={className}>
        <SetionTitle>Archiving</SetionTitle>
        <S.ArchiveList>
          <ArchiveItem
            title="Git Hub"
            imgUrl={logoGit}
            text="소스 코드 저장소"
            link="https://github.com/chae-lin"
            infos={[
              "learn-javascript-webgame",
              "laern-react-webgame",
              "learn-typescript",
              "learn-webpack",
              "learn-redux_vs_mobx",
              "slack-clone-react",
            ]}
          />
          <ArchiveItem
            title="Tistory"
            imgUrl={logoTi}
            text="스터디 기록 목적의 블로그"
            link="https://cherry-dev.tistory.com/"
            infos={[
              "Java Script",
              "Type Script",
              "React",
              "Webpack",
              "Git & GitHub",
              "Style",
              "Challenges",
            ]}
          />
        </S.ArchiveList>
      </S.Warp>
    );
  }
);

ArchiveContainer.displayName = "ArchiveContainer";
