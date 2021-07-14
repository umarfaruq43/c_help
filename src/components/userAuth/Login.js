import React, { useState } from "react";
import "./userAuth.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../LandingPage/NavBar/Navbar";
// import PropTypes from "prop-types";

const Login = ({ setToken }) => {
  // function to call the token
  const fetchToken = async () => {
    const url = "http://localhost:8080/login";
    try {
      const res = await fetch(url);
      const data = await res.json();
      setToken(data);
    } catch (err) {
      console.log(err);
    }
  };

  // initial data for the user form
  const initialData = {
    password: "",
    email: "",
  };

  // show & setShow state handles  the password visibity
  const [show, setShow] = useState(false);
  const handlePassword = () => {
    setShow(!show);
  };

  // userDetails  state update the user input.
  const [userDetails, setUserDetails] = useState(initialData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  // handle Submit handles the user details on submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchToken();
  };

  // destructure the user input.
  const { email, password } = userDetails;

  return (
    <div div className="sign_up">
      <div className="row">
        <div className="col_1 col">
          <div className="form_content">
            <h1>Welcome Back</h1>

            <p className="form_question">
              Do not have an account?
              <a href="/register" className="sign_up">
                Sign up
              </a>
            </p>

            <form className=" user_Form" onSubmit={handleSubmit}>
              <p className="form_group">
                <label
                  htmlFor="email"
                  className={email === "" ? "s_label" : "hide_active"}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="user_input"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  id="email"
                  placeholder="Email Address"
                />
              </p>

              <p className="form_group">
                <label
                  htmlFor="password"
                  className={password === "" ? "s_label" : "hide_active"}
                >
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  className="user_input"
                  name="password"
                  onChange={handleChange}
                  value={password}
                  placeholder="Password"
                />
                <span className="visibilty_toggler" onClick={handlePassword}>
                  {show ? (
                    <FaEyeSlash className="eye" />
                  ) : (
                    <FaEye className="eye" />
                  )}
                </span>
              </p>

              <button className="submit_btn" type="submit">
                Login
              </button>
              <p>
                Forgotten password? Click
                <a href="/forgetPassword" className="link">
                  here
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="col_2  login_bg  col">
          <div className="sign_up_text">
            <h1> Campus Help </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              perspiciatis eos dignissimos similique commodi! Alias? Minima
              perspiciatis eos dignissimos similique commodi! Alias? Minima
              perspiciatis eos dignissimos similique commodi! Alias?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
export default Login;
