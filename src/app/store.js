import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "../feature/searchSlice";
import dataReducer from "../feature/dataSlice";
import showCartReducer from "../feature/showCart";
import favoriteReducer from "../feature/favoriteSlice";
export const store = configureStore({
    reducer:{
       search:searchReducer,
       data:dataReducer,
       showCart : showCartReducer,
       favorite : favoriteReducer,
    }
})