import React, { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  progressList: { title: string; percent: number; text: string }[];
}

const ProgressList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.6vw;
`;

const ProgressBox = styled.div`
  position: relative;
  width: 25vw;

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
  margin-bottom: 1.6vw;
  font-size: 2.6vw;
  color: #fff;
`;

const BarArea = styled.div`
  overflow: hidden;
  position: relative;
  height: 1.4vw;
  border-radius: 1vw;
  background-color: #3e404c;
`;

const BarInner = styled("div", {
  shouldForwardProp: (props) => props !== "percent",
})<{ percent: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${({ percent }) => percent}%;
`;

const Bar = styled.span`
  display: block;
  width: 0;
  height: 100%;
  background-color: #dc5361;
  border-radius: 8px;
`;

const Percent = styled.span`
  position: absolute;
  left: 0%;
  margin-left: 1vw;
  font-size: 1.2vw;
  color: #000;
  opacity: 0;
`;

const Text = styled.p`
  margin-top: 1vw;
  font-size: 1.1vw;
  line-height: 1.4;
  font-weight: 300;
  color: #8f8f8f;
`;

export const Progress: FC<Props> = ({ progressList = [] }) => {
  return (
    <ProgressList>
      {progressList?.map(({ title, percent, text }) => (
        <ProgressBox>
          <Title>{title}</Title>
          <BarArea>
            <BarInner percent={percent}>
              <Bar className="progress-bar" />
            </BarInner>
            <Percent className="progress-percent">{percent}%</Percent>
          </BarArea>
          <Text>{text}</Text>
        </ProgressBox>
      ))}
    </ProgressList>
  );
};
