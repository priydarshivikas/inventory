// import React from "react";
// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { updateUser } from "../../Redux/Reducers/usersSlice";
// import { useDispatch, useSelector } from "react-redux";

// export default function AddUser() {
//   const navigate = useNavigate();
//   const {id} =useParams();
//   const users = useSelector((state) => state.users);
//   const existingUser = users.filter(f => f.id === id);
//   const [fullName , email ]=existingUser(0);
//   const [ufullName , setfullName]=useState(fullName);
//   const [uemail , setemail]=useState(email); 

//   const dispatch = useDispatch();
//   const onSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateUser({
//       id:id,
//       ufullName:fullName,
//       uemail:email
//     }))
//     navigate("/return");
//   };
//   return (
//     <form className="form-wrapper" onSubmit={onSubmit}>
//       <div className="form-group">
//         <h1>Customer Return Using Redux</h1>
//         <div className="form-input">
//           <label htmlFor="fullName">Full Name</label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             placeholder="Enter your lastname"
//             value={ufullName}
//             onChange={(e) => setfullName({ fullName: e.target.value })}
//           />
//         </div>
//         <div className="form-input"> 
//           <label htmlFor="email">E-Mail Address</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={uemail}
//             onChange={(e) => setemail({ email: e.target.value })}
//           />
//         </div>

//         <div className="form-button">
//           <button type="submit">Add</button>
//           <button
//             type="button"
//             variant="contained"
//             name="goback"
//             onClick={() => navigate("/return")}
//             style={{ marginLeft: "10px" }}
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }
