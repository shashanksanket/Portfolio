import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name:"userData",
  initialState:{
    name:""
  },
  reducers:{
    setName: (state,action) => {
      state.name = action.payload
    }
  },
})

export const { setName } = userDataSlice.actions

export default userDataSlice.reducer