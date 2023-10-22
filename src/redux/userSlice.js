import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
name:'user', 
initialState:{
    userItems:[],
},
reducers:{
    userInfo:(state, action) => {
        state.userItems.push(action.payload);
    }, 
 
}
})

export const {userInfo} = userSlice.actions;
export default userSlice.reducer;