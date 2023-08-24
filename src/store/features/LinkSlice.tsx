//Init
import { createSlice } from "@reduxjs/toolkit";
//Interface
import LinksModel from "@interfaces/Links";


const initialState: LinksModel = {
  links : [
    'Biographie',
    'Portfolio',
    'Contact'
  ]
}

const LinkSlice = createSlice({
  name: "linkSlice",
  initialState,
  reducers: {},
});

export default LinkSlice.reducer