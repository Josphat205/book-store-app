import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    books:[]
}

export const counterSlice = createSlice({
  name: 'booksStore',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    removeBook: (state,action) => {
      state.books = state.books.filter((book)=> book.id !== action.payload.id)
    }
  },
})

export const { addBook, removeBook } = counterSlice.actions

export default counterSlice.reducer