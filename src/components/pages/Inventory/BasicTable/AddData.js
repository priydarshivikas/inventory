// import { useState } from 'react';
// import React from 'react'
// import {
//     Button,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     TextField,
//     DialogActions,
//   } from "@mui/material";
// function AddData() {
//     const [isFormOpen, setIsFormOpen] = useState(false);

//     const [formData, setFormData] = useState({
//         name: "",
//         gender: "",
//         phone: "",
//         email: "",
//         username: "",
//       });
//       const [formDataList, setFormDataList] = useState([]);

//       function formhandleChange(event) {
//         const { name, value } = event.target;
//         setFormData({
//           ...formData,
//           [name]: value,
//         });
//       }
//       const handleOpenForm = () => {
//         setIsFormOpen(true);
//       };
//     const handleCloseForm = () => {
//         setIsFormOpen(false);
//       };

//       const formSubmission = (event) => {
//         event.preventDefault();
//         console.log("Form submitted:", formData);
//         setFormDataList([...formDataList, formData]);
//         setFormData({name: "",
//         gender: "",
//         phone: "",
//         email: "",
//         username: "",});
//         handleCloseForm();
//       };
//   return (
//     <> 
//       <Dialog open={isFormOpen} onClose={handleCloseForm}>
//         <form onSubmit={formSubmission}>
//           <DialogTitle>Add User</DialogTitle>
//           <DialogContent>
//             <TextField
//               name="name"
//               value={formData.name}
//               onChange={formhandleChange}
//               label="Name"
//               fullWidth
//             />
//             <TextField
//               name="gender"
//               value={formData.gender}
//               onChange={formhandleChange}
//               label="Gender"
//               fullWidth
//             />
//             <TextField
//               name="phone"
//               value={formData.phone}
//               onChange={formhandleChange}
//               label="Phone"
//               fullWidth
//             />
//             <TextField
//               name="email"
//               value={formData.email}
//               onChange={formhandleChange}
//               label="Email"
//               fullWidth
//             />
//             <TextField
//               name="username"
//               value={formData.username}
//               onChange={formhandleChange}
//               label="User Name"
//               fullWidth
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseForm} color="primary">
//               Cancel
//             </Button>
//             <Button type="submit" color="primary">
//               Add Data
//             </Button>
//           </DialogActions>
//         </form>
//       </Dialog>
//     </>
//   )
// }

// export default AddData