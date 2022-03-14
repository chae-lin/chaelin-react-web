import styled from "@emotion/styled";

export const ProjectWrap = styled.div`
  cursor: pointer;
  opacity: 0.5;
  transition: all cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.3s;
  &:hover {
    opacity: 1;
    transform: translateY(-1.5vw);
    img {
      transform: scale(1.1);
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
    transition: scale cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.3s;
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
