import React, { FC } from "react";
import * as S from "./styles";

export interface ScrollPops {
  handleScroll?: (e: React.MouseEvent<HTMLElement>) => unknown;
  style: React.CSSProperties;
}

export const Scroll: FC<ScrollPops> = ({ handleScroll, style }) => {
  return (
    <S.ScrollWrap className="scroll-wrap" onClick={handleScroll} style={style}>
      <S.ScrollText>SCROLL</S.ScrollText>
      <S.ScrollMouse />
    </S.ScrollWrap>
  );
};
