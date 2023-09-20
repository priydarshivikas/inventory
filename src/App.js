import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/LoginPage/LoginPage";
import SignUp from "./components/LoginPage/SignUp/SignUp";
import Dashboard from "./components/Dashboard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyInventory from "./components/pages/Inventory";
import MyPurchase from "./components/pages/Purchase";
import MyInvoice from "./components/pages/Invoice";
import MySales from "./components/pages/Sales";
import MyBill from "./components/pages/Bill/MyBill";
import MyCustomer from "./components/pages/Customer";
import MyReturn from "./components/pages/Return";
import Setting from "./components/Header/Setting/Setting";
import Notifications from "./components/Header/Notifications/Notifications";
import Profile from "./components/Header/Profile/Profile";
import Wrapper from "./components/Wrapper/Wrapper";
import AuthContext from "./components/Contexts/AuthContexts";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <AuthContext.Provider value={{
      userInfo,
      setUserInfo: (user)=>{
        setUserInfo(user)
      }
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                <Wrapper>
                  <Dashboard />
                </Wrapper>
              }
            />
            <Route
              path="/inventory"
              element={
                <Wrapper>
                  <MyInventory />
                </Wrapper>
              }
            />
            <Route
              path="/Invoice"
              element={
                <Wrapper>
                  <MyInvoice />
                </Wrapper>
              }
            />
            <Route
              path="/Customer"
              element={
                <Wrapper>
                  <MyCustomer />
                </Wrapper>
              }
            />
            <Route
              path="/bill"
              element={
                <Wrapper>
                  <MyBill />
                </Wrapper>
              }
            />
            <Route path="/Supplier" element={<Wrapper></Wrapper>} />
            <Route
              path="/purchase"
              element={
                <Wrapper>
                  <MyPurchase />
                </Wrapper>
              }
            />
            <Route
              path="/sales"
              element={
                <Wrapper>
                  <MySales />
                </Wrapper>
              }
            />
            <Route
              path="/return"
              element={
                <Wrapper>
                  <MyReturn />
                </Wrapper>
              }
            />
            <Route
              path="/setting"
              element={
                <Wrapper>
                  <Setting />
                </Wrapper>
              }
            />
            <Route
              path="/notifications"
              element={
                <Wrapper>
                  <Notifications />
                </Wrapper>
              }
            />
            <Route
              path="/profile"
              element={
                <Wrapper>
                  <Profile />
                </Wrapper>
              }
            />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
