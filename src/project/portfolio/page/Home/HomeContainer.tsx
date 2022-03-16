import { Scroll } from "./Scroll";
import * as S from "./styles";

export const HomeContainer = () => {
  return (
    <S.Wrap>
      <S.BackgroundBox>
        <S.BackgroundText>Hello Stranger</S.BackgroundText>
      </S.BackgroundBox>
      <S.TitleBox>
        <strong>You will see more than</strong>
        <h1 className="home-title">
          <svg width="530" height="106" viewBox="0 0 530 106">
            <text y="82">whatever</text>
          </svg>
          <br />
          <svg width="250" height="106" viewBox="0 0 250 106">
            <text y="82">you</text>
          </svg>
          <svg width="450" height="106" viewBox="0 0 450 106">
            <text y="82">imagine</text>
          </svg>
        </h1>
      </S.TitleBox>
      <Scroll />
    </S.Wrap>
  );
};
