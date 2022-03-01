import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <div>페이지1</div>
      <Link to="/page2">Page 2</Link>
    </div>
  );
};

export default Page1;
