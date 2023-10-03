import React from "react";
import "./RightComponent.css";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";

function RightComponent() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "30ch",
      },
    },
  }));
  return (
    <div className="rc-outer-component">
      <div className="rc-main-content">
        <div className="rc-search-field">
          <Search className="rc-search-input">
            <SearchIconWrapper className="rc-search-icon">
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        <div className="rc-subscribe">
          <div className="rc-subs-title">
            <b>Subscribe to Premium</b>
          </div>

          <div className="rc-subs-story">
            <b>
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </b>
          </div>
          <div className="rc-subscribe-button">
            <button className="rc-button">
              <b>Subscribe</b>
            </button>
          </div>
        </div>
        <div className="rc-whats-happening">
          <div className="rc-happening-title">
            <p>
              <b>What's happening</b>
            </p>
          </div>
          <div className="rc-trending">
            <div className="rc-trend-title">
              Trending in India
              <IconButton className="rc-icon-button">
                <MoreIcon className="rc-moreIcon" />
              </IconButton>
            </div>
            <div className="rc-trend-hashtag"><b>#earthquake</b></div>
            <div className="rc-trend-postcount">13K posts</div>
          </div>

          <div className="rc-trending">
            <div className="rc-trend-title">
              Sports -Trending 
              <IconButton className="rc-icon-button">
                <MoreIcon className="rc-moreIcon" />
              </IconButton>
            </div>
            <div className="rc-trend-hashtag"><b>#ICCCricketWorldCup</b></div>
            <div className="rc-trend-postcount">12.5K posts</div>
          </div>

          <div className="rc-trending">
            <div className="rc-trend-title">
              Business & finance -Trending 
              <IconButton className="rc-icon-button">
                <MoreIcon className="rc-moreIcon" />
              </IconButton>
            </div>
            <div className="rc-trend-hashtag"><b>#AmazonGreatIndianFestival</b></div>
            <div className="rc-trend-postcount">8047 posts</div>
          </div>

          <div className="rc-trending">
            <div className="rc-trend-title">
              Entertainment -Trending 
              <IconButton className="rc-icon-button">
                <MoreIcon className="rc-moreIcon" />
              </IconButton>
            </div>
            <div className="rc-trend-hashtag"><b>#ManOfMassesNTR</b></div>
            <div className="rc-trend-postcount">6K posts</div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default RightComponent;
