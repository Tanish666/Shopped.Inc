
import { createSlice } from "@reduxjs/toolkit";

interface product{
    price:number,
    productName:string,
}
const initialState:product = {
   price:0,
   productName:'not set yet',
}
export const PaymentSlice = createSlice({
    name:'PaymentSlice',
    initialState,
    reducers:{
    replace:(state,action) => {return action.payload}
    }
})
export const  {replace} = PaymentSlice.actions;
export const PaymentReducer = PaymentSlice.reducer;