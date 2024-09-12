import { configureStore } from "@reduxjs/toolkit";

import  useReducer  from "./slices/UseSlice"

const store=configureStore({
  reducer:{
    userInfo:useReducer
  },
});
export default store