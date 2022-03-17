import React from "react";
import * as S from "./styles";

export const Scroll = () => {
  return (
    <S.ScrollWrap className="scroll-wrap">
      <S.ScrollText>SCROLL</S.ScrollText>
      <S.ScrollMouse />
    </S.ScrollWrap>
  );
};
