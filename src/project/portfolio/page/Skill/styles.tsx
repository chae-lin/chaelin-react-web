import styled from "@emotion/styled";

export const Wrap = styled.div`
  padding: 0 20px;
`;

export const ProgressList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.6vw;
`;

export const ProgressBox = styled.div`
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

export const Title = styled.h3`
  margin-bottom: 1.6vw;
  font-size: 2.3vw;
  color: #fff;
`;

export const BarArea = styled.div`
  overflow: hidden;
  position: relative;
  height: 1.4vw;
  border-radius: 1vw;
  background-color: #3e404c;
`;

export const BarInner = styled("div", {
  shouldForwardProp: (props) => props !== "percent",
})<{ percent: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${({ percent }) => percent}%;
`;

export const Bar = styled.span`
  display: block;
  width: 0;
  height: 100%;
  background-color: #dc5361;
  border-radius: 8px;
`;

export const Percent = styled.span`
  position: absolute;
  left: 0%;
  margin-left: 1vw;
  font-size: 1.2vw;
  color: #000;
  opacity: 0;
`;

export const Text = styled.p`
  margin-top: 0.2vw;
  font-size: 1.1vw;
  line-height: 1.4;
  font-weight: 300;
  color: #8f8f8f;
`;
