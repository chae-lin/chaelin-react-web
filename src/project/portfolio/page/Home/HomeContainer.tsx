import { Scroll } from "./Scroll";
import * as S from "./styles";

export const HomeContainer = () => {
  return (
    <>
      <S.BackgroundBox>
        <S.BackgroundText>Hello Stranger</S.BackgroundText>
      </S.BackgroundBox>
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
      <Scroll />
    </>
  );
};
