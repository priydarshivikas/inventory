import React, { useState, useEffect, useCallback } from "react";
import "./EditUser.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const { firstName, lastName, email, phone, address } = user;

  const [isLoading, setIsLoading] = useState(true);

  const isEditing = !!id;

  const loadUser = useCallback(async () => {
    try {
      const result = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(result.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading user:", error);
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (isEditing) {
      loadUser();
    } else {
      setIsLoading(false);
    }
  }, [id, isEditing, loadUser]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:3001/users/${id}`, user);
      } else {
        await axios.post("http://localhost:3001/users/", user);
      }
      navigate("/purchaseTable");
    } catch (error) {
      console.error(`Error ${isEditing ? "updating" : "adding"} user:`, error);
    }
  };
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form className="form-wrapper" onSubmit={onSubmit}>
          <div className="form-group">
            <h1>{isEditing ? "Edit" : "Add"} Customer Details</h1>
            <div className="form-input">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your firstname"
                value={firstName}
                required
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </div>
            <div className="form-input">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Enter your lastname"
                value={lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
            <div className="form-input">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">E-Mail Address</label>
              <input
                type="text"
                required
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="form-input">
              <label htmlFor="address">Address</label>
              <textarea
                rows={5}
                cols={58}
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                required
                resize="none"
                value={address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
            </div>
            <div className="form-button">
              <button type="submit">{isEditing ? "Update" : "Add"}</button>
              <button
                type="button"
                variant="contained"
                name="goback"
                onClick={() => navigate("/PurchaseTable")}
                style={{ marginLeft: "10px" }}
              >
                Go Back
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default EditUser;
