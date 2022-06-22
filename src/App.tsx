import * as React from "react";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router";

const Portfolio = loadable(() => import("./project/portfolio"));
const Toy1 = loadable(() => import("./project/toy1"));
const Toy2 = loadable(() => import("./project/toy2"));

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="" element={<Portfolio />} />
      <Route path="/page1" element={<Toy1 />} />
      <Route path="/page2" element={<Toy2 />} />
    </Routes>
  );
};

export default App;
