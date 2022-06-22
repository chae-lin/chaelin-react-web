import { forwardRef, useCallback, useEffect, useState } from "react";
import { SectionProps, SetionTitle } from "../../common";
import { ProjectItem } from "./ProjectItem";
import { ProjectModalContainer as ProjectModal } from "./Modal/ProjectModalContainer";
import { ProjectStoreImpl } from "../../stores/ProjectStore";
import * as S from "./styles";

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
}

export const ProjectContainer = forwardRef<HTMLDivElement, SectionProps>(
  ({ className }, ref) => {
    const [clickIndex, setClickIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const shouldRenderChild = useDelayUnmount(isMounted, 600);

    const handleClick = useCallback((index: number) => {
      setClickIndex(index);
      setIsMounted(true);
    }, []);

    const handleCloseModal = useCallback(() => {
      setIsMounted(false);
    }, []);

    return (
      <S.Warp ref={ref} className={className}>
        <SetionTitle>Project</SetionTitle>
        <S.ProjectList>
          {ProjectStoreImpl.projectList?.map(
            ({ imgUrl, title, tags, bgColor }, index) => (
              <ProjectItem
                key={"project" + index}
                imgUrl={imgUrl}
                bgColor={bgColor}
                title={title}
                tags={tags}
                handleClick={() => handleClick(index)}
              />
            )
          )}
        </S.ProjectList>
        {shouldRenderChild && (
          <ProjectModal
            isMounted={isMounted}
            clickIndex={clickIndex}
            handleClose={handleCloseModal}
          />
        )}
      </S.Warp>
    );
  }
);

ProjectContainer.displayName = "ProjectContainer";
