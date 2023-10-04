import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";
const userSilce = createSlice ({
    name :"users",
    initialState: userList,
    reducers:{
        addUser :(state , action)=>{
        state.push(action.payload)
        console.log(action)
      },
      updateUser :(state , action)=>{

      },
      deleteAlluser(state ,action){},
    }
});
export const {addUser , updateUser} =userSilce.actions;
console.log(userSilce.actions);
export default userSilce.reducer;