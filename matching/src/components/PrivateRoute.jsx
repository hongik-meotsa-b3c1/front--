import React from "react";
import { Navigate } from "react-router-dom";
import isLogin from "utils/isLogin";

const PrivateRoute = ({ children }) => {
  //   return (
  //     // Show the component only when the user is logged in
  //     // Otherwise, redirect the user to /signin page
  //     <Route
  //       {...rest}
  //       render={(props) =>
  //         isLogin() ? <Component {...props} /> : navigate('/accounts/login')
  //       }
  //     />
  //   );

  const auth = isLogin();

  return auth ? children : <Navigate replace to="/accounts/login" />;
};
export default PrivateRoute;
