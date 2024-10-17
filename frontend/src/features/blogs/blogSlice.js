import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "./blogService";
import { toast } from "react-toastify";

export const getBlogs = createAsyncThunk("blog/getBlogs", async (thunkAPI) => {
  try {
    return await blogService.getAllBlog();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getBlog = createAsyncThunk(
  "blog/getBlogById",
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlogById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// const getCustomerfromStorage = localStorage.getItem("customer")
//   ? JSON.parse(localStorage.getItem("customer"))
//   : null;
const initialState = {
  blogs: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      })
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
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
export default blogSlice.reducer;
