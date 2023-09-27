import { useState } from "react";
import "./AddUserForm.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
// const BasicForm = (props) => {
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredNameValid , setEnteredNameIsValid]=useState(false);
//   const [enteredNametouched , setEnteredNameTouche]=useState(false);

//   useEffect(()=>{
//     if(enteredNameValid){
//       console.log('Name Input is valid!')
//     }
//   },[enteredNameValid])

//   const namehandler = (event) => {
//     setEnteredName(event.target.value);
//     // console.log(setEnteredName);
//   };
//   const nameInputBlurHandler =(event)=>{
//       setEnteredNameTouche(true);
//       if (enteredName.trim() ==="") {
//         setEnteredNameIsValid(false);
//         return;
//       }
//   }
//   const formhandler = (event) => {
//     event.preventDefault();
//     setEnteredNameTouche(true);
//     if (enteredName.trim() ==="") {
//       setEnteredNameIsValid(false);
//       return;
//     }
//     setEnteredNameIsValid(true);
//     setEnteredName('');

//   };
//  const nameInputIsValid = !setEnteredNameIsValid && enteredNametouched;

//   const nameInputClasses = enteredNameValid ?'form-control invalid' : 'form-control';
//   return (
//     <form className="form" onSubmit={formhandler}>
//       <h1>Add Customer details</h1>
//       <div className="control-group">
//         <div className={nameInputClasses}>
//           <label htmlFor="name">First Name</label>
//           <input type="text" id="name" onChange={namehandler}  onBlur={nameInputBlurHandler}/>
//          {nameInputIsValid && <p className="error-text">Name must not be empty.</p>}
//         </div>
//         <div className={nameInputClasses}>
//           <label htmlFor="name">Last Name</label>
//           <input type="text" id="name" />
//         </div>
//         <div className={nameInputClasses}>
//         <label htmlFor="name">Phone Number</label>
//         <input type="text" id="name" />
//       </div>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">E-Mail Address</label>
//         <input type="text" id="name" />
//       </div>
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

const Addform = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [data, setData] = useState([]);
  const { firstName, lastName, email, phone, address } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && phone && email && address) {
      axios.post("http://localhost:3001/users/", user);
      navigate("/purchaseTable");
      setData([...data, user]);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      });
    }
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <h1>Add Customer details</h1>
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
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
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
        {/* <BasicTable user={user}/> */}
      </div>
    </form>
  );
};

export default Addform;
