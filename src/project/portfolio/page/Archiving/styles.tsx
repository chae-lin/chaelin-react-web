import styled from "@emotion/styled";

export const ArchiveList = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const ArchiveItemWrpa = styled.div`
  flex-basis: 440px;
  margin: 0 30px;
  padding: 30px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 4px 8px 10px 4px #787878;
  opacity: 0;
  transform: translateY(30px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-basis: 370px;
    margin: 0;
    padding: 16px;
    border-radius: 12px;
    & + & {
      margin-top: 20px;
    }
  }
`;

export const ProjectImage = styled.h3`
  width: 168px;
  height: 47px;
  margin-bottom: 16px;
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 34px;
    margin-bottom: 12px;
  }
`;

export const ItemText = styled.p`
  font-size: 20px;
  button {
    position: relative;
    border: none;
    background-color: transparent;
    font-size: 22px;
    font-weight: 800;
    color: #dc5361;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -3px;
      height: 0;
      background-color: #9d9d9d4a;
      border-radius: 4px;
      transition: height cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.3s;
      z-index: -1;
    }

    &:hover:before {
      height: 65%;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    button {
      font-size: 18px;
    }
  }
`;

export const ItemInfoList = styled.ul`
  margin-top: 18px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

export const ItemInfo = styled.li`
  display: inline-flex;
  width: 100%;
  align-items: center;
  font-size: 16px;
  line-height: 1.5;

  &:before {
    content: "";
    width: 4px;
    height: 4px;
    margin-right: 12px;
    border-radius: 50%;
    background-color: #1f2029;
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: 11px;

    &:before {
      width: 3px;
      height: 3px;
    }
  }
`;
