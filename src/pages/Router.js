import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./main/Main";
import Baronote from "../pages/sub/front/Baronote";
import Hswf from "./sub/publishing/Hswf";
import Nowon from "./sub/publishing/Nowon";
import Webjangi from "./sub/publishing/Webjangi";
import About from "./sub/about/About";
import Jeep from "./sub/works/Jeep";
import NudieJeans from "./sub/works/NudieJeans";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/baronote" element={<Baronote />} />
        <Route path="/Hswf" element={<Hswf />} />
        <Route path="/Nowon" element={<Nowon />} />
        <Route path="/Webjangi" element={<Webjangi />} />
        <Route path="/Jeep" element={<Jeep />} />
        <Route path="/NudieJeans" element={<NudieJeans />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default Router;
