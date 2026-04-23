import {createSlice} from "@reduxjs/toolkit";
import food_items from "../food";
const dataSlice = createSlice({
    name : "data",
    initialState:{
        list : food_items,
    },
    reducers:{
        setData:(state,action)=>{
            state.list = action.payload
        }
    }
});
export const {setData} = dataSlice.actions;
export default dataSlice.reducer;