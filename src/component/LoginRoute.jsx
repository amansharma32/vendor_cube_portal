import React from "react";
import { Navbar } from "react-bootstrap";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogIn from "./LogIn";
import PageNotFound from "./PageNotFound";
import Registration from "./Registration";

const LoginRoute = () => {
  return (
    <>
      {/* <BrowserRouter> */}

      {/* <Navbar /> */}
      <Routes>
        <Route path="/registration" element={<Registration/>}></Route>

        <Route path="/logIn" element={<LogIn />}></Route>  
        {/* <Route path="/pageNotFound" element={<PageNotFound />}></Route>   */}
         
      </Routes>

      {/* </BrowserRouter> */}
    </>
  );
};

export default LoginRoute;
