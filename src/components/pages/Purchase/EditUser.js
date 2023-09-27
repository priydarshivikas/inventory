import React, { useState, useEffect } from "react";
import "./EditUser.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
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

  const isEditing = !!id; // Determine if we're in edit mode based on the presence of 'id'

  useEffect(() => {
    if (isEditing) {
      loadUser();
    } else {
      setIsLoading(false);
    }
  }, [id, isEditing]);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(result.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading user:", error);
      setIsLoading(false);
    }
  };

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

  const onDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:3001/users/${id}`);
        navigate("/purchaseTable");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form className="form" onSubmit={onSubmit}>
          <h1>{isEditing ? "Edit" : "Add"} Customer Details</h1>
          <div className="control-group">
            <div className="form-control">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">E-Mail Address</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit">{isEditing ? "Update" : "Add"}</button>
            {isEditing && (
              <Button
                type="button"
                variant="contained"
                onClick={onDelete}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </Button>
            )}
            <Button
              type="button"
              variant="contained"
              onClick={() => navigate("/PurchaseTable")}
              style={{ marginLeft: "10px" }}
            >
              Go Back
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default EditUser;
