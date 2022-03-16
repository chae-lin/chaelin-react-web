import React, { FC } from "react";
import * as S from "./styles";

type summaryProps = {
  summaryTitle: string;
  summaryInfo: string[];
};

type DataProps = {
  bgImg: string;
  title: string;
  standard: string;
  summarys: summaryProps[];
  overViewLink: string[];
  overViewImg: string;
};

interface Props {
  num: number;
  modalData: DataProps;
  handleClose: (e: React.MouseEvent<HTMLElement>) => unknown;
}

export const ProjectModalItem: FC<Props> = ({
  modalData,
  num,
  handleClose,
}) => {
  return (
    <>
      <S.TopArea>
        <img src={modalData.bgImg} alt="bg" />
        <S.TopTitleBox>
          <span>#{num + 1}</span>
          <h2>{modalData.title}</h2>
          <strong>{modalData.standard}</strong>
        </S.TopTitleBox>
      </S.TopArea>
      <S.SummartArea>
        <S.AreaTitle>Summary</S.AreaTitle>
        <dl>
          {modalData.summarys.map((summary, index) => (
            <S.SummartBox key={index}>
              <dt>{summary.summaryTitle}</dt>
              <dd>
                <ul>
                  {summary.summaryInfo.map((infoItem, index) => (
                    <li key={index}>{infoItem}</li>
                  ))}
                </ul>
              </dd>
            </S.SummartBox>
          ))}
        </dl>
      </S.SummartArea>
      <S.OverViewArea>
        <S.AreaTitle>Overview</S.AreaTitle>
        <S.OverViewContent>
          {modalData.overViewLink.map((link) => (
            <S.OverViewButton
              overViewLink={link}
              onClick={() =>
                modalData.overViewLink ? window.open(link, "_blank") : null
              }
            >
              {link ? "Visit Website" : "Visit Website  (preparing)"}
            </S.OverViewButton>
          ))}
          <img src={modalData.overViewImg} alt="overview" />
        </S.OverViewContent>
      </S.OverViewArea>
      <S.CloseButton onClick={handleClose}>
        <span className="blind">닫기</span>
      </S.CloseButton>
    </>
  );
};
