import styled from "@emotion/styled";
import { SetionWrap } from "../../common";

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: max(84vw, 300px);
  margin: 0 auto;
  gap: max(4vw, 24px);
`;

export const ProgressBox = styled.div`
  position: relative;
  width: clamp(138px, 22vw, 420px);
`;

export const Title = styled.h3`
  margin-bottom: 2vw;
  font-size: clamp(12px, 3vw, 40px);
  color: #d9d9d9;
`;

export const BarArea = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  height: clamp(12px, 1.4vw, 26px);
  border-radius: 2vw;
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
  border-radius: 16px;
`;

export const Percent = styled.span`
  position: absolute;
  left: 0;
  margin-left: 10px;
  font-size: 15px;
  color: #000;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Text = styled.p`
  margin-top: 1.2vw;
  font-size: clamp(10px, 1.4vw, 20px);
  line-height: 1.4;
  font-weight: 300;
  color: #8f8f8f;
`;

export const Warp = styled(SetionWrap)`
  &.show {
    .progress-bar {
      width: 100%;
      transition: width cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.7s;
    }
    .progress-percent {
      opacity: 1;
      transition: opacity cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.3s;
      transition-delay: 0.5s;
    }
  }
`;
