import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/books'
import categoriesReducer from './categories/categories'
export const store = configureStore({
  reducer: {
    groupBooks: booksReducer,
    categories: categoriesReducer
  },
})