"use client";
import { url } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { error } from "console";

const initialState = {
  books: [],
  isLoading: true,
  error: "",
};

export const get_books = createAsyncThunk(
  "books/get_books",
  async (_, thunkAPI) => {
    const getState = thunkAPI;

    try {
      const resp = await fetch(url);
      const result = resp.json();
      console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue("There was an error");
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(get_books.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(get_books.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
        console.log(state.books);
      })
      .addCase(get_books.rejected, (state, { payload }) => {
        state.error;
      });
  },
});

export default bookSlice.reducer;
