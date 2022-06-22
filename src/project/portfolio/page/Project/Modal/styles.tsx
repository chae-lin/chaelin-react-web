import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  min-width: 320px;
  background-color: #f1f1f1;
  word-break: keep-all;
  z-index: 100;

  &.open-modal {
    animation: slideUp 1s ease-in-out 0s 1 normal forwards;
  }

  &.close-modal {
    animation: slideDown 0.5s ease-in-out 0s 1 normal forwards;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(+100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(+100%);
    }
  }

  .swiper-modal {
    overflow: hidden;
    position: relative;
    height: auto;

    .swiper-wrapper {
      display: flex;
      box-sizing: content-box;
    }

    .swiper-slide {
      position: relative;
      flex-shrink: 0;
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      bottom: 30%;
      display: block;
      width: 40px;
      height: 40px;
      border: solid #757575;
      border-width: 0 0 5px 5px;
      outline: none;
      z-index: 10;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .swiper-button-prev,
      .swiper-button-next {
        bottom: 20%;
        width: 30px;
        height: 30px;
        border-width: 0 0 4px 4px;
      }
    }

    .swiper-button-prev {
      left: 20px;
      transform: rotate(45deg);
    }

    .swiper-button-next {
      right: 20px;
      transform: rotate(-135deg);
    }

    .swiper-button-disabled {
      opacity: 0.2;
      cursor: auto;
    }
  }
`;

export const TopArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  padding: 0 20px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.35);
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 260px;
  }
`;

export const TopTitleBox = styled.div`
  text-align: center;
  z-index: 5;
  h2 {
    padding-bottom: 20px;
    font-size: 60px;
    line-height: 1;
    color: #fff;
  }
  strong {
    font-size: 30px;
    line-height: 1;
    color: #fff;
  }
  span {
    display: block;
    text-align: left;
    font-size: 20px;
    line-height: 1;
    color: #cfcfcf;
  }

  @media (max-width: 768px) {
    h2 {
      padding-bottom: 10px;
      font-size: 45px;
    }
    strong {
      font-size: 22px;
    }
  }
`;

export const AreaTitle = styled.h3`
  max-width: 1080px;
  margin: 0 auto;
  padding-bottom: 30px;
  font-size: 35px;
  line-height: 45px;
`;

export const SummartArea = styled.div`
  padding: 100px 20px;
  background-color: #fff;

  dl {
    display: flex;
    flex-wrap: wrap;
    max-width: 1080px;
    margin: 0 auto;
    gap: 20px;
  }
`;

export const SummartBox = styled.div`
  flex-basis: calc(25% - 15px);

  dt {
    padding-bottom: 12px;
    font-size: 18px;
    line-height: 25px;
    border-bottom: 2px solid #000;
  }
  dd {
    padding: 20px 5px 0;
  }

  li {
    position: relative;
    margin-bottom: 5px;
    padding-left: 10px;
    font-size: 15px;
    line-height: 25px;
    color: #757575;
    &:before {
      content: "";
      position: absolute;
      top: 10px;
      left: 0;
      width: 3px;
      height: 3px;
      background-color: #757575;
      border-radius: 50%;
    }
  }

  @media (max-width: 768px) {
    flex-basis: calc(50% - 10px);
  }
`;

export const OverViewArea = styled.div`
  padding: 100px 20px;
`;

export const OverViewContent = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

export const OverViewButtonBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

export const OverViewButton = styled("button", {
  shouldForwardProp: (props) => props !== "overViewLink",
})<{ overViewLink: string }>`
  display: inline-block;
  padding: 9px 35px;
  font-size: 18px;
  line-height: 28px;
  color: #fff;
  border-radius: 5px;
  border: none;
  background-color: #212121;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  transform-origin: 0 100%;
  text-decoration: none;

  ${({ overViewLink }) =>
    overViewLink &&
    css`
      cursor: pointer;

      &:hover {
        transform: skew(-10deg);
      }
    `}
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 40px;
  height: 40px;
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 7px;
    width: 24px;
    height: 3px;
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg) scaleX(1.5) translateY(-1px);
  }

  &:after {
    transform: rotate(-45deg) scaleX(1.5) translateY(1px);
    transform-origin: 25% 100%;
  }
`;
