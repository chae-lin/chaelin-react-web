import styled from "@emotion/styled";

export const ArchiveList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArchiveItemWrpa = styled.div`
  width: 34vw;
  max-width: 420px;
  margin: 0 2vw;
  padding: 3.4vw;
  border-radius: 1vw;
  background-color: #fff;
  box-shadow: 0.4vw 0.4vw 0.5vw 0.3vw #72727285;
  opacity: 0;
  transform: translateY(4vw);
`;

export const ItemTitle = styled.h3`
  width: 27vw;
  height: 7vw;
  margin-bottom: 3vw;
`;

export const ItemText = styled.p`
  font-size: 2.5vw;
  a {
    color: #dc5361;
    text-decoration: none;
  }
`;

export const ItemInfoList = styled.ul`
  margin-top: 2.6vw;
`;

export const ItemInfo = styled.li`
  position: relative;
  padding-left: 2vw;
  line-height: 1.5;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0.5vw;
    width: 0.6vw;
    height: 0.6vw;
    margin-top: -0.3vw;
    border-radius: 50%;
    background-color: #1f2029;
  }
`;
