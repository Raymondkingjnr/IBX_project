"use client";
import { url } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  query: "",
  isLoading: true,
  error: "",
};

export const get_books = createAsyncThunk(
  "books/get_books",
  async (_, thunkAPI) => {
    const { query } = thunkAPI.getState().books;

    try {
      const resp = await fetch(`${url}?search=${query}`);
      const result = resp.json();
      // console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue("There was an error");
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(get_books.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(get_books.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
        // console.log(state.books);
      })
      .addCase(get_books.rejected, (state, { payload }) => {
        state.error;
      });
  },
});

export const { setQuery } = bookSlice.actions;

export default bookSlice.reducer;
