import "./dashboard.css";
import EarningIcon from "../img/money.png";
import InvoiceICon from "../img/invoice.png";
import BalanceIcon from "../img/balance.png";
import TotalSales from "../img/totalSales.png";
import BasicTable from "./Chart/chart";
import DoughNutChart from "./Doughnut/Doughnut";
import Example from "./BarChart/BarChart";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="upper-dashboard-container">
        <div className="content-box">
          <div className="box">
            <div className="inner-box innner-box-earning">
              <img
                src={EarningIcon}
                alt="InvoiceIcon"
                className="dashBoardIcon"
              />
            </div>
          </div>
          <div className="box1">
            <div> Earning</div>
            <div className="dollarFont">$198k</div>
            <div className="increasedata">
              <i className="fa-solid fa-arrow-up fa-sm icreaseIcon"></i>37.8%
              this month
            </div>
          </div>
        </div>
        <div className="content-box">
          <div className="box">
            <div className="inner-box innner-box-order">
              <img
                src={InvoiceICon}
                alt="InvoiceIcon"
                className="dashBoardIcon"
              />
            </div>
          </div>
          <div className="box1">
            <div> Order</div>
            <div className="dollarFont">$2.4k</div>
            <div>2% this month</div>
          </div>
        </div>
        <div className="content-box">
          <div className="box">
            <div className="inner-box innner-box-balance">
              <img
                src={BalanceIcon}
                alt="balanceIcon"
                className="dashBoardIcon"
              />
            </div>
          </div>
          <div className="box1">
            <div> Balance</div>
            <div className="dollarFont">$2.4k</div>
            <div>2% this month</div>
          </div>
        </div>
        <div className="content-box">
          <div className="box">
            <div className="inner-box innner-box-totalsales">
              <img
                src={TotalSales}
                alt="TotalSalesIcon"
                className="dashBoardIcon"
              />
            </div>
          </div>
          <div className="box1">
            <div> TotalSales</div>
            <div className="dollarFont">$89k</div>
            <div>11% this month</div>
          </div>
        </div>
      </div>
      <div className="overview-customer-container">
        <div className="overview">
          <div className="overview-header">
            <div>
              <div className="overview-heading">Overview</div>
              <div>Monthly Earning</div>
            </div>
            <div>Quaterly</div>
          </div>
          <Example />
        </div>
        <div className="customer">
          <div className="overview-header-left">
            <div className="overview-heading">Customers</div>
            <div>Customers buy that product</div>
              <DoughNutChart />
          </div>
        </div>
      </div>
      <div className="table-container">
        <BasicTable />
      </div>
    </div>
  );
}

export default Dashboard;
