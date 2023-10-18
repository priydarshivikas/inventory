import PropTypes from "prop-types";
import SideBar from "../Pages/SideNav";
import Header from "../Pages/Header";
import "./wrapper.css";
function Wrapper({ children }) {
  return (
    <>
      <SideBar />
      <Header />
      <div className="content-wrapper">{children}</div>
    </>
  );
}
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
