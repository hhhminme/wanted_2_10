import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("datas/fetchData", async () => {
  return axios
    .get("https://api.clinicaltrialskorea.com/api/v1/search-conditions/", {
      params: {
        name: "방광",
      },
    })
    .then((res) => res.data)
    .catch((error) => error);
});

const datasSlice = createSlice({
  name: "datas",
  initialState: {
    datas: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [fetchData.pending]: (state) => {
      state.loading = true;
      state.datas = [];
      state.error = "";
    },
    //@ts-ignore
    [fetchData.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = "";
    },
    //@ts-ignore
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    },
  },
});

export default datasSlice.reducer;
