import styled from "@emotion/styled";
import { SetionWrap } from "../../common";

export const ArchiveList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8vw;
`;

export const ArchiveItemWrap = styled.div`
  flex-basis: clamp(350px, 28vw, 820px);
  padding: clamp(26px, 3vw, 82px);
  border-radius: 8vw 1vw;
  background-color: #fff;
  box-shadow: 0.4vw 0.4vw 0.8vw 0.4vw #5c5c5c;
  opacity: 0;
  transform: translateY(30px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    border-radius: 14vw 1.8vw;
  }
`;

export const ProjectImage = styled.h3`
  height: clamp(46px, 4vw, 130px);
  margin-bottom: clamp(6px, 1.2vw, 38px);
  img {
    height: 100%;
  }
`;

export const ItemText = styled.button`
  overflow: hidden;
  position: relative;
  padding: clamp(8px, 0.6vw, 84px);
  font-size: clamp(12px, 1.6vw, 38px);
  font-weight: 800;
  color: #fff;
  border: none;
  border-radius: clamp(8px, 0.5vw, 20px);
  background-color: #1d1d1d;
  box-shadow: 0.3vw 0.5vw 0.5vw 0 rgb(3 6 26 / 15%);
  transition: 0.5s all ease-in-out;
  animation: wiggle 4s 2s infinite;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0;
    background-color: #dc5361;
    border-radius: 0.5vw;
    transition: height cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.3s;
    z-index: -1;
  }
  &:hover:after {
    height: 100%;
  }

  @keyframes wiggle {
    5%,
    50% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    15% {
      transform: scale(1.12);
    }
    20% {
      transform: scale(1.12) rotate(-5deg);
    }
    25% {
      transform: scale(1.12) rotate(5deg);
    }
    30% {
      transform: scale(1.12) rotate(-3deg);
    }
    35% {
      transform: scale(1.12) rotate(2deg);
    }
    40% {
      transform: scale(1.12) rotate(0);
    }
  }
`;

export const ItemInfoList = styled.ul`
  margin-top: clamp(8px, 1.2vw, 38px);
`;

export const ItemInfo = styled.li`
  display: inline-flex;
  width: 100%;
  margin-top: clamp(8px, 0.4vw, 14px);
  align-items: center;
  font-size: clamp(13px, 1.1vw, 28px);
  line-height: 1.2;
  color: #5c5c5c;

  &:before {
    content: "";
    width: clamp(3px, 0.4vw, 12px);
    height: clamp(3px, 0.4vw, 12px);
    margin-right: 1vw;
    border-radius: 50%;
    background-color: #1f2029;
  }
`;

export const Warp = styled(SetionWrap)`
  &.show {
    & .archiving-item {
      opacity: 1;
      transform: translateY(0);
      transition: opacity cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.7s,
        transform cubic-bezier(0.46, 0.03, 0.52, 0.96) 0.7s;
      &:nth-of-type(1) {
        transition-delay: 0.2s;
      }
      &:nth-of-type(2) {
        transition-delay: 0.3s;
      }
    }
  }
`;
