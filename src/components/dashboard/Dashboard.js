import React from "react";
import "./Dashboard.css";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ExploreIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import MessageIcon from "@mui/icons-material/EmailOutlined";
import ListsIcon from "@mui/icons-material/ListAlt";
import CommunitiesIcon from "@mui/icons-material/PeopleOutline";
import ProfileIcon from "@mui/icons-material/PersonOutlined";
import MoreIcon from "@mui/icons-material/PendingOutlined";
import ProfileMoreIcon from '@mui/icons-material/MoreHorizOutlined';
import Logo from "../images/twitter-x-logo.png";
import { Avatar, IconButton } from "@mui/material";

function Dashboard() {
  return (
    <div className="db-outer-box">
      <div className="db-drawer">
        <div className="db-x-icon">
            <IconButton>
                <img className="db-page-logo" src={Logo} alt="Logo" />
            </IconButton>
        </div>

        <div className="db-common-box db-home">
          <div className="db-icon-div">
            <IconButton>
              <HomeIcon className="db-field-icon" style={{fontSize:"30"}}/>
            </IconButton>
          </div>
          <div className="db-field-title">Home</div>
        </div>

        <div className="db-common-box db-explore">
          <div className="db-icon-div">
            <IconButton>
              <ExploreIcon className="db-field-icon" style={{fontSize:"30"}}/>
            </IconButton>
          </div>
          <div className="db-field-title">Explore</div>
        </div>
       
        <div className="db-common-box db-notifications">
          <div className="db-icon-div">
            <IconButton>
              <NotificationsIcon className="db-field-icon" style={{fontSize:"30"}}/>
            </IconButton>
          </div>
          <div className="db-field-title">Notifications</div>
        </div>

        <div className="db-common-box db-messages">
          <div className="db-icon-div">
            <IconButton>
              <MessageIcon className="db-field-icon" style={{fontSize:"30"}}/>
            </IconButton>
          </div>
          <div className="db-field-title">Messages</div>
        </div>

        <div className="db-common-box db-lists">
          <div className="db-icon-div">
            <IconButton>
              <ListsIcon className="db-field-icon" style={{fontSize:"30"}}/>
            </IconButton>
          </div>
          <div className="db-field-title">Lists</div>
        </div>

        <div className="db-common-box db-communities">
          <div className="db-icon-div">
            <IconButton>
              <CommunitiesIcon className="db-field-icon" style={{fontSize:"30"}}/>
            </IconButton>
          </div>
          <div className="db-field-title">Communities</div>
        </div>

        <div className="db-common-box db-premium">
          <div className="db-icon-div">
            <IconButton>
            <img className="db-twitter-image" src={Logo} alt="Logo" />
            </IconButton>
          </div>
          <div className="db-field-title">Premium</div>
        </div>

        <div className="db-common-box db-profile">
          <div className="db-icon-div">
            <IconButton>
              <ProfileIcon className="db-field-icon" style={{fontSize:"30"}}/>
            </IconButton>
          </div>
          <div className="db-field-title">Profile</div>
        </div>

        <div className="db-common-box db-more">
          <div className="db-icon-div">
            <IconButton>
              <MoreIcon className="db-field-icon" style={{fontSize:"30"}}/>
            </IconButton>
          </div>
          <div className="db-field-title">More</div>
        </div>

        <div className="db-common-box  db-post-button">
            <button className="db-button"><b>Post</b></button>
        </div>
      </div>
      <div className="db-bottom-profile">
        <div className="db-profile-pic">
            <Avatar/>
        </div>
        <div className="db-profile-details">
            <div>Sai Pavan Ganesh</div>
            <div className="db-twitter-id">@Saipavan_ganesh</div>
        </div>
        <div className="db-profile-more">
            <ProfileMoreIcon className="db-profile-more-icon"/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
