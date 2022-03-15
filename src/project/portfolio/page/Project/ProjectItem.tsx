import React, { FC } from "react";
import * as S from "./styles";

interface Props {
  imgUrl: string;
  title: string;
  tags: string[];
  handleClick: (e: React.MouseEvent<HTMLElement>) => unknown;
}

export const ProjectItem: FC<Props> = ({
  imgUrl,
  title,
  tags,
  handleClick,
}) => {
  return (
    <S.ProjectWrap onClick={handleClick}>
      <S.ProjectImage>
        <img src={imgUrl} alt={title} />
      </S.ProjectImage>
      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.ProjectTag>
        {tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </S.ProjectTag>
    </S.ProjectWrap>
  );
};
