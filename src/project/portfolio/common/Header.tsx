import { FC } from "react";
import styled from "@emotion/styled";

const Wrap = styled.header`
  h1 span {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;

export const Header: FC = () => {
  return (
    <Wrap>
      <h1>
        <span>chaelin.kim</span>
      </h1>
    </Wrap>
  );
};
