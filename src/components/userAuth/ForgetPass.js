import React, { useState } from "react";
import "./userAuth.css";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div div className="sign_up">
      <div className="row">
        <div className="col_1 col">
          <div className="form_content">
            <h1>Forgotten Password</h1>

            <p className="form_question">
              Already have an account?
              <a href="/login" className="sign_up">
                Sign in
              </a>
            </p>

            <form action="" className=" user_Form" onSubmit={handleSubmit}>
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

              <button className="submit_btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="col_2 register col">
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

export default ForgetPass;
