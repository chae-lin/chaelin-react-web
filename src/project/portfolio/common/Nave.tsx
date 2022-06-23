import { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  pposition: string;
  onClick: (id: string) => void;
}

const Wrap = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 5%;
  right: 1%;
  z-index: 100;

  button {
    position: relative;
    margin: 0.5vw 0;
    padding: 0.5vw;
    border: none;
    background-color: transparent;
    font-size: clamp(14px, 1.5vw, 20px);
    color: #757575;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0;
      border-radius: 1vw;
      background-color: #dc536175;
      z-index: -1;
    }

    &.on {
      color: #fff;
      transition: color 0.5s ease;
      &::before {
        height: 46%;
        transition: height 0.7s ease;
      }
    }
  }
`;

export const Nave: FC<Props> = ({ pposition, onClick }) => {
  const naveList = [
    { id: "Home", name: "Home" },
    { id: "Skill", name: "Skill" },
    { id: "Project", name: "Project" },
    { id: "Archiving", name: "Archiving" },
  ];

  return (
    <Wrap>
      {naveList.map((el) => (
        <button
          key={el.id}
          className={pposition === el.name ? "on" : undefined}
          onClick={() => onClick(el.id)}
        >
          {el.name}
        </button>
      ))}
    </Wrap>
  );
};
