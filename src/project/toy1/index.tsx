import { useCallback, useRef } from "react";
import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./GlobalStyle";
import { Archiving, Home, Project, Skill } from "./page";
import styled from "@emotion/styled";
import useTheme from "./hooks/useTheme";
import { Nave } from "./common";

const Wrap = styled.main`
  padding: 0 20px 16vw;
  color: #fff;
`;

const Portfolio = () => {
  const swiperRef = useRef() as any;
  const handleScroll = useCallback(() => {
    swiperRef.current?.swiper.slideTo(1);
  }, []);
  const [theme, onToggle] = useTheme();

  return (
    // <ThemeProvider theme={theme}>
    <>
      <Global styles={GlobalStyle()} />
      <Nave />
      <Wrap>
        <Home />
        <Skill />
        <Project />
        <Archiving />
      </Wrap>
    </>
    // </ThemeProvider>
  );
};

export default Portfolio;
