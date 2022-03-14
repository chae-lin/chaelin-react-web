import React, { FC } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  type?: string;
  title: string;
  children: React.ReactNode;
}

const Title = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 5vw;
  font-size: 5.5vw;
  &::before {
    content: "";
    position: absolute;
    top: 36%;
    left: -4px;
    right: -4px;
    height: 30%;
    background-color: #5e5e5e;
    opacity: 0.5;
    z-index: -1;
    transform: rotate(6deg);
  }
`;

const Wrap = styled("div", {
  shouldForwardProp: (props) => props !== "type",
})<{ type: string }>`
  width: 100%;
  box-sizing: border-box;
  ${({ type }) =>
    type === "project"
      ? css`
          h2 {
            margin: 0 2.5vw 5vw;
          }
        `
      : css`
          padding: 0 2.5vw;
        `}
`;

export const PageLayout: FC<Props> = ({ type = "", title, children }) => {
  return (
    <Wrap type={type}>
      <Title>{title}</Title>
      {children}
    </Wrap>
  );
};
