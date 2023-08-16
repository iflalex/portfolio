//Init
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//Interface
import TransitionModel from "@interfaces/Transition";


const initialState:TransitionModel = {
  active : false
}

const TransitionSlice = createSlice({
  name: "TransitionSlice",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload
    }
  },
});

export const { setActive } = TransitionSlice.actions
export default TransitionSlice.reducer