import "./HomePage.css";
import React from "react";
import logo from "../images/twitter-x-logo.png";
import googleLogo from "../images/google-logo.png";
import appleLogo from "../images/apple-logo.png";

function HomePage() {
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
              -------------------or-------------------
            </div>
            <div className="hp-create-account">
              <button className="hp-create-account">Create account</button>
            </div>
            <div className="hp-terms">
              By signing up, you agree to the{" "}
              <span className="hp-bottom-span-text">Terms of Service</span> and{" "}
              <span className="hp-bottom-span-text">Privacy Policy</span>,
              including <span className="hp-bottom-span-text">Cookie Use.</span>
            </div>
          </div>
          <div className="hp-already-account">
            <div className="hp-text"><p className="hp-asking-text">Already have an account?</p></div>
            <div className="hp-sign-in-button">
              <button className="hp-sign-in">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
