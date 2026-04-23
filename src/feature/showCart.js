import {createSlice} from "@reduxjs/toolkit";
import { DefaultContext } from "react-icons/lib";
const showCartSlice = createSlice({
    name :"cart",
    initialState:{
        cart : false,
    },
    reducers:{
        showCart : (state,action)=>{
            state.cart = action.payload;
        }
    }
});
export const {showCart} = showCartSlice.actions;
export default showCartSlice.reducer;