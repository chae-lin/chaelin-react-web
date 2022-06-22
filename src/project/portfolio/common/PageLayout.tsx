import styled from "@emotion/styled";

export const SetionWrap = styled.section`
  margin-top: 17vw;
  padding-top: 3vw;
  box-sizing: border-box;
`;

export const SetionTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 110px;
  font-size: 90px;
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

  @media (max-width: 768px) {
    margin-bottom: 55px;
    font-size: 42px;
  }
`;

export interface SectionProps {
  className: string | undefined;
}
