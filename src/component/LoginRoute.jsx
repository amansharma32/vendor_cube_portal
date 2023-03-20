import React from "react";
import { Navbar } from "react-bootstrap";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogIn from "./LogIn";
import Registration from "./Registration";

const LoginRoute = () => {
  return (
    <>
      {/* <BrowserRouter> */}

      {/* <Navbar /> */}
      <Routes>
        <Route path="/registration" element={<Registration/>}></Route>

        <Route path="/logIn" element={<LogIn />}></Route>
      </Routes>

      {/* </BrowserRouter> */}
    </>
  );
};

export default LoginRoute;
