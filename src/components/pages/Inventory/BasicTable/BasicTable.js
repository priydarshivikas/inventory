import React, { useEffect, useState, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

const BasicTable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phone: "",
    email: "",
    username: "",
  });
  const [formDataList, setFormDataList] = useState([]);

  function formhandleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  useEffect(() => {
    fetch("https://dummyjson.com/users/")
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data?.users?.map((user) => ({
          firstName: user.firstName,
          phone: user.phone,
          gender: user.gender,
          email: user.email,
          username: user.username,
        }));
        setUsers(mappedData);
        setFilteredUsers(mappedData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        size: 150,
      },
      {
        accessorKey: "phone",
        header: "Phone",
        size: 200,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "username",
        header: "UserName",
        size: 150,
      },
    ],
    []
  );

  useEffect(() => {
    if (selectedGender) {
      const filteredData = users.filter(
        (user) => user.gender === selectedGender
      );
      setFilteredUsers(filteredData);
    } else {
      setFilteredUsers(users);
    }
  }, [selectedGender, users]);

  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const formSubmission = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormDataList([...formDataList, formData]);
    setFormData({name: "",
    gender: "",
    phone: "",
    email: "",
    username: "",});
    handleCloseForm();
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ width: '150px' }}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedGender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        <Button sx={{ width: '120px', height:'50px',marginLeft:'5px'}} variant="contained" onClick={handleOpenForm}>
          +Add Data
        </Button>
      </Box>
      <MaterialReactTable columns={columns} data={filteredUsers}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ width: '150px' }}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedGender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        <Button sx={{ width: '120px', height:'50px'}} variant="contained" onClick={handleOpenForm}>
          +Add Data
        </Button>
      </Box>
        </MaterialReactTable>
      <Dialog open={isFormOpen} onClose={handleCloseForm}>
        <form onSubmit={formSubmission}>
          <DialogTitle>Add User</DialogTitle>
          <DialogContent>
            <TextField
              name="name"
              value={formData.name}
              onChange={formhandleChange}
              label="Name"
              fullWidth
            />
            <TextField
              name="gender"
              value={formData.gender}
              onChange={formhandleChange}
              label="Gender"
              fullWidth
            />
            <TextField
              name="phone"
              value={formData.phone}
              onChange={formhandleChange}
              label="Phone"
              fullWidth
            />
            <TextField
              name="email"
              value={formData.email}
              onChange={formhandleChange}
              label="Email"
              fullWidth
            />
            <TextField
              name="username"
              value={formData.username}
              onChange={formhandleChange}
              label="User Name"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add Data
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default BasicTable;
