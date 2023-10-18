import "./sidenav.css";
import DashboardIcon from "../img/dashboard.png";
import ProductIcon from"../img/product.png";
import CustomerIcon from "../img/customer.png";
import Arrow from '../img/row.png';
import SellIcon from "../img/sell.png";
import HelpIcon from "../img/help.png";
import PromoteIcon from "../img/dashboard.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="sidebar">
        <div className="SideBar-heading ">
        <img src={DashboardIcon} alt="dashboardIcon" className="heading-iconImg" />
          <h1>DashBoard</h1>
        </div>
        <div className="sidebar-content">
          <NavLink to="/" >
            <img src={SellIcon} alt="SellIcon" className="iconImg" />
            <h3>Dashboard</h3>
            <img src={Arrow} alt="arrowicon" className="arrowIcon" />
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/">
            <img src={ProductIcon} alt="ProductIcon" className="iconImg" />
            <h3>Product</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/">
            <img src={CustomerIcon} alt="customerIcon" className="iconImg" />
            <h3>Customer</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/">
          <img src={PromoteIcon} alt="promoteIcon" className="iconImg" />
            <h3>Promote</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/">
            <img src={HelpIcon} alt="helpIcon" className="iconImg" />
            <h3>Help</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/">
            <img src={SellIcon} alt="sallIcon" className="iconImg" />
            <h3>Sales</h3>
          </NavLink>
        </div>
      </div>
    </>
  );
}