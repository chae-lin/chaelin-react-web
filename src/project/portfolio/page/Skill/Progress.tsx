import React, { FC } from "react";
import * as S from "./styles";
interface Props {
  progressList: { title: string; percent: number; text: string }[];
}

export const Progress: FC<Props> = ({ progressList = [] }) => {
  return (
    <S.ProgressList>
      {progressList?.map(({ title, percent, text }) => (
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
      ))}
    </S.ProgressList>
  );
};
