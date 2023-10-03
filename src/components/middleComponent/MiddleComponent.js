import React from "react";
import "./MiddleComponent.css";
import { Avatar, IconButton } from "@mui/material";
import ImageIcon from "@mui/icons-material/ImageOutlined";
import GifIcon from "@mui/icons-material/GifBoxOutlined";
import PollIcon from "@mui/icons-material/AlignHorizontalLeftOutlined";
import EmojiIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import ScheduleIcon from "@mui/icons-material/EventRepeatOutlined";
import LocationIcon from "@mui/icons-material/FmdGoodOutlined";
import ReplyIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RetweetIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ViewIcon from "@mui/icons-material/PollOutlined";
import ShareIcon from "@mui/icons-material/FileUploadOutlined";
import Image from "../images/twitter-tweet-image.jpg";

function MiddleComponent() {
  return (
    <div className="mc-outer-component">
      <div className="mc-home">
        <div className="mc-home-title">
          <b>Home</b>
        </div>
        <div className="mc-for-following">
          <div className="mc-for">
            <b>For you</b>
          </div>
          <div className="mc-following">
            <b>Following</b>
          </div>
        </div>
      </div>
      <div className="mc-whats-happening">
        <div className="mc-profile">
          <IconButton>
            <Avatar />
          </IconButton>
        </div>

        <div className="mc-wh-content">
          <div className="mc-happening-text">What is happnening?!</div>
          <div className="mc-bottom">
            <div className="mc-icons">
              <ImageIcon className="mc-icon-color" style={{ fontSize: "20" }} />
              <GifIcon className="mc-icon-color" style={{ fontSize: "20" }} />
              <PollIcon className="mc-icon-color" style={{ fontSize: "20" }} />
              <EmojiIcon className="mc-icon-color" style={{ fontSize: "20" }} />
              <ScheduleIcon
                className="mc-icon-color"
                style={{ fontSize: "20" }}
              />
              <LocationIcon
                className="mc-icon-color"
                style={{ fontSize: "20" }}
              />
            </div>

            <div className="mc-post-button">
              <button className="mc-post">
                <b>Post</b>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mc-main-tweet">
        <div className="mc-details">
          <div className="mc-profile mc-tweet-profile">
            <IconButton>
              <Avatar />
            </IconButton>
          </div>
          <div className="mc-accout-details">
            <span className="mc-text mc-account-name">
              <b>Sai Pavan Ganesh</b>
            </span>
            <span className="mc-text mc-gray-text mc-account-id">
              {} @Saipavan_ganesh
            </span>
            <span className="mc-text mc-gray-text mc-tweet-date">
              {" "}
              &#8226; Oct 2
            </span>
          </div>
        </div>
        <div className="mc-tweet">
            Good Morning!!!!!!
        </div>
        <div className="mc-image">
            <img className="mc-tweet-image" src={Image} alt="Image" />
        </div>
        <div className="mc-tweet-options">
          <ReplyIcon className="mc-gray-text"/>
          <RetweetIcon className="mc-gray-text"/>
          <LikeIcon className="mc-gray-text"/>
          <ViewIcon className="mc-gray-text"/>
          <ShareIcon className="mc-gray-text"/>
        </div>
      </div>
    </div>
  );
}

export default MiddleComponent;
