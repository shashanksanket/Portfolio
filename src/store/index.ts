import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolio-data/slice"
export default configureStore({
  reducer:{
    portfolio: portfolioReducer
  }
})