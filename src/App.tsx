import * as React from "react";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router";

const Page1 = loadable(() => import("./Page/Page1"));
const Page2 = loadable(() => import("./Page/Page2"));

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
};

export default App;
