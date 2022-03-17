import { css } from "@emotion/react";

const GlobalCommonStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@100;300;500;900&display=swap");

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .blind {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  #root {
    min-width: 320px;
    height: 100%;
    background-color: #1f2029;
    word-break: keep-all;
  }

  .swiper-portfolio {
    touch-action: pan-x;

    & > .swiper-wrapper {
      flex-direction: column;
    }

    & > .swiper-pagination {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: flex-end;
      padding: 20px;
      z-index: 5;

      .swiper-pagination-bullet {
        position: relative;
        margin-right: 16px;
        padding: 5px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: #757575;
        cursor: pointer;

        &:last-of-type {
          margin-right: 0;
        }

        &:after {
          content: "";
          position: absolute;
          bottom: -0.2vw;
          left: 0;
          right: 0;
          width: 0;
          height: 0.2vw;
          background-color: #757575;
          transition: width cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.5s;
        }

        &.swiper-pagination-bullet-active:after {
          width: 100%;
        }
      }
    }
  }

  .swiper-project {
    touch-action: pan-y;

    .swiper-pagination {
      position: absolute;
      text-align: center;
      transition: 0.3s opacity;
      transform: translate3d(0, 0, 0);
      z-index: 10;
      bottom: 0;
      left: 0;
      width: 100%;

      .swiper-pagination-bullet {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin: 0 4px;
        border-radius: 50%;
        background: #8f8f8f;
        opacity: 0.2;
        cursor: pointer;
        &.swiper-pagination-bullet-active {
          opacity: 1;
        }
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      margin-top: -20px;
      border: solid #757575;
      border-width: 0 0 5px 5px;
      outline: none;
      z-index: 10;
      cursor: pointer;
      &.swiper-button-disabled {
        opacity: 0.2;
        cursor: auto;
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

    .swiper-wrapper {
      padding: 30px 0;
    }

    .swiper-slide {
      opacity: 0;
      transform: translateY(4vw);
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
      position: fixed;
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

  .swiper-portfolio,
  .swiper-project {
    overflow: hidden;
    position: relative;
    height: 100%;

    .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      box-sizing: content-box;
      transition-property: transform;
      transform: translate3d(0px, 0, 0);
      z-index: 1;
    }

    .swiper-slide {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      flex-shrink: 0;
      transition-property: transform;
    }
  }

  .swiper-slide-active {
    // home
    & .home-title {
      svg text {
        animation: stroke 1s linear;
        animation-fill-mode: forwards;
      }
    }

    // skill
    & .progress-bar {
      width: 100%;
      transition: width cubic-bezier(0.46, 0.03, 0.52, 0.96) 1s;
    }
    & .progress-percent {
      opacity: 1;
      transition: opacity cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.3s;
      transition-delay: 0.7s;
    }

    // swiper
    .swiper-horizontal {
      .swiper-slide {
        opacity: 1;
        transform: translateY(0);
        transition: all cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.7s;
        &:nth-of-type(2) {
          transition-delay: 0.1s;
        }
        &:nth-of-type(3) {
          transition-delay: 0.2s;
        }
        &:nth-of-type(4) {
          transition-delay: 0.3s;
        }
        &:nth-of-type(5) {
          transition-delay: 0.4s;
        }
        &:nth-of-type(6) {
          transition-delay: 0.5s;
        }
        &:nth-of-type(7) {
          transition-delay: 0.6s;
        }
      }
    }

    // archiving
    & .archiving-item {
      opacity: 1;
      transform: translateY(0);
      transition: opacity cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.7s,
        transform cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.7s;
      &:nth-of-type(2) {
        transition-delay: 0.1s;
      }
    }

    .scroll-wrap {
      opacity: 1;
    }
  }
`;

export default GlobalCommonStyle;
