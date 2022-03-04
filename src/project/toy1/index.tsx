import React from "react";
import { Link } from "react-router-dom";

const Toy1 = () => {
  return (
    <div>
      <div>페이지2</div>
      <Link to="/">main</Link>
      <Link to="/page1">page1</Link>
    </div>
  );
};

export default Toy1;
