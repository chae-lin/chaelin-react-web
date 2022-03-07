import { FC } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  text: string;
  link: string;
  infos: string[];
}

export const ArchiveItem: FC<Props> = ({ title, text, link, infos }) => {
  return (
    <S.ArchiveItemWrpa className="archiving-item">
      <S.ItemTitle>{title}</S.ItemTitle>
      <S.ItemText>
        <Link to={link}>{text}</Link> 입니다.
      </S.ItemText>
      <S.ItemInfoList>
        {infos.map((info) => (
          <S.ItemInfo>{info}</S.ItemInfo>
        ))}
      </S.ItemInfoList>
    </S.ArchiveItemWrpa>
  );
};
