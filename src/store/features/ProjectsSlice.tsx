//Init
import { PayloadAction, createSlice} from "@reduxjs/toolkit";
//Interface
import {PropsModel} from "@interfaces/Props";
import { ProjectsModel } from "@interfaces/Projects";


const initialState: PropsModel<ProjectsModel> = {
  projects : {
    items : [
      
      
    ],
    active: false,
    pictureActive: ''
  }
}

const ProjectsSlice = createSlice({
  name: "ProjectsSlice",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<boolean>) => {
      state.projects.active = action.payload
    },
    setPictureActive: (state, action: PayloadAction<string>) => {
      state.projects.pictureActive = action.payload
    }
  },
});


export const { setActive, setPictureActive } = ProjectsSlice.actions
export default ProjectsSlice.reducer;