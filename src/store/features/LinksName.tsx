//Init
import { createSlice } from "@reduxjs/toolkit";
//Interface
import ArrLinks from "@interfaces/ArrLinks";


const initialState: ArrLinks = {
  names : [
    'Accueil',
    'Projets',
    'Linkedin',
    'Diplomes',
    'Contact'
  ]
}

const LinksName = createSlice({
  name: "linksName",
  initialState,
  reducers: {},
});

export default LinksName.reducer