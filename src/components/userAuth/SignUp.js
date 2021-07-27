import React, { useState } from "react";
import "./userAuth.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const initialData = {
    fullName: "",
    password: "",
    email: "",
    // department: "",
    // level: "",
  };

  // show & setShow state handles  the password visibity
  const [show, setShow] = useState(false);
  const handlePassword = () => {
    setShow(!show);
  };

  // userDetails  state update the user input.
  const [userData, setUserData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // handle Submit handles the user details on submit.
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { fullName, password, email } = userData;
  return (
    <div div className="sign_up">
      <div className="row">
        <div className="col_2 col">
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

        <div className="col_1 col ">
          <div className="form_content">
            <h1>Let's set up your account</h1>

            <p className="form_question">
              Already have an account?
              <a href="/login" className="sign_up">
                Sign in
              </a>
            </p>

            <form action="" className=" user_Form" onSubmit={handleSubmit}>
              <p className="form_group">
                <label
                  htmlFor="fullName"
                  className={fullName === "" ? "s_label" : "hide_active"}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="user_input"
                  name="fullName"
                  onChange={handleChange}
                  value={fullName}
                  id="fullName"
                  placeholder="Full Name"
                />
              </p>

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
                Submit
              </button>
              <p>
                By clicking the "Submit" button, you agree to the
                <a href="/" className="link">
                  Terms
                </a>
                and
                <a href="/" className="link">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
