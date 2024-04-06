import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState:{
    aboutSection: {},
    summary: {},
    projects: [],
    skills: [],
  },
  reducers:{
    setAboutSectionData: (state,action) => {
      state.aboutSection = action.payload
    },
    setSummarySectionData: (state,action) => {
      state.summary = action.payload
    },
    setProjectSectionData: (state,action) => {
      state.projects = action.payload
    },
    setSkillSectionData: (state,action) => {
      state.skills = action.payload
    }
  }
})

export const { setAboutSectionData, setProjectSectionData, setSkillSectionData, setSummarySectionData} = portfolioSlice.actions;

export default portfolioSlice.reducer;