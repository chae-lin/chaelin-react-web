import styled from "@emotion/styled";

export const ProjectWrap = styled.div`
  cursor: pointer;
  opacity: 0.5;
  transition: opacity ease-in-out 0.1s;
  &:hover {
    opacity: 1;
    animation: blink 1s ease-in-out infinite alternate;

    @keyframes blink {
      16.65% {
        transform: translateY(8px);
      }
      33.3% {
        transform: translateY(-6px);
      }
      49.95% {
        transform: translateY(4px);
      }
      66.6% {
        transform: translateY(-2px);
      }
      83.25% {
        transform: translateY(1px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

export const ProjectImage = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 1vw;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0.3vw solid #fff;
    border-radius: 1vw;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectTitle = styled.h3`
  padding: 0.6vw 1vw 0;
  font-size: 1.6vw;
  line-height: 1.3;
  color: #dc5361;
  text-align: right;
`;

export const ProjectTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  padding: 0 1vw;
  font-size: 1.3vw;
  line-height: 1.3;
  color: #fff;
  text-align: right;
  span + span {
    margin-left: 0.6vw;
  }
`;
