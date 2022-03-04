import React, { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  children?: React.ReactNode;
}

const Wrap = styled.h2`
  margin-bottom: 30px;
  font-size: 10vw;
`;

export const Title: FC<Props> = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
