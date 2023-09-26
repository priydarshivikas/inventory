import { useState, useEffect } from "react";
import "./AddUserForm.css";
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
    Address: "",
  });

  const { firstName, lastName, email, phone, address } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      loadUser();
    }
  });// Make sure to reload the user data when the id parameter changes

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/users/${id}`, user);
      navigate("/purchaseTable");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <h1>Edit Customer details</h1>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={onInputChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={onInputChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={onInputChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">E-Mail Address</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              id="Address"
              name="Address"
              value={address}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <Button
            type="button"
            variant="contained"
            onClick={() => navigate("/PurchaseTable")}
          >
            Go Back
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditUser;
