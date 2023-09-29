import React, { useState } from "react";
import "./LoginPage.css";
import xLogo from "../images/twitter-x-logo.png";
import googleLogo from "../images/google-logo.png";
import appleLogo from "../images/apple-logo.png";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
    const [loginData, setLoginData] = useState({
        userInput: "",
    })
    let Navigate = useNavigate();
    const handleCloseClick = () => {
        Navigate("/")
    }
    let name,value;
    const handleLoginChange = (event) => {
        name = event.target.name;
        value = event.target.value
        setLoginData({...loginData, [name]:value })   
    }  
    const handleLoginNext = () => {
        console.log(loginData);
    }
  return (
    <div className="lp-outer-box">
      <div className="lp-main-content">
        <div className="lp-head">
          <div className="lp-close">
            <IconButton>
              <CloseIcon className="lp-close-icon" onClick={handleCloseClick}/>
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

            <div className="lp-text-field">
              <input
                className="lp-input-field"
                type="text"
                name="userInput"
                placeholder="Phone, email, or username"
                onChange={handleLoginChange}
              />
            </div>

            <div className="lp-google">
              <button className="lp-google-button" onClick={handleLoginNext}>Next</button>
            </div>

            <div className="lp-google">
              <button className="lp-google-button lp-forgot-password">
                Forgot password?
              </button>
            </div>

            <div className="lp-no-account">
              Don't have an account?
              <Link className="lp-link" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
