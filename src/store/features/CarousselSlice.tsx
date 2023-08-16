//Init
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//Interface
import {PropsModel} from "@interfaces/Props";
import { CarousselModel } from "@interfaces/Caroussel";


const initialState: PropsModel<CarousselModel> = {
  caroussel : {
    itemsPicture : [
      'obito.jpg',
      'itachi.jpg',
    ],
    index: 0,
    sizeContainer:'600px'
  }
}

const CarousselSlice = createSlice({
  name: "CarousselSlice",
  initialState,
  reducers: { 
    setIndex: (state, action: PayloadAction<number>) => {
      if(state.caroussel){
        state.caroussel.index += action.payload
      }
    }
  },
});

export const { setIndex } = CarousselSlice.actions;
export default CarousselSlice.reducer;