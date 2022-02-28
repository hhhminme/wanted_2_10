import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "datas/fetchData",
  async (autoCompleteInput: string) => {
    try {
      const response = await axios.get(
        "https://api.clinicaltrialskorea.com/api/v1/search-conditions/",
        {
          params: {
            name: autoCompleteInput,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log("err", err);
    }
  }
);

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
      state.datas = action.payload;
      state.loading = false;
      state.error = "";
    },
    //@ts-ignore
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
      state.datas = [];
      state.error = action.payload;
    },
  },
});

export default datasSlice.reducer;
