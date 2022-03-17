import { Scroll } from "./Scroll";
import * as S from "./styles";

import bg1 from "../../assets/images/bg_pattern1.png";
import bg2 from "../../assets/images/bg_pattern2.png";

export const HomeContainer = () => {
  return (
    <>
      <S.TitleBox>
        <strong>You will see more than</strong>
        <h1 className="home-title">
          <svg width="100%" height="130">
            <text y="70%">whatever</text>
          </svg>
          <svg width="224" height="120">
            <text y="70%">you</text>
          </svg>
          <svg width="450" height="120">
            <text y="70%">imagine</text>
          </svg>
        </h1>
      </S.TitleBox>
      <S.BackgroundText>Hello Stranger</S.BackgroundText>
      <S.BackgroundImage1 style={{ backgroundImage: `url(${bg1})` }} />
      <S.BackgroundImage2 style={{ backgroundImage: `url(${bg2})` }} />
      <Scroll />
    </>
  );
};
