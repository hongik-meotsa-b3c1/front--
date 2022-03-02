import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Test from "./Test";
import AccountsRoutes from "./accounts/index";
import MoviesRoutes from "./movies/index";
import Layout from "ui/Layout";
import Write from "./posts/Write";
import PublicRoute from "components/PublicRoute";
import PrivateRoute from "components/PrivateRoute";
import MovieSearch from "./posts/MovieSearch";

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
        <Route path="/movies/*" element={
            <PrivateRoute>
              <MoviesRoutes />
            </PrivateRoute>
          }/>
        <Route path="/write" element={
            <PrivateRoute>
              <Write />
            </PrivateRoute>
          }/>
        <Route path="/test" element={
            <PrivateRoute>
              <MovieSearch />
            </PrivateRoute>
          }/>
      </Routes>
    </Layout>
  );
};

export default Root;
