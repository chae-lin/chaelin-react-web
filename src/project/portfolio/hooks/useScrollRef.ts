import { useEffect, useRef } from "react";

export const useScrollRef = (
  setState: React.Dispatch<React.SetStateAction<string>>,
  projectName: string
): React.MutableRefObject<HTMLDivElement | null>[] => {
  const isRef = useRef<HTMLDivElement | null>(null);
  const option = {};

  useEffect(() => {
    //IntersectionObserver ref 감지
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setState(projectName);
      }
    }, option);

    if (isRef.current) {
      observer.observe(isRef.current);
    }

    //disconnect 관찰 중지
    return () => observer.disconnect();
  }, []);

  return [isRef];
};
