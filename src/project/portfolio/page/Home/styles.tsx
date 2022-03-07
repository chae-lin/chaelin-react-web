import styled from "@emotion/styled";

export const Wrap = styled.div`
  padding: 0 20px;
`;

export const BackgroundBox = styled.div`
  position: relative;
  z-index: -1;
`;

export const BackgroundText = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 2vh;
  background: linear-gradient(
    90deg,
    rgba(90, 90, 90, 0) 20%,
    rgba(90, 90, 90, 0.15)
  );
  font-size: 11vh;
  font-weight: 900;
  line-height: 1;
  color: #45464e;
  writing-mode: vertical-lr;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleBox = styled.div`
  overflow: hidden;
  strong {
    display: block;
    margin-bottom: 40px;
    font-size: 35px;
    line-height: 1;
    color: #dc5361;
  }

  svg text {
    font-family: "Black Han Sans", cursive;
    font-size: 100px;
    fill: transparent;
    stroke-dasharray: 326px;
    @keyframes stroke {
      0% {
        stroke: #fff;
        stroke-width: 3px;
        stroke-dashoffset: 326px;
      }
      70% {
        fill: transparent;
      }
      98% {
        stroke: #fff;
        stroke-width: 3px;
      }
      100% {
        fill: #fff;
        stroke-dashoffset: 0px;
      }
    }
  }

  @media (max-width: 768px) {
    strong {
      margin-bottom: 0;
      font-size: 6vw;
      line-height: 1.5;
    }

    svg {
      &:not(:first-child) {
        margin-top: -5vw;
      }
      text {
        font-size: 12vw;
      }
    }
  }
`;
