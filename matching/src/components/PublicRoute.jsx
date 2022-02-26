import React from "react";
import { Navigate } from "react-router-dom";
import isLogin from "utils/isLogin";

const PublicRoute = ({ children,restricted}) => {
    // restricted = false meaning public route
    // restricted = true meaning restricted route

    const auth = isLogin();

    return auth? <Navigate replace to='/'/> : children;

    // <Route
    //   {...rest}
    //   render={(props) =>
    //     isLogin() && restricted ? <Navigate replace to='/'/> : <Element {...props} />
    //   }
    // />
};
export default PublicRoute;
