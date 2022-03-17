import styled from "@emotion/styled";

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
  font-size: 12vh;
  line-height: 1;
  color: #45464e;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BackgroundImage1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: 50%;
  background-size: cover;
  animation: cloud1 3s infinite linear;

  @keyframes cloud1 {
    0%,
    100% {
      transform: translate(-3%, -4%);
    }
    50% {
      transform: translate(-4%, -3%);
    }
  }
`;

export const BackgroundImage2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: 50%;
  background-size: cover;
  animation: cloud2 3s infinite linear;

  @keyframes cloud2 {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(1%, 1%);
    }
  }
`;

export const TitleBox = styled.div`
  overflow: hidden;
  padding: 0 20px;
  z-index: 5;

  strong {
    display: block;
    margin-bottom: 12px;
    font-size: 35px;
    line-height: 1;
    color: #dc5361;
  }

  text {
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
      font-size: 4vw;
    }

    svg {
      width: 100%;
      height: 16vw;
    }

    text {
      font-size: 13vw;
    }
  }
`;

export const ScrollWrap = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  width: 60px;
  margin-left: -30px;
  opacity: 0;
`;

export const ScrollMouse = styled.span`
  display: block;
  position: relative;
  width: 30px;
  height: 50px;
  margin: 0 auto;
  border: 2px solid #757575;
  border-radius: 50px;
  box-sizing: border-box;

  &:before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: "";
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #757575;
    border-radius: 100%;
    animation: sdb 2s infinite;
    box-sizing: border-box;
  }

  @keyframes sdb {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      transform: translate(0, 20px);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const ScrollText = styled.span`
  display: block;
  padding-bottom: 10px;
  text-align: center;
  font-size: 12px;
  color: #757575;
`;
