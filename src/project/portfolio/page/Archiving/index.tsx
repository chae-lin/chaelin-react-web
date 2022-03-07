import { PageLayout } from "../../common";
import { ArchiveItem } from "./ArchiveItem";
import * as S from "./styles";

export const Archiving = () => {
  return (
    <PageLayout title="Archiving">
      <S.ArchiveList>
        <ArchiveItem
          title="ss"
          text="dsdfsdfs"
          link="dd"
          infos={["dd", "dd"]}
        />
        <ArchiveItem
          title="ss"
          text="dsdfsdfs"
          link="dd"
          infos={["dd", "dd"]}
        />
      </S.ArchiveList>
    </PageLayout>
  );
};
