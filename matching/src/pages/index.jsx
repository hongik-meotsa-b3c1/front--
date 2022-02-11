import React from "react";
import AppLayout from "components/AppLayout";
import { Route,  Routes } from "react-router-dom";
import Main from "./Main"
import Test from "./Test"
import AccountsRoutes from "./accounts/index"
import MoviesRoutes from "./movies/index"


function Root(){
    return(
        <AppLayout>
            최상위 컴포넌트
            
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/test" element={<Test /> } />
                <Route path="/accounts/*" element={<AccountsRoutes />} />
                <Route path="/movies/*" element={<MoviesRoutes />} />        
            </Routes>
         
           
        </AppLayout>

    )
}

export default Root;
