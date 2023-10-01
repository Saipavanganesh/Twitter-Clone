import React, { useState } from "react";
import "./LoginPage.css";
import xLogo from "../images/twitter-x-logo.png";
import googleLogo from "../images/google-logo.png";
import appleLogo from "../images/apple-logo.png";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import { IconButton, TextField } from "@mui/material";

function LoginPage({ setShowLogin }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const logEmailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
  const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

  const [logError, setLogError] = useState({
    logEmailError: false,
    logEmailHelper: "",
    logPasswordError: false,
    logPasswordHelper: "",
  });

  const handleCloseClick = () => {
    setShowLogin(false);
  };
  let name, value;
  const handleLoginChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  //Handling Validation
  const handleLoginNext = () => {
    let logEmailTest = logEmailRegex.test(loginData.email);
    let logPasswordTest = passwordRegex.test(loginData.password);

    setLogError((prevstate) => ({
      ...prevstate,
      logEmailError: !logEmailTest,
      logEmailHelper: logEmailTest ? "" : "Enter correct Email",

      logPasswordError: !logPasswordTest,
      logPasswordHelper: logPasswordTest ? "" : "Enter correct Password",
    }));
    console.log(loginData);
  };
  return (
    <div className="lp-outer-box">
      <div className="lp-main-content">
        <div className="lp-head">
          <div className="lp-close">
            <IconButton>
              <CloseIcon className="lp-close-icon" onClick={handleCloseClick} />
            </IconButton>
          </div>
          <div className="lp-logo">
            <img src={xLogo} alt="x-logo" />
          </div>
        </div>
        <div className="lp-form">
          <div className="lp-title">Sign in to X</div>

          <div className="lp-buttons">
            <div className="lp-google">
              <button className="lp-google-button">
                <img
                  className="lp-google-logo"
                  src={googleLogo}
                  alt="google-logo"
                />
                Sign up with Google
              </button>
            </div>

            <div className="lp-apple">
              <button className="lp-apple-button">
                <img
                  className="lp-apple-logo"
                  src={appleLogo}
                  alt="apple-logo"
                />
                Sign up with Apple
              </button>
            </div>

            <div className="lp-or">
              <hr className="lp-hr" />
              <span className="lp-or-text">or</span>
              <hr className="lp-hr" />
            </div>

            <div className="lp-email">
              <TextField
                className="lp-input"
                name="email"
                label="Email"
                variant="outlined"
                InputProps={{style:{color:"white"}}}
                InputLabelProps={{style:{color:"gray"}}}
                onChange={handleLoginChange}
                value={loginData.email}
                error={logError.logEmailError}
                helperText={logError.logEmailHelper}
              />
            </div>
            <div className="lp-password">
              <TextField
                className="lp-input"
                type="password"
                name="password"
                label="Password"
                InputProps={{style:{color:"white"}}}
                InputLabelProps={{style:{color:"gray"}}}
                onChange={handleLoginChange}
                value={loginData.password}
                error={logError.logPasswordError}
                helperText={logError.logPasswordHelper}
              />
            </div>
            <div className="lp-google">
              <button className="lp-google-button" onClick={handleLoginNext}>
                Next
              </button>
            </div>

            <div className="lp-google">
              <button className="lp-google-button lp-forgot-password">
                Forgot password?
              </button>
            </div>

            <div className="lp-no-account">
              Don't have an account?
              <a className="lp-link" href="/signup">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
