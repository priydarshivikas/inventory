import React from "react";
import "./header.css";
import ProfileIcon from "../Image/profile.png";
import BellIcon from "../Image/bell.png";
import SettingIcon from "../Image/setting.png";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import LogoutButton from "./Setting/LogoutButton";
import Wrapper from "../Wrapper/Wrapper";

const Header = () => {
 
  return (
    <div className="header-container">
      <div class="search-container">
        <div class="search-icon">
          <i class="fa fa-search"></i>
          <input
            type="text"
            class="search-input"
            placeholder="Search Anything"
          />
        </div>
      </div>
      {/* code to insert (profile)image and dropdown */}
      <div className="flex-profile">
        <div>
          <Link to="/notifications">
            <img src={BellIcon} alt="bellIcon" className="profileIcon" />
          </Link>
        </div>
        <div className="dropDown-profile">
          <Link to="/profile">
            <img src={ProfileIcon} alt="profileIcon" className="profileIcon" />
          </Link>
        </div>
        <div>
          <Link to="/setting">
            <img src={SettingIcon} alt="settingIcon" className="profileIcon" />
          </Link>
        </div>
        <div>
          <LogoutButton/>
          <Routes>
            <Route
              path="/login"
              element={
                <Wrapper>
                  <LoginPage />
                </Wrapper>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Header;
