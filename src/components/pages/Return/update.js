import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../Redux/Reducers/usersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Update() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    email: "",
  });
  const { fullName, email } = user;
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        fullName,
        email,
      })
    );
    console.log(user);
    setUser({
      fullName: "",
      email: "",
    });
    navigate("/return");
  };
  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      <div className="form-group">
        <h1>Customer Return Using Redux</h1>
        <div className="form-input">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your lastname"
            value={fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
        </div>
        <div className="form-input"> 
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="form-button">
          <button type="submit">Add</button>
          <button
            type="button"
            variant="contained"
            name="goback"
            onClick={() => navigate("/return")}
            style={{ marginLeft: "10px" }}
          >
            Go Back
          </button>
        </div>
      </div>
    </form>
  );
}
