// import { useNavigate } from "react-router-dom";
import "./wrapper.css";
import SideBar from "../SideBar/Index";
import Header from "../Header/Header";


function Wrapper({children}) {
  // const navigate = useNavigate();
  //    navigate("/login");
  return (
    <>
      <SideBar />
      <Header/>
      <div className="content-wrapper">
        {children}
      </div>
    </>
  );
}export default Wrapper;
