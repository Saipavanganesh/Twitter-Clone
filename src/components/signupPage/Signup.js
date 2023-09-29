import React, {useState} from "react";
import "./Signup.css";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [data, setData] = useState({
        name: "",
        phone: "",
    })
    let Navigate = useNavigate();
    const handleCloseClick = () => {
        Navigate("/")
    }
    let name,value;
    const handleSignupChange = (event) => {
        name = event.target.name;
        value = event.target.value
        setData({...data, [name]:value })   
        localStorage.setItem(name,value)
    }   
    const handleSignupNext = () => {
        console.log(data)
    }
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
          <div className="sp-name-phone">
            <div className="sp-name">
                <input className="sp-input" type="text" name="name" placeholder="Name" onChange={handleSignupChange}/>
            </div>
            <div className="sp-phone">
                <input className="sp-input" type="text" name="phone" placeholder="Phone" onChange={handleSignupChange}/>
            </div>
          </div>
            <div className="sp-alink">
                <a className="sp-attribute" href="">Use email instead</a>
            </div>
            <div className="sp-dob-text">
                <div className="sp-dob-title"><b>Date of birth</b></div>
                <div className="sp-dob-story">
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                </div>
            </div>
            <div className="sp-date-of-birth">
                <input type="date" className="sp-dob-input" name="dob" onChange={handleSignupChange}/>
            </div>
            <div className="sp-next-button">
                <button className="sp-button" onClick={handleSignupNext}><b>Next</b></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
