import styled from "@emotion/styled";

export const SetionWrap = styled.section`
  margin-top: 17vw;
  padding-top: 3vw;
  box-sizing: border-box;
`;

export const SetionTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: clamp(60px, 12vw, 400px);
  font-size: clamp(46px, 6vw, 140px);
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 36%;
    left: -4px;
    right: -4px;
    height: 30%;
    background-color: #7e7e7e;
    opacity: 0.5;
    z-index: -1;
    transform: rotate(6deg);
  }
`;

export interface SectionProps {
  className: string | undefined;
}
