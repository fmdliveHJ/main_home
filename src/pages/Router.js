import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./main/Main";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </>
  );
};

export default Router;
