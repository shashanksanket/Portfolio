import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolio-data/slice"
import userDataReducer from "./user-data/slice"
export default configureStore({
  reducer:{
    portfolio: portfolioReducer,
    userdata: userDataReducer
  }
})