import { createSlice } from "@reduxjs/toolkit";
 
const initialState:boolean = false;
export const PlanSlice = createSlice({
    name:"plan",
    initialState,
    reducers:{
        toggle: (state)=>!state,
        setTrue: state => state=true,
    }
})

export const {toggle,setTrue} = PlanSlice.actions;
export const PlanReducer = PlanSlice.reducer