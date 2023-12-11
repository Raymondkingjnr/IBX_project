"use client";
import { configureStore } from "@reduxjs/toolkit";
import booksReducers from "./features/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducers,
  },
});
