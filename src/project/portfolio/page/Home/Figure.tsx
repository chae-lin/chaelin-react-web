import { FC } from "react";
import * as S from "./styles";

interface Pops {
  name?: string;
  position: { top?: number; left?: number; right?: number; bottom?: number };
  type?: "type1" | "type2";
}

export const Figure: FC<Pops> = ({ name, position, type }) => {
  return <S.Figure name={name} position={position} type={type} />;
};
