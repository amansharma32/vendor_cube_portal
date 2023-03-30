import "./apk.css";
import Navbar from "../Navbar";

import { BrowserRouter, Route } from "react-router-dom";

import Wcube from "../Wcube";
import Win from "../Win";
import PageNotFound from "../PageNotFound";
const Apk = () => {
  return (

    <>
      <BrowserRouter>
        <Navbar />
            
        <Wcube />
        <Win />
      </BrowserRouter>
    </>
  );
};

export default Apk;
