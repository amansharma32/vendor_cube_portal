import "./apk.css";
import Navbar from "../Navbar";

import { BrowserRouter } from "react-router-dom";

import Wcube from "../Wcube";
import Win from "../Win";

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
