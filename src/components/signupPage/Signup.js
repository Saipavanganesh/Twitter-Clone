import React, { useState } from "react";
import "./Signup.css";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import { IconButton, TextField } from "@mui/material";
import { signUp } from "../../services/UserServices";

function Signup({ setShowSignup }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const nameRegex = /^[a-zA-Z\s\-']+$/;
  const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
  const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;

  const [errors, setErrors] = useState({
    firstNameError: false,
    firstNameHelper: "",
    lastNameError: false,
    lastNameHelper: "",
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
    confirmPasswordError: false,
    confirmPasswordHelper: "",
  });

  const handleCloseClick = () => {
    setShowSignup(false);
  };
  let name, value;
  const handleSignupChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setData({ ...data, [name]: value });
  };

  //Handling validation
  const handleSignupNext = async () => {
    let nameTest = nameRegex.test(data.name);
    let emailTest = emailRegex.test(data.email);
    let passwordTest = passwordRegex.test(data.password);

    setErrors((prevstate) => ({
      ...prevstate,
      nameError: !nameTest,
      nameHelper: nameTest ? "" : "Enter correct name",

      emailError: !emailTest,
      emailHelper: emailTest ? "" : "Enter correct Email",

      passwordError: !passwordTest,
      passwordHelper: passwordTest ? "" : "Enter correct Password",

      confirmPasswordError: data.password !== data.confirmPassword,
      confirmPasswordHelper:
        data.password !== data.confirmPassword ? "Passwords don't match" : "",
    }));
    
    if(nameTest === true && emailTest === true && passwordTest === true){
    let response = await signUp(data);
      console.log(response);
      localStorage.setItem("token", response.data.data.userId);
    }
  };
  return (
    <div className="sp-outer-box">
      <div className="sp-main-content">
        <div className="sp-close">
          <IconButton>
            <CloseIcon className="sp-close-button" onClick={handleCloseClick} />
          </IconButton>
        </div>
        <div className="sp-form-content">
          <div className="sp-title">
            <b>Create your account</b>
          </div>
          <div className="sp-name-email">
            <div className="sp-name">
              <TextField
                className="sp-input"
                name="name"
                label="Name"
                variant="outlined"
                InputProps={{style:{color:"white"}}}
                InputLabelProps={{style:{color:"gray"}}}
                onChange={handleSignupChange}
                value={data.name}
                error={errors.nameError}
                helperText={errors.nameHelper}
              />
            </div>
            <div className="sp-email">
              <TextField
                className="sp-input"
                name="email"
                label="Email"
                variant="outlined"
                InputProps={{style:{color:"white"}}}
                InputLabelProps={{style:{color:"gray"}}}
                onChange={handleSignupChange}
                value={data.email}
                error={errors.emailError}
                helperText={errors.emailHelper}
              />
            </div>
            <div className="sp-password">
              <TextField
                className="sp-input"
                type="password"
                name="password"
                label="Password"
                InputProps={{style:{color:"white"}}}
                InputLabelProps={{style:{color:"gray"}}}
                onChange={handleSignupChange}
                value={data.password}
                error={errors.passwordError}
                helperText={errors.passwordHelper}
              />
            </div>
            <div className="sp-confirm-password">
              <TextField
                className="sp-input"
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                InputProps={{style:{color:"white"}}}
                InputLabelProps={{style:{color:"gray"}}}
                onChange={handleSignupChange}
                error={errors.confirmPasswordError}
                helperText={errors.confirmPasswordHelper}
              />
            </div>
          </div>

          <div className="sp-dob-text">
            <div className="sp-dob-title">
              <b>Date of birth</b>
            </div>
            <div className="sp-dob-story">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </div>
          </div>
          <div className="sp-date-of-birth">
            <input
              type="date"
              className="sp-dob-input"
              name="dob"
              onChange={handleSignupChange}
            />
          </div>
          <div className="sp-next-button">
            <button className="sp-button" onClick={handleSignupNext}>
              <b>Next</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
