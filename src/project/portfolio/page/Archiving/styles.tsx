import styled from "@emotion/styled";
import { SetionWrap } from "../../common";

export const ArchiveList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ArchiveItemWrap = styled.div`
  flex-basis: 40vw;
  margin: 0 2vw;
  padding: 4vw;
  border-radius: 9vw 1.8vw;
  background-color: #fff;
  box-shadow: 0.4vw 0.4vw 0.8vw 0.4vw #5c5c5c;
  opacity: 0;
  transform: translateY(30px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-basis: 70vw;
    & + & {
      margin-top: 6vw;
    }
  }
`;

export const ProjectImage = styled.h3`
  width: 18vw;
  margin-bottom: 2vw;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemText = styled.span`
  button {
    overflow: hidden;
    position: relative;
    padding: 1vw 1.4vw;
    font-size: 1.6vw;
    font-weight: 800;
    color: #fff;
    border: none;
    border-radius: 1vw;
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
      border-radius: 1vw;
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
  }

  @media (max-width: 768px) {
    button {
      font-size: 3.6vw;
    }
  }
`;

export const ItemInfoList = styled.ul`
  margin-top: 1.2vw;
`;

export const ItemInfo = styled.li`
  display: inline-flex;
  width: 100%;
  align-items: center;
  font-size: 1.6vw;
  line-height: 1.8;
  color: #5c5c5c;

  &:before {
    content: "";
    width: 0.4vw;
    height: 0.4vw;
    margin-right: 1vw;
    border-radius: 50%;
    background-color: #1f2029;
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: 2vw;

    &:before {
      width: 0.6vw;
      height: 0.6vw;
    }
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
