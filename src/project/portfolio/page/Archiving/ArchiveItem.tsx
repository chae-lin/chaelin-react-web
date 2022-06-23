import { FC } from "react";
import * as S from "./styles";

interface Props {
  title: string;
  imgUrl: string;
  text: string;
  link: string;
  infos: string[];
}

export const ArchiveItem: FC<Props> = ({
  title,
  imgUrl,
  text,
  link,
  infos,
}) => {
  return (
    <S.ArchiveItemWrap className="archiving-item">
      <S.ProjectImage>
        <img src={imgUrl} alt={title} />
      </S.ProjectImage>
      <S.ItemText onClick={() => window.open(link, "_blank")}>
        {text}
      </S.ItemText>
      <S.ItemInfoList>
        {infos.map((info, index) => (
          <S.ItemInfo key={index}>{info}</S.ItemInfo>
        ))}
      </S.ItemInfoList>
    </S.ArchiveItemWrap>
  );
};
