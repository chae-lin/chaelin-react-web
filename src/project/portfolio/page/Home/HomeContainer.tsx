import { forwardRef } from "react";
import { useScroll } from "../../hooks/useScroll";
import { Scroll } from "./Scroll";
import * as S from "./styles";

import bg1 from "../../assets/images/bg_pattern1.png";
import bg2 from "../../assets/images/bg_pattern2.png";

interface Props {
  handleScroll: (e: React.MouseEvent<HTMLElement>) => unknown;
}

export const HomeContainer = forwardRef<HTMLDivElement, Props>(
  ({ handleScroll }, ref) => {
    const scrollY = useScroll().scrollY;

    return (
      <S.HomeWrap ref={ref}>
        <S.TitleBox style={{ opacity: 1 - scrollY / 500 }}>
          <h1>
            I <S.DBox>d</S.DBox>
            <S.OBox>o</S.OBox> <b>everything</b> you want.
          </h1>
        </S.TitleBox>
        <S.BackgroundText style={{ top: scrollY / -2 + "px" }}>
          Hello Stranger
        </S.BackgroundText>
        <S.BackgroundImage
          style={{ backgroundImage: `url(${bg1})`, top: scrollY / -3.5 + "px" }}
        />
        <S.BackgroundImage
          style={{ backgroundImage: `url(${bg2})`, top: scrollY / -2.8 + "px" }}
        />
        <Scroll
          handleScroll={handleScroll}
          style={{ opacity: 1 - scrollY / 300 }}
        />
      </S.HomeWrap>
    );
  }
);

HomeContainer.displayName = "HomeContainer";
