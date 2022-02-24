import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Test from "./Test";
import AccountsRoutes from "./accounts/index";
import MoviesRoutes from "./movies/index";
import Layout from "ui/Layout";
import Write from "./posts/write";

function Root() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/accounts/*" element={<AccountsRoutes />} />
        <Route path="/movies/*" element={<MoviesRoutes />} />
        <Route path='/write' element={<Write/>}/>
      </Routes>
    </Layout>
  );
}

export default Root;
