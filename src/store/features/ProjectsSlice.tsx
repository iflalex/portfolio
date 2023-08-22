//Init
import { createSlice} from "@reduxjs/toolkit";
//Interface
import {PropsModel} from "@interfaces/Props";
import { ProjectsModel } from "@interfaces/Projects";


const initialState: PropsModel<ProjectsModel> = {
  projects : {
    items : [
      {name:'Project_1', background:'https://i.goopics.net/darrdu.jpg', images:[], category:'mobile'},

    ],
    sizeContainer:300
  }
}

const ProjectsSlice = createSlice({
  name: "ProjectsSlice",
  initialState,
  reducers: {},
});

export default ProjectsSlice.reducer;