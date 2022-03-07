import styled from "@emotion/styled";

export const ProjectWrap = styled.div``;

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
  padding: 1.5vw 1vw 0;
  font-size: 3vw;
  line-height: 1.3;
  color: #dc5361;
  text-align: right;
`;

export const ProjectTag = styled.div`
  padding: 0 1vw 0;
  font-size: 1.6vw;
  line-height: 1.3;
  color: #fff;
  text-align: right;
  span + span {
    margin-left: 0.6vw;
  }
`;
