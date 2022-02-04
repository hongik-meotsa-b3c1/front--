import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";


function MoviesRoutes(){
    return (
        <Routes> 
            <Route path="search/*" element={<Search />} /> 
        </Routes>     
    )
}

export default MoviesRoutes;