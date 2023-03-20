import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useHistory } from "react-router-use-history";
import ph from "../images/favicon.png";
// import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { AiFillLinkedin } from "react-icons/ai";
// import {AiFillGithub} from 'react-icons/ai'
import { AiFillInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Registration = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    category: "",
    password: "",
    confirmpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      email,
      phonenumber,
      category,
      password,
      confirmpassword,
    } = user;

    const res = await fetch("/registration", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phonenumber,
        category,
        password,
        confirmpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      history("/logIn");
    }
  };
  return (
    <>
      <title>Sign up - vendor cube </title>
      <div id="auth">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 mx-auto">
              <div className="card pt-4">
                <div className="card-body">
                  <div className="text-center mb-5">
                    <img src={ph} height="48" className="mb-4" alt="" />
                    <h3>Sign Up</h3>
                    <p>Please fill the form to register.</p>
                  </div>
                  <form 

                  id="registration-form" 
                  method="post">

                    <div className="row register-form">
                      <div className="col-md-6 col-12">
                        <div className="form-group ">
                          <label>First Name</label>

                          <input
                            type="text"
                            className="form-control "
                            name="firstname"
                            id="firstname"
                            onChange={handleInputs}
                            autoComplete="off"
                            value={user.firstname}
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label>Last Name</label>

                          <input
                            type="text"
                            className="form-control"
                            name="lastname"
                            id="lastname"
                            onChange={handleInputs}
                            autoComplete="off"
                            value={user.lastname}
                            placeholder="Enter Your Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label>Your Email</label>

                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            onChange={handleInputs}
                            autoComplete="off"
                            value={user.email}
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label>Phone Number</label>

                          <input
                            type="telephone"
                            maxlength="10"
                            className="form-control"
                            name="phonenumber"
                            id="phonenumber"
                            onChange={handleInputs}
                            autoComplete="off"
                            value={user.phonenumber}
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">
                            Category
                          </label>
                          <select
                            class="form-control"
                            name="category"
                            // autoComplete="off"
                            value={user.category}
                            onChange={handleInputs}
                            id="category"
                          >
                            <option>none </option>
                            <option>engineering </option>
                            <option>Non-engineering </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label>Password </label>

                          <input
                            type="Password"
                            className="form-control"
                            name="password"
                            id="password"
                            onChange={handleInputs}
                            autoComplete="off"
                            value={user.password}
                            placeholder="Enter your Password"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="form-group">
                          <label>Confirm Password</label>

                          <input
                            type="Password"
                            className="form-control"
                            name="confirmpassword"
                            id="confirmpassword"
                            onChange={handleInputs}
                            autoComplete="off"
                            value={user.confirmpassword}
                            placeholder="Enter Your confirm password"
                          />
                        </div>
                      </div>
                      <NavLink to="/logIn">Have an account? Login</NavLink>
                    </div>

                    <br />

                    <div className="col-md-12">
                      <button
                        type="submit"
                        value="Register"
                        name="registration"
                        onClick={PostData}
                        className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20 w-100"
                      >
                        Submit
                      </button>
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
                        <img
                          src="https://img.icons8.com/color/16/000000/google-logo.png"
                          alt=""
                        />
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

export default Registration;
