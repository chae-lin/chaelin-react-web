import React, { FC } from "react";
import * as S from "./styles";

export interface ScrollPops {
  handleScroll: (e: React.MouseEvent<HTMLElement>) => unknown;
}

export const Scroll: FC<ScrollPops> = ({ handleScroll }) => {
  return (
    <S.ScrollWrap className="scroll-wrap" onClick={handleScroll}>
      <S.ScrollText>SCROLL</S.ScrollText>
      <S.ScrollMouse />
    </S.ScrollWrap>
  );
};
