import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import AccountsRoutes from "./accounts/index";
import Layout from "ui/Layout";
import PrivateRoute from "components/PrivateRoute";
import PostsRoute from "./posts";

const Root = () => {

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route path="/accounts/*" element={<AccountsRoutes />} />

          <Route path="/posts/*" element={
            <PrivateRoute>
              <PostsRoute/>
            </PrivateRoute>
          }/>

      </Routes>
    </Layout>
  );
};

export default Root;
