import { forwardRef } from "react";
import { SkillItem } from "./SkillItem";
import { SkillStoreImpl } from "../../stores/SkillStore";
import { SectionProps, SetionTitle } from "../../common";
import * as S from "./styles";

export const SkillContainer = forwardRef<HTMLDivElement, SectionProps>(
  ({ className }, ref) => {
    return (
      <S.Warp ref={ref} className={className}>
        <SetionTitle>Skill</SetionTitle>
        <S.SkillList>
          {SkillStoreImpl.dataList.map(({ title, percent, text }, index) => (
            <SkillItem
              key={"skill" + index}
              title={title}
              percent={percent}
              text={text}
            />
          ))}
        </S.SkillList>
      </S.Warp>
    );
  }
);

SkillContainer.displayName = "SkillContainer";
