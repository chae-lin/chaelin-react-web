import styled from "@emotion/styled";
import { SetionWrap } from "../../common";

export const ProjectList = styled.ul`
  display: flex;
  width: clamp(300px, 60vw, 1780px);
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 6vw 4vw;

  @media (max-width: 768px) {
    gap: 8vw;
  }
`;

export const ProjectWrap = styled.div`
  cursor: pointer;
  flex-basis: calc(50% - 2vw);
  opacity: 0.6;
  transition: opacity ease-in-out 0.1s;

  &:nth-child(2n) {
    margin-top: -6%;
  }

  &:hover {
    opacity: 1;
    animation: blink 1s ease-in-out infinite alternate;

    @keyframes blink {
      16.65% {
        transform: translateY(8px);
      }
      33.3% {
        transform: translateY(-6px);
      }
      49.95% {
        transform: translateY(4px);
      }
      66.6% {
        transform: translateY(-2px);
      }
      83.25% {
        transform: translateY(1px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const ProjectImage = styled("div", {
  shouldForwardProp: (props) => props !== "bgColor",
})<{ bgColor: string }>`
  overflow: hidden;
  position: relative;
  border-radius: 1vw;
  background-color: ${({ bgColor }) => bgColor};
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0.3vw solid #fff;
    border-radius: 1vw;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectTitle = styled.h3`
  padding: 1.2vw 1vw 0;
  font-size: 2vw;
  line-height: 1.3;
  color: #dc5361;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

export const ProjectTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  padding: 0.3vw 1vw 0;
  font-size: 1.3vw;
  line-height: 1.3;
  color: #fff;
  text-align: right;
  span + span {
    margin-left: 0.6vw;
  }

  @media (max-width: 768px) {
    padding: 0.6vw 1vw 0;
    font-size: 2.3vw;
  }
`;

export const Warp = styled(SetionWrap)`
  &.show {
  }
`;
