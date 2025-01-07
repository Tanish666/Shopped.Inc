import { Action } from "@radix-ui/react-alert-dialog";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState:string = "";
export const SearchSlice = createSlice({
    name:"Search",
    initialState,
    reducers:{
        searchThis:(state,action)=>{return action.payload;}
    }
})

export const {searchThis} = SearchSlice.actions;
export const SearchReducer = SearchSlice.reducer;