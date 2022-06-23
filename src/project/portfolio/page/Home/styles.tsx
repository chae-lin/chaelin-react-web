import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rotate1 = keyframes`
  0% {
    transform: rotate( 90deg );
  }
  70% {
    transform: rotate( 90deg );
  }
  100% {
    transform: rotate( 720deg );
  }
`;

const rotate2 = keyframes`
  100% {
    transform: rotate( 720deg );
  }
`;

const doRotation = keyframes`
  0% {
    transform: translateX(-50%) rotate( 0deg );
  }
  100% {
    transform: translateX(-50%) rotate( 360deg );
  }
`;

const BlinkEffect = keyframes`
  40% {
    opacity: 0;
  }
  42% {
    opacity: 1;
  }
  45% {
    opacity: 0;
  }
  47% {
    opacity: 1;
  }
`;

const ScrollDown = keyframes`
  0% {
    top: 16%;
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    top: 72%;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const HomeWrap = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const TitleBox = styled.div`
  overflow: hidden;
  position: relative;
  margin-top: -13vh;
  text-align: center;
  z-index: 5;

  h1 {
    font-size: clamp(50px, 9vw, 120px);
    line-height: 1.1;
    letter-spacing: -1px;
  }

  b {
    display: block;
    font-size: clamp(56px, 10vw, 140px);
    color: #dc5361;
    animation: ${BlinkEffect} 3s step-end infinite;
  }
`;

export const BackgroundText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 2vh;
  background: linear-gradient(
    90deg,
    rgba(90, 90, 90, 0) 20%,
    rgba(90, 90, 90, 0.15)
  );
  font-size: 9vw;
  line-height: 1;
  color: #45464e;
  white-space: nowrap;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const DBox = styled.span`
  position: relative;
  z-index: 5;
`;

export const OBox = styled.span`
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -1px;
    padding-top: 120%;
    padding-left: 120%;
    border-radius: 50%;
    border: 0.5vw dashed #dc5361;
    animation: ${doRotation} 3s linear infinite;
  }
`;

export const Figure = styled.span<{
  name?: string;
  position: { top?: number; left?: number; right?: number; bottom?: number };
  type?: "type1" | "type2";
}>`
  position: absolute;
  ${
    ({ name, position, type }) => {
      for (const direction in position) {
        return css`
          ${direction}: position[direction];
        `;
      }

      name === "Cross"
        ? css`
            &:after {
              display: inline-block;
              content: "\00d7";
              font-size: 15pt;
            }
          `
        : css`
            border: 1px solid red;
            border-radius: 50%;
          `;
    }
    // css`
    //   top: ${position?.top};
    //   left: ${position?.left};
    //   right: ${position?.right};
    //   bottom: ${position?.bottom};
    // `
  };
`;

export const ScrollWrap = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

export const ScrollMouse = styled.span`
  display: block;
  position: relative;
  width: 4vw;
  max-width: 34px;
  height: 6.6vw;
  max-height: 56px;
  margin: 0 auto;
  border: 2px solid #757575;
  border-radius: 2vw;
  box-sizing: border-box;

  &:before {
    position: absolute;
    top: 16%;
    left: 50%;
    content: "";
    width: min(0.8vw, 7px);
    height: min(0.8vw, 7px);
    background-color: #757575;
    border-radius: 100%;
    transform: translateX(-50%);
    box-sizing: border-box;
    animation: ${ScrollDown} 2s infinite;
  }
`;

export const ScrollText = styled.span`
  display: block;
  padding-bottom: 1.4vw;
  text-align: center;
  font-size: clamp(10px, 1.6vw, 20px);
  color: #757575;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: -20px;
  right: -20px;
  height: 100%;
  background-position: 50%;
  opacity: 0.4;
  background-size: cover;

  @media (max-width: 768px) {
    background-position: 10%;
  }
`;
