//Init
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//Interface
import ContactModel from "@interfaces/Contact";


const initialState:ContactModel = {
  loading : true,
  active : false,
  success : false,
  error: false,
  errorName:false,
  errorMail:false,
}

const ContactSlice = createSlice({
  name: "ContactSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setActive: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload
    },
    setErrorName: (state, action: PayloadAction<boolean>) => {
      state.errorName = action.payload
    },
    setErrorMail: (state, action: PayloadAction<boolean>) => {
      state.errorMail = action.payload
    }
  },
});

export const { setLoading, setActive, setSuccess, setError, setErrorName, setErrorMail } = ContactSlice.actions
export default ContactSlice.reducer