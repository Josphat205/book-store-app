
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    loading:false,
    books:[],
    error:""
}
let BOOK_API = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CqCVM8RN60tXdDjSzatU/books";
export const fetchBooks = createAsyncThunk(`booksStore/fetchBooks`, async ()=>{
  const response = await fetch(BOOK_API)
  const data = await response.json();
  return data;
})

export const addBook = ({
  item_id, title, author,category,
}) => async (dispatch) => {
    await axios.post(BOOK_API, {
      item_id,
      title,
      author,
      category,
    });
    dispatch(fetchBooks());
};


export const booksSlice = createSlice({
  name: 'booksStore',
  initialState,
  extraReducers: builder =>{
    builder.addCase(fetchBooks.pending, state =>{
      state.loading = true
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) =>{
      state.loading = false
      state.books = action.payload
      state.error = ""
    })
    builder.addCase(fetchBooks.rejected, (state, action) =>{
      state.loading = false
      state.books = []
      state.error = action.error.message
    })
  }
})

export const deleteBook = (id) => async (dispatch) => {
  await axios.delete(`${BOOK_API}/${id}`);
  dispatch(fetchBooks());
};
export default booksSlice.reducer
