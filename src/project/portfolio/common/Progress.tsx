import React, { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  title: string;
  percent: number;
}

const Wrap = styled.div`
  position: relative;
  width: 300px;

  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 5s linear alternate infinite;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 822;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 26px;
`;

const BarWrpa = styled.div`
  overflow: hidden;
  position: relative;
  height: 16px;
  border-radius: 8px;
  background-color: #bdbdbd;
`;

const BarInner = styled.div<Pick<Props, "percent">>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${({ percent }) => percent}%;
  height: 100%;
`;

const Bar = styled.span`
  display: inline-block;
  width: 0;
  height: 100%;
  background-color: red;
  border-radius: 8px;
`;

const Text = styled.span`
  position: absolute;
  bottom: 20px;
  left: 30%;
  font-size: 14px;
  opacity: 0;
`;

export const Progress: FC<Props> = ({ title, percent }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <BarWrpa>
        <BarInner percent={percent}>
          <Bar className="progress-bar" />
        </BarInner>
      </BarWrpa>
      <Text className="progress-text">{percent}%</Text>
    </Wrap>
  );
};
