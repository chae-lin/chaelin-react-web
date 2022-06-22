import React, { FC } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface Props {
  type?: string;
  title: string;
  children: React.ReactNode;
}

const spinner = keyframes`
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

const Wrap = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 400;
  background-color: #1d1d1d;
`;

const LoaderBox = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  &:before,
  &:after {
    content: "";
    position: relative;
    display: block;
  }
  &:before {
    animation: ${spinner} 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    width: 100%;
    height: 100%;
    background-color: $primary-color-red;
  }
  &:after {
    animation: shadow 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    bottom: -15px;
    height: 3px;
    border-radius: 50%;
    background-color: rgba(#fff, 0.2);
  }
`;

export const Loader: FC<Props> = ({ title, children }) => {
  return (
    <Wrap>
      <LoaderBox>{title}</LoaderBox>
    </Wrap>
  );
};
