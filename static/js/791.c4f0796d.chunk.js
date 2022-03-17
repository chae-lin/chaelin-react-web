"use strict";(self.webpackChunkchaelin_react_web=self.webpackChunkchaelin_react_web||[]).push([[791],{791:function(n,t,e){e.r(t),e.d(t,{default:function(){return Zt}});var i,r,o,a,s,p,l,d,c,m,x,f,h=e(2791),u=e(2554),g=e(7244),b=e(3910),w=e(168),y=(0,u.iv)(i||(i=(0,w.Z)(['\n  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@100;300;500;900&display=swap");\n\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    vertical-align: baseline;\n  }\n\n  html {\n    height: 100%;\n  }\n\n  body {\n    height: 100%;\n    margin: 0;\n    font-family: "Noto Sans KR", sans-serif;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n\n  ol,\n  ul {\n    list-style: none;\n  }\n\n  blockquote,\n  q {\n    quotes: none;\n  }\n\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  .blind {\n    position: absolute;\n    clip: rect(0 0 0 0);\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n  }\n\n  #root {\n    min-width: 320px;\n    height: 100%;\n    background-color: #1f2029;\n    word-break: keep-all;\n  }\n\n  .swiper-portfolio {\n    touch-action: pan-x;\n\n    & > .swiper-wrapper {\n      flex-direction: column;\n    }\n\n    & > .swiper-pagination {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: flex;\n      justify-content: flex-end;\n      padding: 20px;\n      background-color: #1f2029;\n      z-index: 5;\n\n      .swiper-pagination-bullet {\n        position: relative;\n        margin-right: 16px;\n        padding: 5px;\n        font-size: 16px;\n        line-height: 24px;\n        font-weight: 600;\n        color: #757575;\n        cursor: pointer;\n\n        &:last-of-type {\n          margin-right: 0;\n        }\n\n        &:after {\n          content: "";\n          position: absolute;\n          bottom: -0.2vw;\n          left: 0;\n          right: 0;\n          width: 0;\n          height: 0.2vw;\n          background-color: #757575;\n          transition: width cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.5s;\n        }\n\n        &.swiper-pagination-bullet-active:after {\n          width: 100%;\n        }\n      }\n    }\n  }\n\n  .swiper-project {\n    touch-action: pan-y;\n\n    .swiper-pagination {\n      position: absolute;\n      text-align: center;\n      transition: 0.3s opacity;\n      transform: translate3d(0, 0, 0);\n      z-index: 10;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n\n      .swiper-pagination-bullet {\n        display: inline-block;\n        width: 12px;\n        height: 12px;\n        margin: 0 4px;\n        border-radius: 50%;\n        background: #8f8f8f;\n        opacity: 0.2;\n        cursor: pointer;\n        &.swiper-pagination-bullet-active {\n          opacity: 1;\n        }\n      }\n    }\n\n    .swiper-button-prev,\n    .swiper-button-next {\n      position: absolute;\n      top: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 40px;\n      height: 40px;\n      margin-top: -20px;\n      border: solid #757575;\n      border-width: 0 0 5px 5px;\n      outline: none;\n      z-index: 10;\n      cursor: pointer;\n      &.swiper-button-disabled {\n        opacity: 0.2;\n        cursor: auto;\n      }\n    }\n\n    .swiper-button-prev {\n      left: 20px;\n      transform: rotate(45deg);\n    }\n\n    .swiper-button-next {\n      right: 20px;\n      transform: rotate(-135deg);\n    }\n\n    .swiper-wrapper {\n      padding: 30px 0;\n    }\n\n    .swiper-slide {\n      opacity: 0;\n      transform: translateY(4vw);\n    }\n  }\n\n  .swiper-modal {\n    overflow: hidden;\n    position: relative;\n    height: auto;\n\n    .swiper-wrapper {\n      display: flex;\n      box-sizing: content-box;\n    }\n\n    .swiper-slide {\n      position: relative;\n      flex-shrink: 0;\n    }\n\n    .swiper-button-prev,\n    .swiper-button-next {\n      position: fixed;\n      bottom: 30%;\n      display: block;\n      width: 40px;\n      height: 40px;\n      border: solid #757575;\n      border-width: 0 0 5px 5px;\n      outline: none;\n      z-index: 10;\n      cursor: pointer;\n    }\n\n    @media (max-width: 768px) {\n      .swiper-button-prev,\n      .swiper-button-next {\n        width: 30px;\n        height: 30px;\n        border-width: 0 0 4px 4px;\n      }\n    }\n\n    .swiper-button-prev {\n      left: 20px;\n      transform: rotate(45deg);\n    }\n\n    .swiper-button-next {\n      right: 20px;\n      transform: rotate(-135deg);\n    }\n\n    .swiper-button-disabled {\n      opacity: 0.2;\n      cursor: auto;\n    }\n  }\n\n  .swiper-portfolio,\n  .swiper-project {\n    overflow: hidden;\n    position: relative;\n    height: 100%;\n\n    .swiper-wrapper {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      box-sizing: content-box;\n      transition-property: transform;\n      transform: translate3d(0px, 0, 0);\n      z-index: 1;\n    }\n\n    .swiper-slide {\n      position: relative;\n      display: flex;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      flex-shrink: 0;\n      transition-property: transform;\n    }\n  }\n\n  .swiper-slide-active {\n    // home\n    & .home-title {\n      svg text {\n        animation: stroke 1s linear;\n        animation-fill-mode: forwards;\n      }\n    }\n\n    // skill\n    & .progress-bar {\n      width: 100%;\n      transition: width cubic-bezier(0.46, 0.03, 0.52, 0.96) 1s;\n    }\n    & .progress-percent {\n      opacity: 1;\n      transition: opacity cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.3s;\n      transition-delay: 0.7s;\n    }\n\n    // swiper\n    .swiper-horizontal {\n      .swiper-slide {\n        opacity: 1;\n        transform: translateY(0);\n        transition: all cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.7s;\n        &:nth-of-type(2) {\n          transition-delay: 0.1s;\n        }\n        &:nth-of-type(3) {\n          transition-delay: 0.2s;\n        }\n        &:nth-of-type(4) {\n          transition-delay: 0.3s;\n        }\n        &:nth-of-type(5) {\n          transition-delay: 0.4s;\n        }\n        &:nth-of-type(6) {\n          transition-delay: 0.5s;\n        }\n        &:nth-of-type(7) {\n          transition-delay: 0.6s;\n        }\n      }\n    }\n\n    // archiving\n    & .archiving-item {\n      opacity: 1;\n      transform: translateY(0);\n      transition: opacity cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.7s,\n        transform cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.7s;\n      &:nth-of-type(2) {\n        transition-delay: 0.1s;\n      }\n    }\n\n    .scroll-wrap {\n      opacity: 1;\n    }\n  }\n']))),v=e(9958),j=v.Z.span(r||(r=(0,w.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding-top: 2vh;\n  background: linear-gradient(\n    90deg,\n    rgba(90, 90, 90, 0) 20%,\n    rgba(90, 90, 90, 0.15)\n  );\n  font-size: 12vh;\n  line-height: 1;\n  color: #45464e;\n  -ms-writing-mode: tb-lr;\n  writing-mode: vertical-lr;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]))),k=v.Z.div(o||(o=(0,w.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-size: cover;\n  animation: cloud1 3s infinite linear;\n\n  @keyframes cloud1 {\n    0%,\n    100% {\n      transform: translate(-3%, -4%);\n    }\n    50% {\n      transform: translate(-4%, -3%);\n    }\n  }\n"]))),I=v.Z.div(a||(a=(0,w.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-size: cover;\n  animation: cloud2 3s infinite linear;\n\n  @keyframes cloud2 {\n    0%,\n    100% {\n      transform: translate(0, 0);\n    }\n    50% {\n      transform: translate(1%, 1%);\n    }\n  }\n"]))),S=v.Z.div(s||(s=(0,w.Z)(['\n  overflow: hidden;\n  padding: 0 20px;\n  z-index: 5;\n\n  strong {\n    display: block;\n    margin-bottom: 12px;\n    font-size: 35px;\n    line-height: 1;\n    color: #dc5361;\n  }\n\n  text {\n    font-family: "Black Han Sans", cursive;\n    font-size: 100px;\n    fill: transparent;\n    stroke-dasharray: 326px;\n\n    @keyframes stroke {\n      0% {\n        stroke: #fff;\n        stroke-width: 3px;\n        stroke-dashoffset: 326px;\n      }\n      70% {\n        fill: transparent;\n      }\n      98% {\n        stroke: #fff;\n        stroke-width: 3px;\n      }\n      100% {\n        fill: #fff;\n        stroke-dashoffset: 0px;\n      }\n    }\n  }\n\n  @media (max-width: 768px) {\n    strong {\n      font-size: 4vw;\n    }\n\n    svg {\n      width: 100%;\n      height: 16vw;\n    }\n\n    text {\n      font-size: 13vw;\n    }\n  }\n']))),Z=v.Z.div(p||(p=(0,w.Z)(["\n  position: absolute;\n  bottom: 2%;\n  left: 50%;\n  width: 60px;\n  margin-left: -30px;\n  opacity: 0;\n"]))),T=v.Z.span(l||(l=(0,w.Z)(['\n  display: block;\n  position: relative;\n  width: 30px;\n  height: 50px;\n  margin: 0 auto;\n  border: 2px solid #757575;\n  border-radius: 50px;\n  box-sizing: border-box;\n\n  &:before {\n    position: absolute;\n    top: 10px;\n    left: 50%;\n    content: "";\n    width: 6px;\n    height: 6px;\n    margin-left: -3px;\n    background-color: #757575;\n    border-radius: 100%;\n    animation: sdb 2s infinite;\n    box-sizing: border-box;\n  }\n\n  @keyframes sdb {\n    0% {\n      transform: translate(0, 0);\n      opacity: 0;\n    }\n    40% {\n      opacity: 1;\n    }\n    80% {\n      transform: translate(0, 20px);\n      opacity: 0;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n']))),z=v.Z.span(d||(d=(0,w.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-align: center;\n  font-size: 12px;\n  color: #757575;\n"]))),E=e(184),V=function(){return(0,E.jsxs)(Z,{className:"scroll-wrap",children:[(0,E.jsx)(z,{children:"SCROLL"}),(0,E.jsx)(T,{})]})},A=e(4251),C=e(4763),L=function(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(S,{children:[(0,E.jsx)("strong",{children:"You will see more than"}),(0,E.jsxs)("h1",{className:"home-title",children:[(0,E.jsx)("svg",{width:"100%",height:"130",children:(0,E.jsx)("text",{y:"70%",children:"whatever"})}),(0,E.jsx)("svg",{width:"224",height:"120",children:(0,E.jsx)("text",{y:"70%",children:"you"})}),(0,E.jsx)("svg",{width:"450",height:"120",children:(0,E.jsx)("text",{y:"70%",children:"imagine"})})]})]}),(0,E.jsx)(j,{children:"Hello Stranger"}),(0,E.jsx)(k,{style:{backgroundImage:"url(".concat(A,")")}}),(0,E.jsx)(I,{style:{backgroundImage:"url(".concat(C,")")}}),(0,E.jsx)(V,{})]})},_=v.Z.h2(c||(c=(0,w.Z)(['\n  position: relative;\n  display: inline-block;\n  margin-bottom: 70px;\n  font-size: 90px;\n  &::before {\n    content: "";\n    position: absolute;\n    top: 36%;\n    left: -4px;\n    right: -4px;\n    height: 30%;\n    background-color: #5e5e5e;\n    opacity: 0.5;\n    z-index: -1;\n    transform: rotate(6deg);\n  }\n\n  @media (max-width: 768px) {\n    margin-bottom: 30px;\n    font-size: 42px;\n  }\n']))),B=(0,v.Z)("div",{shouldForwardProp:function(n){return"type"!==n}})(m||(m=(0,w.Z)(["\n  width: 100%;\n  box-sizing: border-box;\n  ","\n"])),(function(n){return"project"===n.type?(0,u.iv)(x||(x=(0,w.Z)(["\n          h2 {\n            margin: 0 20px 40px;\n\n            @media (max-width: 768px) {\n              margin: 0 20px;\n            }\n          }\n        "]))):(0,u.iv)(f||(f=(0,w.Z)(["\n          padding: 0 20px;\n        "])))})),P=function(n){var t=n.type,e=void 0===t?"":t,i=n.title,r=n.children;return(0,E.jsxs)(B,{type:e,children:[(0,E.jsx)(_,{children:i}),r]})},U=e(4164),Y=document.createElement("div");Y.setAttribute("id","modal-root"),document.body.appendChild(Y);var R,F,N,H,M,W,q,D,O,G,J,K,X,Q,$,nn,tn,en,rn,on,an,sn,pn,ln,dn,cn,mn,xn,fn,hn,un,gn=function(n){var t=n.children;return U.createPortal(t,Y)},bn=(v.Z.div(R||(R=(0,w.Z)(["\n  padding: 0 20px;\n"]))),v.Z.div(F||(F=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1200px;\n  margin: 0 auto;\n  gap: 5.6vw;\n\n  @media (max-width: 768px) {\n    gap: 12px;\n  }\n"])))),wn=v.Z.div(N||(N=(0,w.Z)(["\n  position: relative;\n  width: 21vw;\n\n  .path {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n    animation: dash 5s linear alternate infinite;\n  }\n\n  @keyframes dash {\n    from {\n      stroke-dashoffset: 822;\n    }\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n\n  @media (max-width: 768px) {\n    width: 146px;\n  }\n\n  @media (max-width: 350px) {\n    width: 130px;\n  }\n"]))),yn=v.Z.h3(H||(H=(0,w.Z)(["\n  margin-bottom: 24px;\n  font-size: 26px;\n  color: #fff;\n\n  @media (max-width: 768px) {\n    margin-bottom: 12px;\n    font-size: 18px;\n  }\n"]))),vn=v.Z.div(M||(M=(0,w.Z)(["\n  overflow: hidden;\n  position: relative;\n  height: 20px;\n  border-radius: 16px;\n  background-color: #3e404c;\n\n  @media (max-width: 768px) {\n    height: 16px;\n  }\n"]))),jn=(0,v.Z)("div",{shouldForwardProp:function(n){return"percent"!==n}})(W||(W=(0,w.Z)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: ","%;\n"])),(function(n){return n.percent})),kn=v.Z.span(q||(q=(0,w.Z)(["\n  display: block;\n  width: 0;\n  height: 100%;\n  background-color: #dc5361;\n  border-radius: 16px;\n"]))),In=v.Z.span(D||(D=(0,w.Z)(["\n  position: absolute;\n  top: 2px;\n  left: 0;\n  margin-left: 10px;\n  font-size: 15px;\n  color: #000;\n  opacity: 0;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),Sn=v.Z.p(O||(O=(0,w.Z)(["\n  margin-top: 6px;\n  font-size: 14px;\n  line-height: 1.4;\n  font-weight: 300;\n  color: #8f8f8f;\n\n  @media (max-width: 768px) {\n    font-size: 10px;\n  }\n"]))),Zn=function(n){var t=n.title,e=n.percent,i=n.text;return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(wn,{children:[(0,E.jsx)(yn,{children:t}),(0,E.jsxs)(vn,{children:[(0,E.jsx)(jn,{percent:e,children:(0,E.jsx)(kn,{className:"progress-bar"})}),(0,E.jsxs)(In,{className:"progress-percent",children:[e,"%"]})]}),(0,E.jsx)(Sn,{children:i})]})})},Tn=[{title:"HTML5",percent:95,text:"\uc6f9\ud45c\uc900\uc744 \uc900\uc218\ud558\uba70, \uc2dc\uba58\ud2f1\ud0dc\uadf8\ub97c \uc0ac\uc6a9\ud55c \uc2dc\uba58\ud2f1 \ub9c8\ud06c\uc5c5\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{title:"CSS",percent:95,text:"\ubc18\uc751\ud615 \uc6f9\ud398\uc774\uc9c0\ub97c \uc8fc\ub85c \uc81c\uc791\ud558\uc600\uc73c\uba70, animaion\uacfc \uac19\uc740 \uc778\ud130\ub809\uc158\uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c css\uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."},{title:"Git",percent:80,text:"GitLab\uc744 \ud1b5\ud574 \ud504\ub85c\uc81d\ud2b8 \ubc84\uc804 \uad00\ub9ac\ub97c \uc9c4\ud589\ud558\uc600\uc73c\uba70, GitHu\uc744 \ud65c\uc6a9\ud558\uc5ec \uc2a4\ud130\ub514 \ubc0f \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc0ac\uc774\ud2b8\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4."},{title:"Javascript",percent:75,text:"javascript\uc758 \uae30\ubcf8 \ubb38\ubc95\uc744 \uc775\ud600 \uc6f9\uac8c\uc784\uc744 \uc81c\uc791\ud558\uc600\uc73c\uba70, async\uc640 await\ub97c \uc0ac\uc6a9\ud55c \ube44\ub3d9\uae30 \ucc98\ub9ac\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc11c\ubc84\uc640 \ud1b5\uc2e0\ud558\uc5ec \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \uc0dd\uc131\uae30\ub2a5\uc744 \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4."},{title:"React",percent:60,text:"react Hooks\uc744 \uc0ac\uc6a9\ud55c \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc81c\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c useMemo, useCallback \ub4f1\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc131\ub2a5\uc744 \ucd5c\uc801\ud654 \ud569\ub2c8\ub2e4."},{title:"Typescript",percent:60,text:"\ucf54\ub4dc\uc5d0 \ubaa9\uc801\uc744 \uba85\uc2dc\ud558\uace0 \ubaa9\uc801\uc5d0 \ub9de\uc9c0 \uc54a\ub294 \ud0c0\uc785\uc758 \ubcc0\uc218\ub098 \ud568\uc218\ub4e4\uc5d0\uc11c \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ucf1c \ubc84\uadf8\ub97c \uc0ac\uc804\uc5d0 \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}],zn=function(){return(0,E.jsx)(P,{title:"Skill",children:(0,E.jsx)(bn,{children:null===Tn||void 0===Tn?void 0:Tn.map((function(n,t){var e=n.title,i=n.percent,r=n.text;return(0,E.jsx)(Zn,{title:e,percent:i,text:r},t)}))})})},En=v.Z.div(G||(G=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: 768px) {\n    flex-wrap: wrap;\n  }\n"]))),Vn=v.Z.div(J||(J=(0,w.Z)(["\n  flex-basis: 440px;\n  margin: 0 30px;\n  padding: 30px;\n  border-radius: 20px;\n  background-color: #fff;\n  box-shadow: 4px 8px 10px 4px #787878;\n  opacity: 0;\n  transform: translateY(30px);\n  box-sizing: border-box;\n\n  @media (max-width: 768px) {\n    flex-basis: 370px;\n    margin: 0;\n    padding: 16px;\n    border-radius: 12px;\n    & + & {\n      margin-top: 20px;\n    }\n  }\n"]))),An=v.Z.h3(K||(K=(0,w.Z)(["\n  width: 168px;\n  height: 47px;\n  margin-bottom: 16px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-width: 768px) {\n    width: 120px;\n    height: 34px;\n    margin-bottom: 12px;\n  }\n"]))),Cn=v.Z.p(X||(X=(0,w.Z)(['\n  font-size: 20px;\n  button {\n    position: relative;\n    border: none;\n    background-color: transparent;\n    font-size: 22px;\n    font-weight: 800;\n    color: #dc5361;\n    cursor: pointer;\n    &:before {\n      content: "";\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: -3px;\n      height: 0;\n      background-color: #9d9d9d4a;\n      border-radius: 4px;\n      transition: height cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.3s;\n      z-index: -1;\n    }\n\n    &:hover:before {\n      height: 65%;\n    }\n  }\n\n  @media (max-width: 768px) {\n    font-size: 16px;\n    button {\n      font-size: 18px;\n    }\n  }\n']))),Ln=v.Z.ul(Q||(Q=(0,w.Z)(["\n  margin-top: 18px;\n\n  @media (max-width: 768px) {\n    margin-top: 12px;\n  }\n"]))),_n=v.Z.li($||($=(0,w.Z)(['\n  display: inline-flex;\n  width: 100%;\n  align-items: center;\n  font-size: 16px;\n  line-height: 1.5;\n\n  &:before {\n    content: "";\n    width: 4px;\n    height: 4px;\n    margin-right: 12px;\n    border-radius: 50%;\n    background-color: #1f2029;\n  }\n\n  @media (max-width: 768px) {\n    width: 50%;\n    font-size: 11px;\n\n    &:before {\n      width: 3px;\n      height: 3px;\n    }\n  }\n']))),Bn=function(n){var t=n.title,e=n.imgUrl,i=n.text,r=n.link,o=n.infos;return(0,E.jsxs)(Vn,{className:"archiving-item",children:[(0,E.jsx)(An,{children:(0,E.jsx)("img",{src:e,alt:t})}),(0,E.jsxs)(Cn,{children:[(0,E.jsx)("button",{onClick:function(){return window.open(r,"_blank")},children:i}),"\uc785\ub2c8\ub2e4."]}),(0,E.jsx)(Ln,{children:o.map((function(n,t){return(0,E.jsx)(_n,{children:n},t)}))})]})},Pn=e(8931),Un=e(4174),Yn=function(){return(0,E.jsx)(P,{title:"Archiving",children:(0,E.jsxs)(En,{children:[(0,E.jsx)(Bn,{title:"Git Hub",imgUrl:Un,text:"\uc18c\uc2a4 \ucf54\ub4dc \uc800\uc7a5\uc18c",link:"https://github.com/chae-lin",infos:["learn-javascript-webgame","laern-react-webgame","learn-typescript","learn-webpack","learn-redux_vs_mobx","slack-clone-react"]}),(0,E.jsx)(Bn,{title:"Tistory",imgUrl:Pn,text:"\uc2a4\ud130\ub514 \uae30\ub85d \ubaa9\uc801\uc758 \ube14\ub85c\uadf8",link:"https://cherry-dev.tistory.com/",infos:["Java Script","Type Script","React","Webpack","Git & GitHub","Style","Challenges"]})]})})},Rn=e(885),Fn=v.Z.div(nn||(nn=(0,w.Z)(["\n  cursor: pointer;\n  opacity: 0.6;\n  transition: opacity ease-in-out 0.1s;\n  &:hover {\n    opacity: 1;\n    animation: blink 1s ease-in-out infinite alternate;\n\n    @keyframes blink {\n      16.65% {\n        transform: translateY(8px);\n      }\n      33.3% {\n        transform: translateY(-6px);\n      }\n      49.95% {\n        transform: translateY(4px);\n      }\n      66.6% {\n        transform: translateY(-2px);\n      }\n      83.25% {\n        transform: translateY(1px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n  }\n"]))),Nn=(0,v.Z)("div",{shouldForwardProp:function(n){return"bgColor"!==n}})(tn||(tn=(0,w.Z)(["\n  overflow: hidden;\n  position: relative;\n  border-radius: 1vw;\n  background-color: ",';\n  &:after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border: 0.3vw solid #fff;\n    border-radius: 1vw;\n  }\n  img {\n    width: 100%;\n    height: 100%;\n  }\n'])),(function(n){return n.bgColor})),Hn=v.Z.h3(en||(en=(0,w.Z)(["\n  padding: 20px 10px 0;\n  font-size: 20px;\n  line-height: 1.3;\n  color: #dc5361;\n  text-align: right;\n"]))),Mn=v.Z.div(rn||(rn=(0,w.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: end;\n  padding: 4px 10px 0;\n  font-size: 16px;\n  line-height: 1.3;\n  color: #fff;\n  text-align: right;\n  span + span {\n    margin-left: 0.6vw;\n  }\n"]))),Wn=function(n){var t=n.imgUrl,e=n.title,i=n.tags,r=n.bgColor,o=void 0===r?"":r,a=n.handleClick;return(0,E.jsxs)(Fn,{onClick:a,children:[(0,E.jsx)(Nn,{bgColor:o,children:(0,E.jsx)("img",{src:t,alt:e})}),(0,E.jsx)(Hn,{children:e}),(0,E.jsx)(Mn,{children:i.map((function(n,t){return(0,E.jsxs)("span",{children:["#",n]},t)}))})]})},qn=v.Z.div(on||(on=(0,w.Z)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  min-height: 100%;\n  background-color: #fff;\n  word-break: keep-all;\n  z-index: 10;\n\n  &.open-modal {\n    animation: slideUp 1s ease-in-out 0s 1 normal forwards;\n  }\n\n  &.close-modal {\n    animation: slideDown 0.5s ease-in-out 0s 1 normal forwards;\n  }\n\n  @keyframes slideUp {\n    from {\n      opacity: 0;\n      transform: translateY(+100%);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes slideDown {\n    from {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    to {\n      opacity: 0;\n      transform: translateY(+100%);\n    }\n  }\n"]))),Dn=v.Z.div(an||(an=(0,w.Z)(['\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 500px;\n\n  img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    z-index: -1;\n  }\n\n  &:before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.35);\n    width: 100%;\n    height: 100%;\n  }\n\n  @media (max-width: 768px) {\n    height: 260px;\n  }\n']))),On=v.Z.div(sn||(sn=(0,w.Z)(["\n  z-index: 5;\n  h2 {\n    padding-bottom: 20px;\n    font-size: 60px;\n    line-height: 1;\n    color: #fff;\n  }\n  strong {\n    font-size: 30px;\n    line-height: 1;\n    color: #fff;\n  }\n  span {\n    display: block;\n    text-align: left;\n    font-size: 20px;\n    line-height: 1;\n    color: #cfcfcf;\n  }\n"]))),Gn=v.Z.h3(pn||(pn=(0,w.Z)(["\n  max-width: 1080px;\n  margin: 0 auto;\n  padding-bottom: 30px;\n  font-size: 35px;\n  line-height: 45px;\n"]))),Jn=v.Z.div(ln||(ln=(0,w.Z)(["\n  padding: 100px 20px;\n\n  dl {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 1080px;\n    margin: 0 auto;\n    gap: 20px;\n  }\n"]))),Kn=v.Z.div(dn||(dn=(0,w.Z)(['\n  flex-basis: calc(25% - 15px);\n\n  dt {\n    padding-bottom: 12px;\n    font-size: 18px;\n    line-height: 25px;\n    border-bottom: 2px solid #000;\n  }\n  dd {\n    padding: 20px 5px 0;\n  }\n\n  li {\n    position: relative;\n    margin-bottom: 5px;\n    padding-left: 10px;\n    font-size: 15px;\n    line-height: 25px;\n    color: #757575;\n    &:before {\n      content: "";\n      position: absolute;\n      top: 10px;\n      left: 0;\n      width: 3px;\n      height: 3px;\n      background-color: #757575;\n      border-radius: 50%;\n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-basis: calc(50% - 10px);\n  }\n']))),Xn=v.Z.div(cn||(cn=(0,w.Z)(["\n  padding: 100px 20px;\n  background-color: #f1f1f1;\n"]))),Qn=v.Z.div(mn||(mn=(0,w.Z)(["\n  max-width: 1080px;\n  margin: 0 auto;\n  img {\n    width: 100%;\n  }\n"]))),$n=v.Z.div(xn||(xn=(0,w.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-bottom: 15px;\n"]))),nt=(0,v.Z)("button",{shouldForwardProp:function(n){return"overViewLink"!==n}})(fn||(fn=(0,w.Z)(["\n  display: inline-block;\n  padding: 9px 35px;\n  font-size: 18px;\n  line-height: 28px;\n  color: #fff;\n  border-radius: 5px;\n  border: none;\n  background-color: #212121;\n  transform: perspective(1px) translateZ(0);\n  transition-duration: 0.3s;\n  transition-property: transform;\n  transform-origin: 0 100%;\n  text-decoration: none;\n\n  ","\n"])),(function(n){return n.overViewLink&&(0,u.iv)(hn||(hn=(0,w.Z)(["\n      cursor: pointer;\n\n      &:hover {\n        transform: skew(-10deg);\n      }\n    "])))})),tt=v.Z.button(un||(un=(0,w.Z)(['\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n  height: 40px;\n  outline: none;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n\n  &:before,\n  &:after {\n    content: "";\n    position: absolute;\n    left: 7px;\n    width: 24px;\n    height: 3px;\n    background-color: #fff;\n  }\n\n  &:before {\n    transform: rotate(45deg) scaleX(1.5) translateY(-1px);\n  }\n\n  &:after {\n    transform: rotate(-45deg) scaleX(1.5) translateY(1px);\n    transform-origin: 25% 100%;\n  }\n']))),et=function(n){var t=n.modalData,e=n.num,i=n.handleClose;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(Dn,{children:[(0,E.jsx)("img",{src:t.bgImg,alt:"bg"}),(0,E.jsxs)(On,{children:[(0,E.jsxs)("span",{children:["#",e+1]}),(0,E.jsx)("h2",{children:t.title}),(0,E.jsx)("strong",{children:t.standard})]})]}),(0,E.jsxs)(Jn,{children:[(0,E.jsx)(Gn,{children:"Summary"}),(0,E.jsx)("dl",{children:t.summarys.map((function(n,t){return(0,E.jsxs)(Kn,{children:[(0,E.jsx)("dt",{children:n.summaryTitle}),(0,E.jsx)("dd",{children:(0,E.jsx)("ul",{children:n.summaryInfo.map((function(n,t){return(0,E.jsx)("li",{children:n},t)}))})})]},t)}))})]}),(0,E.jsxs)(Xn,{children:[(0,E.jsx)(Gn,{children:"Overview"}),(0,E.jsxs)(Qn,{children:[(0,E.jsx)($n,{children:t.overViewLink.map((function(n,e){return(0,E.jsx)(nt,{overViewLink:n,onClick:function(){return t.overViewLink?window.open(n,"_blank"):null},children:n?"Visit Website":"Visit Website  (preparing)"},e)}))}),(0,E.jsx)("img",{src:t.overViewImg,alt:"overview"})]})]}),(0,E.jsx)(tt,{onClick:i,children:(0,E.jsx)("span",{className:"blind",children:"\ub2eb\uae30"})})]})},it=e(9421),rt=e(7508),ot=e(8248),at=e(6848),st=e(3733),pt=e(1826),lt=e(4215),dt=e(4372),ct=e(4857),mt=e(9800),xt=e(2658),ft=e(7292),ht=e(3234),ut=[{bgImg:it,title:"JAM LIVE (LIVE)",standard:"RESPONSIVE WEBSITE",summarys:[{summaryTitle:"\ud504\ub85c\uc81d\ud2b8 \uae30\uac04",summaryInfo:["2020.06.03 ~ 2020.08.26"]},{summaryTitle:"\uc0ac\uc774\ud2b8 \ud2b9\uc9d5",summaryInfo:["\uc7bc \ub77c\uc774\ube0c \uc0dd\ubc29\uc1a1 \uc0ac\uc774\ud2b8","\ubc18\uc751\ud615 \uc6f9 \uc0ac\uc774\ud2b8","vh, vw \ub2e8\uc704 \uae30\ubc18 \uc720\ub3d9\uc801 UI","\uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc \ubc0f \uc778\ud130\ub809\uc158 \uc791\uc5c5","JS\ub77c\uc774\ube0c\ub7ec\ub9ac (Slick.js, Swiper.js)"]},{summaryTitle:"\ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5",summaryInfo:["IE 10 +","Chrome","Firefox","Safari"]},{summaryTitle:"\ub2f4\ub2f9\uc5c5\ubb34",summaryInfo:["HTML5, SASS \uae30\ubc18 UI \ub9c8\ud06c\uc5c5 100%"]}],overViewLink:["https://jamlive.tv/lives"],overViewImg:dt},{bgImg:rt,title:"JAM LIVE (advertiser)",standard:"RESPONSIVE WEBSITE",summarys:[{summaryTitle:"\ud504\ub85c\uc81d\ud2b8 \uae30\uac04",summaryInfo:["2020.05.04 ~ 2020.05.22"]},{summaryTitle:"\uc0ac\uc774\ud2b8 \ud2b9\uc9d5",summaryInfo:["\uc7bc \ub77c\uc774\ube0c \uad11\uace0\uc8fc\uc6a9 \uc0ac\uc774\ud2b8","\ubc18\uc751\ud615 \uc6f9 \uc0ac\uc774\ud2b8","vh, vw \ub2e8\uc704 \uae30\ubc18 \uc720\ub3d9\uc801 UI","\uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc \ubc0f \uc778\ud130\ub809\uc158 \uc791\uc5c5","JS\ub77c\uc774\ube0c\ub7ec\ub9ac (Slick.js, Swiper.js)"]},{summaryTitle:"\ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5",summaryInfo:["IE 10 +","Chrome","Firefox","Safari"]},{summaryTitle:"\ub2f4\ub2f9\uc5c5\ubb34",summaryInfo:["HTML5, SASS \uae30\ubc18 UI \ub9c8\ud06c\uc5c5 100%"]}],overViewLink:["https://jamlive.tv/advertiser"],overViewImg:ct},{bgImg:lt,title:"GROWTHY BRAND",standard:"RESPONSIVE WEBSITE",summarys:[{summaryTitle:"\ud504\ub85c\uc81d\ud2b8 \uae30\uac04",summaryInfo:["2020.03.02 ~ 2020.04.30"]},{summaryTitle:"\uc0ac\uc774\ud2b8 \ud2b9\uc9d5",summaryInfo:["GROWTHY \uc0c1\ud488 \uc18c\uac1c \uc0ac\uc774\ud2b8","\ubc18\uc751\ud615 \uc6f9 \uc0ac\uc774\ud2b8","CSS Animation"]},{summaryTitle:"\ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5",summaryInfo:["IE 10 +","Chrome","Firefox","Safari"]},{summaryTitle:"\ub2f4\ub2f9\uc5c5\ubb34",summaryInfo:["HTML5, SASS \uae30\ubc18 UI \ub9c8\ud06c\uc5c5 100%"]}],overViewLink:[""],overViewImg:e(2685)},{bgImg:pt,title:"BT21",standard:"ADAPTIVE WEBSITE",summarys:[{summaryTitle:"\ud504\ub85c\uc81d\ud2b8 \uae30\uac04",summaryInfo:["BABY : 2020.02.17 ~ 2020.02.28","FESTIBAL : 2019.12.02 ~ 2019.12.11"]},{summaryTitle:"\uc0ac\uc774\ud2b8 \ud2b9\uc9d5",summaryInfo:["\ub77c\uc778\ud504\ub80c\uc988\uc640 \ubc29\ud0c4\uc18c\ub144\ub2e8\uc758 \ucf5c\ub77c\ubcf4\ub808\uc774\uc158 \uce90\ub9ad\ud130 \uc774\ubca4\ud2b8 \uc6f9\uc0ac\uc774\ud2b8","\uc801\uc751\ud615 \uc6f9 \uc0ac\uc774\ud2b8","5\uac1c\uad6d\uc5b4 \ub300\uc751 (\ud55c\uad6d\uc5b4, \uc601\uc5b4, \uc77c\ubcf8\uc5b4, \uac04\uccb4, \ubc88\uccb4)","CSS Animation","JS\ub77c\uc774\ube0c\ub7ec\ub9ac (Slick.js, Swiper.js)"]},{summaryTitle:"\ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5",summaryInfo:["IE 10 +","Chrome","Firefox","Safari"]},{summaryTitle:"\ub2f4\ub2f9\uc5c5\ubb34",summaryInfo:["HTML5, SASS \uae30\ubc18 UI \ub9c8\ud06c\uc5c5 100%","BT21 BABY","BT21 FESTIVAL"]}],overViewLink:["https://www.bt21.com/BT21BABY","https://www.bt21.com/BT21FESTIVAL2019"],overViewImg:ht},{bgImg:st,title:"SMART PLACE",standard:"ADAPTIVE WEBSITE",summarys:[{summaryTitle:"\ud504\ub85c\uc81d\ud2b8 \uae30\uac04",summaryInfo:["2019.10.07 ~ 2020.01.10"]},{summaryTitle:"\uc0ac\uc774\ud2b8 \ud2b9\uc9d5",summaryInfo:["\ub124\uc774\ubc84 \uc5c5\uccb4 \ub4f1\ub85d \uc6f9\uc0ac\uc774\ud2b8","ocr, \uc5c5\uccb4 \uc870\ud68c, \uc5c5\uccb4 \ub9ac\ubdf0 \uac1c\ud3b8 \ubc0f \uc720\uc9c0\ubcf4\uc218 \ub9c8\ud06c\uc5c5 \ub2f4\ub2f9","Pc: Angular, Mobile: React, App: ReactNative","\uc2a4\ud1a0\ub9ac\ubd81\uc744 \ud1b5\ud55c \ucef4\ud3ec\ub10c\ud2b8 \uac00\uc774\ub4dc \uc81c\uacf5"]},{summaryTitle:"\ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5",summaryInfo:["IE 10 +","Chrome","Firefox","Safari"]},{summaryTitle:"\ub2f4\ub2f9\uc5c5\ubb34",summaryInfo:["HTML5, SASS \uae30\ubc18 UI \ub9c8\ud06c\uc5c5 100%","ocr, \uc5c5\uccb4 \uc870\ud68c, \uc5c5\uccb4 \ub9ac\ubdf0"]}],overViewLink:["https://smartplace.naver.com/"],overViewImg:ft},{bgImg:at,title:"WORK PLACE",standard:"ADAPTIVE WEBSITE",summarys:[{summaryTitle:"\ud504\ub85c\uc81d\ud2b8 \uae30\uac04",summaryInfo:["2019.02.01 ~ 2019.09.26"]},{summaryTitle:"\uc0ac\uc774\ud2b8 \ud2b9\uc9d5",summaryInfo:["\ub124\uc774\ubc84 \uae30\uc5c5\uc815\ubcf4\uc2dc\uc2a4\ud15c","\ub9ac\ub274\uc5bc \ud504\ub85c\uc81d\ud2b8 \ub9c8\ud06c\uc5c5 \ub2f4\ub2f9","\ud3f4\ub354\ube14 \uc2a4\ub9c8\ud2b8\ud3f0(250px) \ub300\uc751","REDMINE\uc744 \ud1b5\ud55c \ud611\uc5c5"]},{summaryTitle:"\ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5",summaryInfo:["IE 10 +","Chrome","Firefox","Safari"]},{summaryTitle:"\ub2f4\ub2f9\uc5c5\ubb34",summaryInfo:["HTML5, SASS \uae30\ubc18 UI \ub9c8\ud06c\uc5c5 100%","\uba54\uc778 \ud398\uc774\uc9c0","\uc11c\ube0c \ud398\uc774\uc9c0"]}],overViewLink:["https://www.ncloud.com/product/businessApplication/workplace"],overViewImg:xt},{bgImg:ot,title:"DEVIEW2018",standard:"RESPONSIVE WEBSITE",summarys:[{summaryTitle:"\ud504\ub85c\uc81d\ud2b8 \uae30\uac04",summaryInfo:["2018.06.15 ~ 2018.09.18"]},{summaryTitle:"\uc0ac\uc774\ud2b8 \ud2b9\uc9d5",summaryInfo:["\uac1c\ubc1c\uc790 \ucee8\ud37c\ub7f0\uc2a4 \uc0ac\uc774\ud2b8","\ubc18\uc751\ud615 \uc6f9\ud398\uc774\uc9c0\ub2f9","\ub2e4\uad6d\uc5b4 \uc9c0\uc6d0","SASS, CSS, Animation"]},{summaryTitle:"\ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5",summaryInfo:["IE 10 +","Chrome","Firefox","Safari"]},{summaryTitle:"\ub2f4\ub2f9\uc5c5\ubb34",summaryInfo:["HTML5, SASS \uae30\ubc18 UI \ub9c8\ud06c\uc5c5 100%","\uba54\uc778 \ud398\uc774\uc9c0","\uc11c\ube0c \ud398\uc774\uc9c0 (schedule, faq)","DEVIEW CFS\ud398\uc774\uc9c0"]}],overViewLink:["https://deview.kr/2018/"],overViewImg:mt}],gt=function(n){var t=n.isMounted,e=n.clickIndex,i=n.handleClose;return(0,E.jsx)(gn,{children:(0,E.jsx)(qn,{className:t?"open-modal":"close-modal",children:(0,E.jsx)(g.tq,{navigation:!0,modules:[b.W_],onSwiper:function(n){return n.slideTo(e)},className:"swiper-modal",children:null===ut||void 0===ut?void 0:ut.map((function(n,t){return(0,E.jsx)(g.o5,{children:(0,E.jsx)(et,{modalData:n,num:t,handleClose:i})},t)}))})})})},bt=e(8800),wt=e(9635),yt=e(1942),vt=e(7610),jt=e(9053),kt=e(8590),It=[{imgUrl:e(2299),title:"JAM LIVE (LIVE)",tags:["#\ubc18\uc751\ud615","#\uc720\ub3d9\uc801 \uc0ac\uc774\uc988","#sass"]},{imgUrl:kt,title:"JAM LIVE (advertiser)",tags:["#\ubc18\uc751\ud615","#\uc720\ub3d9\uc801 \uc0ac\uc774\uc988","#sass"]},{imgUrl:bt,title:"GROWTHY BRAND",tags:["#\ubc18\uc751\ud615","#\ub2e4\uad6d\uc5b4","#sass"]},{imgUrl:wt,title:"BT21 BABY, BT21 FESTIVAL2019",tags:["#\uc801\uc751\ud615","#5\uac1c\uc5b8\uc5b4","#swiper","#slick"]},{imgUrl:yt,title:"SMART PLACE",tags:["#\uc801\uc751\ud615","sass","#React","#React Native","#Component"],bgColor:"#b8b8ba"},{imgUrl:vt,title:"WORK PLACE",tags:["#\uc801\uc751\ud615","#sass","#Foldable Phone","#Component"]},{imgUrl:jt,title:"DEVIEW2018",tags:["#\ubc18\uc751\ud615","#\ub2e4\uad6d\uc5b4","#sass","#Interaction"]}];var St=function(){var n=(0,h.useState)(0),t=(0,Rn.Z)(n,2),e=t[0],i=t[1],r=(0,h.useState)(!1),o=(0,Rn.Z)(r,2),a=o[0],s=o[1],p=function(n,t){var e=(0,h.useState)(!1),i=(0,Rn.Z)(e,2),r=i[0],o=i[1];return(0,h.useEffect)((function(){var e;return n&&!r?o(!0):!n&&r&&(e=setTimeout((function(){return o(!1)}),t)),function(){return clearTimeout(e)}}),[n,t,r]),r}(a,600),l=(0,h.useCallback)((function(n){i(n),s(!0)}),[]),d=(0,h.useCallback)((function(){s(!1)}),[]);return(0,E.jsxs)(P,{type:"project",title:"Project",children:[(0,E.jsx)(g.tq,{spaceBetween:10,centeredSlides:!0,navigation:!0,pagination:{clickable:!0},modules:[b.W_,b.tl],breakpoints:{1024:{slidesPerView:3.3,spaceBetween:30},768:{slidesPerView:2.3,spaceBetween:20},500:{slidesPerView:1.5,spaceBetween:10}},className:"swiper-project",children:null===It||void 0===It?void 0:It.map((function(n,t){var e=n.imgUrl,i=n.title,r=n.tags,o=n.bgColor;return(0,E.jsx)(g.o5,{children:(0,E.jsx)(Wn,{imgUrl:e,bgColor:o,title:i,tags:r,handleClick:function(){return l(t)}})},t)}))}),p&&(0,E.jsx)(gt,{isMounted:a,clickIndex:e,handleClose:d})]})},Zt=function(){var n=["Home","Skill","Project","Archiving"],t={clickable:!0,renderBullet:function(t,e){return'<span class="'+e+'">'+n[t]+"</span>"}};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u.xB,{styles:y}),(0,E.jsxs)(g.tq,{direction:"vertical",slidesPerView:1,mousewheel:!0,pagination:t,modules:[b.Gk,b.tl],className:"swiper-portfolio",children:[(0,E.jsx)(g.o5,{children:(0,E.jsx)(L,{})}),(0,E.jsx)(g.o5,{children:(0,E.jsx)(zn,{})}),(0,E.jsx)(g.o5,{children:(0,E.jsx)(St,{})}),(0,E.jsx)(g.o5,{children:(0,E.jsx)(Yn,{})})]})]})}},4251:function(n,t,e){n.exports=e.p+"static/media/bg_pattern1.e762f17001da1e3a5b6c.png"},4763:function(n,t,e){n.exports=e.p+"static/media/bg_pattern2.da8c8b043261958c43a2.png"},4215:function(n,t,e){n.exports=e.p+"static/media/bg_project_top1.38533e0f6a25b8109bd1.png"},1826:function(n,t,e){n.exports=e.p+"static/media/bg_project_top2.3a711c227435f7f2b0cc.jpg"},3733:function(n,t,e){n.exports=e.p+"static/media/bg_project_top3.6784e4ba43fc1566a8b0.jpg"},6848:function(n,t,e){n.exports=e.p+"static/media/bg_project_top4.3b61ee2badf185cba2b7.png"},8248:function(n,t,e){n.exports=e.p+"static/media/bg_project_top5.b0c8ba277f6b8f213ff8.jpg"},7508:function(n,t,e){n.exports=e.p+"static/media/bg_project_top6.52964a3c9257cfe4dd70.png"},9421:function(n,t,e){n.exports=e.p+"static/media/bg_project_top7.687d8ee77edb824eea82.png"},2685:function(n,t,e){n.exports=e.p+"static/media/img_project1_v2.9813875da07eee100b5d.png"},3234:function(n,t,e){n.exports=e.p+"static/media/img_project2.9dd6316324e7d74bcfb6.png"},7292:function(n,t,e){n.exports=e.p+"static/media/img_project3.e4b805e9555789a0166d.png"},2658:function(n,t,e){n.exports=e.p+"static/media/img_project4.696f41c1146874656e49.png"},9800:function(n,t,e){n.exports=e.p+"static/media/img_project5.056a507254140ea867fe.png"},4857:function(n,t,e){n.exports=e.p+"static/media/img_project6.62f4cca7df0702a9569a.png"},4372:function(n,t,e){n.exports=e.p+"static/media/img_project7.33b2139f5c535b397733.png"},4174:function(n,t,e){n.exports=e.p+"static/media/logo-github.6a9698194957b982ca6f.png"},8931:function(n,t,e){n.exports=e.p+"static/media/logo-tistory.14d6c644a78566e280a9.png"},8800:function(n,t,e){n.exports=e.p+"static/media/work1_v2.c0cc0d0b2a74b25e09e2.jpg"},9635:function(n,t,e){n.exports=e.p+"static/media/work2.931be20ee8ec0e454821.jpg"},1942:function(n,t,e){n.exports=e.p+"static/media/work3.46fbd124a0ad3da72a1a.png"},7610:function(n,t,e){n.exports=e.p+"static/media/work4.4a9b15e44ee8537adca8.jpg"},9053:function(n,t,e){n.exports=e.p+"static/media/work5.ff76ca94a1d2d93c0623.jpg"},8590:function(n,t,e){n.exports=e.p+"static/media/work7.46c5054daf78cbfdbca6.jpg"},2299:function(n,t,e){n.exports=e.p+"static/media/work8.84835beddb62d0270c1a.jpg"}}]);
//# sourceMappingURL=791.c4f0796d.chunk.js.map