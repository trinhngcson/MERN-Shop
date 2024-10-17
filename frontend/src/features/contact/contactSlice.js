import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactService } from "./contactService";
import { toast } from "react-toastify";

export const postQuery = createAsyncThunk(
  "query/postQuery",
  async (data, thunkAPI) => {
    try {
      return await contactService.postQuery(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// const getCustomerfromStorage = localStorage.getItem("customer")
//   ? JSON.parse(localStorage.getItem("customer"))
//   : null;
const initialState = {
  contact: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contact = action.payload;
      })
      .addCase(postQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      });
  },
});
export default contactSlice.reducer;
