import React, { useRef } from "react";
import { Progress, Title } from "../../common";

export const Skill = () => {
  return (
    <div>
      <Title>Skill</Title>
      <Progress title="Html5" percent={30} />
      <Progress title="Html5" percent={30} />
      <Progress title="Html5" percent={30} />
    </div>
  );
};
