import {createSlice} from "@reduxjs/toolkit";
const favoriteCartSlice = createSlice({
    name : "favorite",
    initialState:{
        favorites : [],
    },
    reducers:{
        addToFavorite : (state,action)=>{
            const existItem = state.favorites.find((item)=> item.id === action.payload.id);
            if(existItem){
                existItem.qty = existItem.qty+1;
            }else{
                state.favorites.push({...action.payload,qty:1})
            }
        },
        removeFromFavorite : (state,action)=>{
            state.favorites = state.favorites.filter((item)=> item.id!==action.payload);
        },
        increaseQty : (state,action)=>{
            const item = state.favorites.find((item)=>item.id===action.payload);
            if(item){
                item.qty = item.qty+1
            }
        },
        decreaseQty : (state,action)=>{
            const item = state.favorites.find((item)=>item.id===action.payload);
            if(item && item.qty>1){
                item.qty = item.qty-1
            }else{
                state.favorites = state.favorites.filter((item)=> item.id!==action.payload);
            }
        },
    }
});
export const {addToFavorite,removeFromFavorite,increaseQty,decreaseQty} = favoriteCartSlice.actions;
export default favoriteCartSlice.reducer;