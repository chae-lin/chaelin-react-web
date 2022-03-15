import { FC } from "react";
import * as S from "./styles";
interface Props {
  title: string;
  percent: number;
  text: string;
}

export const SkillItem: FC<Props> = ({ title, percent, text }) => {
  return (
    <>
      <S.ProgressBox>
        <S.Title>{title}</S.Title>
        <S.BarArea>
          <S.BarInner percent={percent}>
            <S.Bar className="progress-bar" />
          </S.BarInner>
          <S.Percent className="progress-percent">{percent}%</S.Percent>
        </S.BarArea>
        <S.Text>{text}</S.Text>
      </S.ProgressBox>
    </>
  );
};
