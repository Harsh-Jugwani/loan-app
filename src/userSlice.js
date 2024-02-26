import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
        name:'',
        email:'',
        amount:'',
        term:'', 
        update:'Pending', 
  },
  reducers: {
    addName:(state,action)=>{
        state.name = action.payload;
    },
    addEmail:(state,action)=>{
        state.email = action.payload
    },
    addAmount:(state,action)=>{
        state.amount = action.payload
    },
    addTerm:(state,action)=>{
        state.term = action.payload
    },
    setUpdate:(state,action)=>{
        state.update = action.payload
    },
  
  },
});

export const { addName, addEmail,addAmount,addTerm,setUpdate } = userSlice.actions;

export default userSlice.reducer;