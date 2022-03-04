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

  #root {
    min-width: 320px;
    height: 100%;
    background-color: #1f2029;
  }

  .swiper {
    overflow: hidden;
    position: relative;
    height: 100%;
    touch-action: pan-x;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    transition-property: transform;
    transform: translate3d(0px, 0, 0);
    z-index: 1;
  }

  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    transition-property: transform;
  }

  .swiper-slide-active {
    // home
    .home-title {
      svg text {
        animation: stroke 1s linear;
        animation-fill-mode: forwards;
      }
    }

    .progress-bar {
      width: 100%;
      transition: width cubic-bezier(0.4, 0, 0.2, 1) 1s;
    }
    .progress-text {
      opacity: 1;
      transition: opacity cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
      transition-delay: 0.6s;
    }
  }
`;

export default GlobalCommonStyle;
