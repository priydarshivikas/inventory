import React from "react";
import "./Profile.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link ,useNavigate} from "react-router-dom";
import AuthContext from "../../Contexts/AuthContexts";
import { useContext } from "react";

function Profile() {
  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    localStorage.removeItem('token');
    console.log(userInfo);
    navigate("/");
  };
  return (
      <div className="profile-container">
        <label htmlFor="profile2" className="profile-dropdown">
          <input type="checkbox" id="profile2" />
          <img
            src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png"
            alt=""
          />
          <span>Hachib</span>
          <label htmlFor="profile2">
            <ArrowDropDownIcon/>
          </label>
          <ul>
            <li>
              <Link to="/notification">
                Notification
                <MailIcon className="userIcon"/>
              </Link>
            </li>
            <li>
              <Link to="Account">
                Account
                <AccountCircleIcon className="userIcon"/>
              </Link>
            </li>
            <li>
              <Link to="Setting">
                Settings
                <SettingsIcon className="userIcon"/>
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={navigateToLogin}>
                Logout
                <LogoutIcon className="userIcon"/>
              </Link>
            </li>
          </ul>
        </label>
      </div>
  );
}

export default Profile;
