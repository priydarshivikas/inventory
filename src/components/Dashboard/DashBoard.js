import React, { useContext } from "react";
import "./DashBoard.css";
import SalesIcon from "../img/cost.png";
import ProfitIcon from "../img/profit.png";
import RevenueIcon from "../img/revenue.png";
import SalesItemIcon from "../img/sales.png";
import ReturnIcon from "../img/return.png";
import ShoppingIcon from "../img/shopping.png";
import ReceivedIcon from "../img/received.png";
import SimpleLineChart from "./Chart";

const Dashboard = () => {
  return (
    <div>
      <div className="overview">
        <div className="sales-overview">
          <div className="heading">
            <h3>Sales Overview</h3>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
          <div className="box-main">
            <div className="box">
              <div className="icon">
                <img src={SalesIcon} alt="salesicon" className="iconlogo" />
              </div>
              <div className="inner-content">
                <h3>Total Sales</h3>
                <span>736</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img src={RevenueIcon} alt="RevenueIcon" className="iconlogo" />
              </div>
              <div className="inner-content">
                <h3>Revenue</h3>
                <span>17584</span>
              </div>
            </div>
          </div>
          <div className="box-main">
            <div className="box">
              <div className="icon">
                <img src={SalesIcon} alt="SalesIcon" className="iconlogo" />
              </div>
              <div className="inner-content">
                <h3>Cost</h3>
                <span>12487</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img src={ProfitIcon} alt="ProfitIcon" className="iconlogo" />
              </div>
              <div className="inner-content">
                <h3>Profit</h3>
                <span>5097</span>
              </div>
            </div>
          </div>
        </div>
        <div className="purchase-overview">
          <div className="heading">
            <h3>Purchase Overview</h3>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
          <div className="box-main">
            <div className="box">
              <div className="icon">
                <img src={SalesItemIcon} alt="salesicon" className="iconlogo" />
              </div>
              <div className="inner-content">
                <h3>No of Sales</h3>
                <span>45</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img
                  src={ShoppingIcon}
                  alt="RevenueIcon"
                  className="iconlogo"
                />
              </div>
              <div className="inner-content">
                <h3>Cancel Order</h3>
                <span>04</span>
              </div>
            </div>
          </div>
          <div className="box-main">
            <div className="box">
              <div className="icon">
                <img src={SalesIcon} alt="SalesIcon" className="iconlogo" />
              </div>
              <div className="inner-content">
                <h3>Cost</h3>
                <span>786</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img src={ReturnIcon} alt="ProfitIcon" className="iconlogo" />
              </div>
              <div className="inner-content">
                <h3>Returns</h3>
                <span>07</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="inventory-summary">
          <div className="heading">
            <h3>Inventory Summary</h3>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
          <div className="box-main">
            <div className="box">
              <div className="icon">
                <img src={SalesIcon} alt="salesicon" className="iconlogo" />
              </div>
              <div className="inner-content">
                <h3>Quantity in Hand</h3>
                <span>214</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img
                  src={ReceivedIcon}
                  alt="receivedIcon"
                  className="iconlogo"
                />
              </div>
              <div className="inner-content">
                <h3>Will be Received</h3>
                <span>44</span>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="heading">
            <h3>Product Details</h3>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
          <div className="box-main">
            <div className="box">
              <div className="inner-content">
                <h3>Low Stock Items</h3>
                <span>02</span>
              </div>
            </div>
            <div className="box">
              <div className="inner-content">
                <h3>Item Group</h3>
                <span>14</span>
              </div>
            </div>
            <div className="box">
              <div className="inner-content">
                <h3>No of Items</h3>
                <span>104</span>
              </div>
            </div>
          </div>
        </div>
        <div className="number-of-user">
          <div className="heading">
            <h3>No of Users</h3>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
          <div className="box-main">
            <div className="box">
              <div className="icon">
                <img src={SalesIcon} alt="salesicon" className="iconlogo" />
              </div>
              <div className="inner-content">
                <h3>Quantity in Hand</h3>
                <span>214</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <img
                  src={ReceivedIcon}
                  alt="receivedIcon"
                  className="iconlogo"
                />
              </div>
              <div className="inner-content">
                <h3>Will be Received</h3>
                <span>44</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="satatics">
        <div className="Sales-and-purchase-statistics">
          <h3>Sales-And-Purchase-Statistics</h3>
          <SimpleLineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
