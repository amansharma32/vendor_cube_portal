import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ph from "../images/favicon.png";

import { useHistory } from "react-router-use-history";
import Footer from "./Footer";
// import { Button } from 'react-bootstrap';

import { AiFillLinkedin } from "react-icons/ai";
// import {AiFillGithub} from 'react-icons/ai'
import { AiFillInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const LogIn = () => {
   
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e)=>{
    e.preventDefault();
    const res = await fetch("/registration", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        
        email,
        password,

      }),
    });

    
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successful");
      history.push("/dashboard");
    }
  }

  return (
    <>
      <title>Sign in - vendor cube </title>

      <div id="auth">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12 mx-auto">
              <div className="card pt-4">
                <div className="card-body">
                  <div className="text-center mb-5">
                    <img src={ph} height="48" className="mb-4" alt="" />
                    <h3>Sign In</h3>
                    <p>Please sign in to continue to vendor cube .</p>
                  </div>

                  <form
                    action="./aboutUs"
                    className="form-signin"
                    id="registration-form"
                    method="post"
                  >
                    <div className="form-group position-relative has-icon-left">
                      <label>Email</label>
                      <div className="position-relative">
                        <input
                          name="email"
                          id="email"
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          placeholder="Enter your Email"
                        />

                        <div className="form-control-icon">
                          <i data-feather="user"></i>
                        </div>
                      </div>
                    </div>
                    <div className="form-group position-relative has-icon-left">
                      <div className="clearfix">
                        <label>Password</label>
                        <a
                          href="auth-forgot-password.html"
                          className="float-right"
                        >
                          <small>Forgot password?</small>
                        </a>
                      </div>
                      <div className="position-relative">
                        <input
                          name="password"
                          id="password"
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          placeholder="Enter your Password"
                        />

                        <div className="form-control-icon">
                          <i data-feather="lock"></i>
                        </div>
                      </div>
                    </div>

                    <div className="form-check clearfix my-4">
                      <div className="checkbox float-left">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          className="form-check-input"
                        />

                        <label for="checkbox1">Remember me</label>
                      </div>
                      <div className="float-right">
                        <NavLink to="/registration">
                          Don't Have An Account?Register
                        </NavLink>
                      </div>
                    </div>
                    <div className="clearfix">
                     
                      <input
                        type="submit"
                        name="login"
                        id="login"
                        className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 w-100"
                        value="Sign In"
                        onClick={loginUser}
                      ></input>

                    </div>
                  </form>
                  <div className="divider">
                    <div className="divider-text">OR</div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="header_socials">
                        <a href="http://linkedin.com" target="_blank">
                          <AiFillLinkedin />
                        </a>

                        <a href="http://instagram.com" target="_blank">
                          <AiFillInstagram />
                        </a>

                        <a href="http://google.com" target="_blank">
                          <FcGoogle />
                        </a>

                        <a href="http://twitter.com" target="_blank">
                          <FaTwitter />
                        </a>

                        <a href="http://facebook.com" target="_blank">
                          <BsFacebook />
                        </a>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <a
                        className="btn  btn-google text-uppercase btn-outline btn-md btn-block waves-effect text-center m-b-20 w-100"
                        href="#"
                      >
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                        Signup Using Google
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
