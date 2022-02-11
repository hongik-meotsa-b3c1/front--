// import React from "react";
// import { useAppContext } from "store";
// import { Route }  from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function LoginRequiredRoute({ element, ...kwargs }){
//     const{ 
//         store: { isAuthenticated }
//     } = useAppContext();

//     console.log("isAuthenticated: ", isAuthenticated);

//     if (isAuthenticated){
//         return <Route {...kwargs} element={element} />;
//     }
//     else{
//         return <Route path="/" element={<Navigate replace to="/login" />} />
//     }


    
        
    

    // return <Route {...kwargs} render={props => {
    //     if ( isAuthenticated ){
    //         return <Component {...props} />
    //         console.log("isAuthenticated: ", isAuthenticated);
    //     }
    //     else{
    //         return(
    //             <
    //             <Redirect 
    //                 to={{
    //                     pathname: "/accounts/login",
    //                     state: { from: props.location }
    //                 }} 
    //             />
    //         );
    //     }
    // }} />



