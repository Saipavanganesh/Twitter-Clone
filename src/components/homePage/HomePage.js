import "./HomePage.css";
import React from "react";
import logo from "../images/twitter-x-logo.png";
import googleLogo from "../images/google-logo.png";
import appleLogo from "../images/apple-logo.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
    let Navigate = useNavigate();
    const handleLoginClick = () => {
        Navigate("/login")
    }
    const handleSignupClick = () => {
        Navigate("/signup")
    }
  return (
    <div className="hp-outer-box">
      <div className="hp-left-box">
        <div className="hp-x-logo">
          <img className="twitter-image" src={logo} alt="Twitter-Logo" />
        </div>
      </div>
      <div className="hp-right-box">
        <div className="hp-form-content">
          <div className="hp-text">
            <div className="hp-hapenning-now">
              <b>Happening now</b>{" "}
            </div>
            <div className="hp-join-today">
              <b>Join today.</b>{" "}
            </div>
          </div>
          <div className="hp-buttons">
            <div className="hp-google">
              <button className="hp-google-button">
                <img
                  className="hp-google-logo"
                  src={googleLogo}
                  alt="google-logo"
                />
                Sign up with Google
              </button>
            </div>
            <div className="hp-apple">
              <button className="hp-apple-button">
                <img
                  className="hp-apple-logo"
                  src={appleLogo}
                  alt="apple-logo"
                />
                Sign up with Apple
              </button>
            </div>
            <div className="hp-or">
              <hr className="hp-hr"/>
              <span className="hp-or-text">or</span>
              <hr className="hp-hr"/>
            </div>
            <div className="hp-create-account">
              <button className="hp-create-account" onClick={handleSignupClick}>Create account</button>
            </div>
            <div className="hp-terms">
              By signing up, you agree to the
              <a className="hp-bottom-span-text" href=""> Terms of Service</a> and
              <a className="hp-bottom-span-text" href=""> Privacy Policy</a>,
              including <a className="hp-bottom-span-text" href=""> Cookie Use.</a>
            </div>
          </div>
          <div className="hp-already-account">
            <div className="hp-text">
              <p className="hp-asking-text"><b>Already have an account?</b></p>
            </div>
            <div className="hp-sign-in-button">
              <button className="hp-sign-in" onClick={handleLoginClick}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
