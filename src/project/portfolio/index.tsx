import { useCallback, useState } from "react";
import { Global } from "@emotion/react";
import GlobalStyle from "./GlobalStyle";
import { Archiving, Home, Project, Skill } from "./page";
import styled from "@emotion/styled";
import { Header, Nave } from "./common";
import { useScrollRef } from "./hooks/useScrollRef";
import { useScroll } from "./hooks/useScroll";

const Wrap = styled.main`
  padding: 0 20px 14vw;
  color: #fff;
`;

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState("Home");

  const [homeRef] = useScrollRef(setCurrentSection, "Home");
  const [skillRef] = useScrollRef(setCurrentSection, "Skill");
  const [propjectRef] = useScrollRef(setCurrentSection, "Project");
  const [archivingRef] = useScrollRef(setCurrentSection, "Archiving");

  const scrollY = useScroll().scrollY;

  let skillY = skillRef.current?.offsetTop;
  let propjectY = propjectRef.current?.offsetTop;
  let archivingY = archivingRef.current?.offsetTop;

  const handleClickNave = useCallback(
    (id: string) => {
      switch (id) {
        case "Home":
          homeRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Skill":
          skillRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Project":
          propjectRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Archiving":
          archivingRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
      }
    },
    [archivingRef, homeRef, propjectRef, skillRef]
  );

  const handleScroll = useCallback(() => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [skillRef]);

  return (
    <>
      <Global styles={GlobalStyle()} />
      <Header />
      <Nave pposition={currentSection} onClick={handleClickNave} />
      <Wrap>
        <Home ref={homeRef} handleScroll={handleScroll} />
        <Skill
          ref={skillRef}
          className={!!skillY && scrollY >= skillY - 200 ? "show" : undefined}
        />
        <Project
          ref={propjectRef}
          className={
            !!propjectY && scrollY >= propjectY - 200 ? "show" : undefined
          }
        />
        <Archiving
          ref={archivingRef}
          className={
            !!archivingY && scrollY >= archivingY - 200 ? "show" : undefined
          }
        />
      </Wrap>
    </>
  );
};

export default Portfolio;
