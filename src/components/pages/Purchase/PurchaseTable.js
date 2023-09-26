import * as React from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./PurchaseTable.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BasicTable() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users/");
    setUsers(result.data);
  };
  const deleteUser = async (id)=>{
      await axios.delete(`http://localhost:3001/users/${id}`);
      loadUser();
  }
  return (
    <TableContainer
      component={Paper}
      style={{ width: "83vw" }}
      className="purchase-table-container"
    >
      <div className="table-button">
        <div align="center">
          <p>Total Purchased Items with Customer Details</p>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => navigate("/customer-form")}
          >
            Add Details
          </Button>
        </div>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Modify</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>
                <IconButton onClick={()=> navigate(`/customer-form/edit/${user.id}`)}>
                < EditIcon />
                </IconButton>
                <IconButton onClick={()=> deleteUser(user.id)}>
                < DeleteOutlineIcon/>   
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
