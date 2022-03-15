import styled from "@emotion/styled";

export const ArchiveList = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArchiveItemWrpa = styled.div`
  width: 34vw;
  max-width: 420px;
  margin: 0 2vw;
  padding: 2.6vw;
  border-radius: 1vw;
  background-color: #fff;
  box-shadow: 0.4vw 0.4vw 0.5vw 0.3vw #72727285;
  opacity: 0;
  transform: translateY(4vw);
`;

export const ProjectImage = styled.h3`
  width: 13vw;
  height: 4vw;
  margin-bottom: 1vw;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemText = styled.p`
  font-size: 1.8vw;
  button {
    border: none;
    background-color: transparent;
    font-size: 1.8vw;
    font-weight: 800;
    color: #dc5361;
    cursor: pointer;
  }
`;

export const ItemInfoList = styled.ul`
  margin-top: 1.6vw;
`;

export const ItemInfo = styled.li`
  position: relative;
  padding-left: 2vw;
  font-size: 1.6vw;
  line-height: 1.5;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0.5vw;
    width: 0.3vw;
    height: 0.3vw;
    margin-top: -0.15vw;
    border-radius: 50%;
    background-color: #1f2029;
  }
`;
