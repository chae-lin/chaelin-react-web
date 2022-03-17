import styled from "@emotion/styled";

export const Wrap = styled.div`
  padding: 0 20px;
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4.6vw;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const ProgressBox = styled.div`
  position: relative;
  width: 23vw;

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

  @media (max-width: 768px) {
    width: 146px;
  }

  @media (max-width: 350px) {
    width: 130px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 26px;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    font-size: 18px;
  }
`;

export const BarArea = styled.div`
  overflow: hidden;
  position: relative;
  height: 22px;
  border-radius: 16px;
  background-color: #3e404c;

  @media (max-width: 768px) {
    height: 14px;
  }
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
  border-radius: 16px;
`;

export const Percent = styled.span`
  position: absolute;
  top: 2px;
  left: 0;
  margin-left: 10px;
  font-size: 15px;
  color: #000;
  opacity: 0;

  @media (max-width: 768px) {
    top: 0;
    font-size: 12px;
  }
`;

export const Text = styled.p`
  margin-top: 6px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 300;
  color: #8f8f8f;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
