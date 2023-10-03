import React from "react";
import "./LeftComponent.css";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import MessageIcon from "@mui/icons-material/EmailOutlined";
import ListsIcon from "@mui/icons-material/ListAlt";
import CommunitiesIcon from "@mui/icons-material/PeopleOutline";
import ProfileIcon from "@mui/icons-material/PersonOutlined";
import MoreIcon from "@mui/icons-material/PendingOutlined";
import ProfileMoreIcon from "@mui/icons-material/MoreHorizOutlined";
import Logo from "../images/twitter-x-logo.png";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LeftComponent() {
  let Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null); //Profile
  const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
  const handlelcLogout = () => {
    if (localStorage.key) {
      localStorage.removeItem("token");
    }
    Navigate("/");
  };
  return (
    <div className="lc-outer-box">
      <div className="lc-drawer">
        <div className="lc-x-icon">
          <IconButton>
            <img className="lc-page-logo" src={Logo} alt="Logo" />
          </IconButton>
        </div>

        <div className="lc-common-box lc-home">
          <div className="lc-icon-div">
            <IconButton>
              <HomeIcon className="lc-field-icon" style={{ fontSize: "30" }} />
            </IconButton>
          </div>
          <div className="lc-field-title">Home</div>
        </div>

        <div className="lc-common-box lc-explore">
          <div className="lc-icon-div">
            <IconButton>
              <ExploreIcon
                className="lc-field-icon"
                style={{ fontSize: "30" }}
              />
            </IconButton>
          </div>
          <div className="lc-field-title">Explore</div>
        </div>

        <div className="lc-common-box lc-notifications">
          <div className="lc-icon-div">
            <IconButton>
              <NotificationsIcon
                className="lc-field-icon"
                style={{ fontSize: "30" }}
              />
            </IconButton>
          </div>
          <div className="lc-field-title">Notifications</div>
        </div>

        <div className="lc-common-box lc-messages">
          <div className="lc-icon-div">
            <IconButton>
              <MessageIcon
                className="lc-field-icon"
                style={{ fontSize: "30" }}
              />
            </IconButton>
          </div>
          <div className="lc-field-title">Messages</div>
        </div>

        <div className="lc-common-box lc-lists">
          <div className="lc-icon-div">
            <IconButton>
              <ListsIcon className="lc-field-icon" style={{ fontSize: "30" }} />
            </IconButton>
          </div>
          <div className="lc-field-title">Lists</div>
        </div>

        <div className="lc-common-box lc-communities">
          <div className="lc-icon-div">
            <IconButton>
              <CommunitiesIcon
                className="lc-field-icon"
                style={{ fontSize: "30" }}
              />
            </IconButton>
          </div>
          <div className="lc-field-title">Communities</div>
        </div>

        <div className="lc-common-box lc-premium">
          <div className="lc-icon-div">
            <IconButton>
              <img className="lc-twitter-image" src={Logo} alt="Logo" />
            </IconButton>
          </div>
          <div className="lc-field-title">Premium</div>
        </div>

        <div className="lc-common-box lc-profile">
          <div className="lc-icon-div">
            <IconButton>
              <ProfileIcon
                className="lc-field-icon"
                style={{ fontSize: "30" }}
              />
            </IconButton>
          </div>
          <div className="lc-field-title">Profile</div>
        </div>

        <div className="lc-common-box lc-more">
          <div className="lc-icon-div">
            <IconButton>
              <MoreIcon className="lc-field-icon" style={{ fontSize: "30" }} />
            </IconButton>
          </div>
          <div className="lc-field-title">More</div>
        </div>

        <div className="lc-common-box  lc-post-button">
          <button className="lc-button">
            <b>Post</b>
          </button>
        </div>
      </div>
      <div className="lc-bottom-profile" onClick={handleMenu}>
        <div className="lc-profile-pic">
          <Avatar />
        </div>
        <div className="lc-profile-details">
          <div>Sai Pavan Ganesh</div>
          <div className="lc-twitter-id">@Saipavan_ganesh</div>
        </div>
        <div className="lc-profile-more">
          <ProfileMoreIcon className="lc-profile-more-icon" />
        </div>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handlelcLogout}>Log Out</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default LeftComponent;
