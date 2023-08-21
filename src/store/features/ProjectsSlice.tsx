//Init
import { createSlice} from "@reduxjs/toolkit";
//Interface
import {PropsModel} from "@interfaces/Props";
import { ProjectsModel } from "@interfaces/Projects";
//Assets 


const initialState: PropsModel<ProjectsModel> = {
  caroussel : {
    itemsPicture : [
      'https://www.pngplay.com/wp-content/uploads/3/Pomme-Transparentes-Gratuit-PNG.png',
      'https://www.pngplay.com/wp-content/uploads/3/Pomme-Transparentes-Gratuit-PNG.png',
      'https://www.pngplay.com/wp-content/uploads/3/Pomme-Transparentes-Gratuit-PNG.png',
      'https://www.pngplay.com/wp-content/uploads/3/Pomme-Transparentes-Gratuit-PNG.png',
      'https://www.pngplay.com/wp-content/uploads/3/Pomme-Transparentes-Gratuit-PNG.png',
      'https://www.pngplay.com/wp-content/uploads/3/Pomme-Transparentes-Gratuit-PNG.png',
      'https://www.pngplay.com/wp-content/uploads/3/Pomme-Transparentes-Gratuit-PNG.png',
      'https://www.pngplay.com/wp-content/uploads/3/Pomme-Transparentes-Gratuit-PNG.png',
    ],
    index: 0,
    sizeContainer:300
  }
}

const ProjectsSlice = createSlice({
  name: "ProjectsSlice",
  initialState,
  reducers: { 
    increment: (state) => {
      state.caroussel.index += 1
    },
  },
});

export const {increment} = ProjectsSlice.actions

export default ProjectsSlice.reducer;