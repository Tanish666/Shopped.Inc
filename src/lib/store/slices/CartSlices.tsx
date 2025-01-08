
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Underline } from "lucide-react";

interface Item {
    id: number;
    name: string;
    price:number;
    image:string;
    quantity:number;
  }
  
const initialState: Item[] = [];


const CartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
    Add: (state, action: PayloadAction<Item>) => {
        state.push(action.payload); // Add the object to the array
      },
    Remove: (state,action: PayloadAction<Number>) =>{
      return state.filter(item => item.id !== action.payload);
      },  

      updateQuan: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      },
    }

})

export  const {Add,Remove,updateQuan} = CartSlice.actions;
export const CartReducer = CartSlice.reducer;
