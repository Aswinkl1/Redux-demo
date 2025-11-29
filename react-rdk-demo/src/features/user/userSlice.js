import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  loding: false,
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loding = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loding = false;
      state.user = action.payload;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log(action.error);
      state.loding = false;
      state.error = action.error.message;
    });
  },
});

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

export default userSlice.reducer;
