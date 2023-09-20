import "./sidebar.css";
import DashboardIcon from "../Image/dashboard.png";
import InventoryIcon from "../Image/inventory.png";
import InvoiceIcon from "../Image/invoice.png";
import CustomerIcon from "../Image/customer.png";
import SalesIcon from "../Image/discount.png";
import BillIcon from "../Image/bill.png";
import PurchaseIcon from "../Image/cart.png";
import SupplierReturnIcon from "../Image/agreement.png";
import Supplier from "../Image/supplier.png";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="company-logo">
        <Link to="/">
          <img src={InventoryIcon} alt="inventoryIcon" className="companylogo" />
           <h1>INVENTORY</h1>
        </Link>
      </div>
      <div className="sidebar">
        <div>
          <Link to="/">
            <img src={DashboardIcon} alt="dashboardIcon" className="iconImg" />
            <h3>Dashboard</h3>
          </Link>
        </div>
        <div>
          <Link to="/Inventory">
            <img src={InventoryIcon} alt="inventoryIcon" className="iconImg" />
            <h3>Inventory</h3>
          </Link>
        </div>
        <div>
          <Link to="/Purchase">
            <img src={PurchaseIcon} alt="purchaseIcon" className="iconImg" />
            <h3>Purchase</h3>
          </Link>
        </div>
        <div>
          <Link to="/Return">
          <img src={SupplierReturnIcon} alt="supplierIcon" className="iconImg" />
            <h3>Return</h3>
          </Link>
        </div>
        <div>
          <Link to="/Invoice">
            <img src={InvoiceIcon} alt="invoiceIcon" className="iconImg" />
            <h3>Invoice</h3>
          </Link>
        </div>
        <div>
          <Link to="/Sales">
            <img src={SalesIcon} alt="salesIcon" className="iconImg" />
            <h3>Sales</h3>
          </Link>
        </div>
        <div>
          <Link to="/Bill">
            <img src={BillIcon} alt="billIcon" className="iconImg" />
            <h3>Bill</h3>
          </Link>
        </div>
        <div>
          <Link to="/Customer">
            <img src={CustomerIcon} alt="customerIcon" className="iconImg" />
            <h3>customer</h3>
          </Link>
        </div>
        <div>
          <Link to="/Supplier">
            <img src={Supplier} alt="supplierIcon" className="iconImg" />
            <h3>Supplier</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
