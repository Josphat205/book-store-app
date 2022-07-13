import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './books/books'
import categoriesReducer from './categories/categories'
export const store = configureStore({
  reducer: {
    myStore: counterReducer,
    myCategories: categoriesReducer
  },
})