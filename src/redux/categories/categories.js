// Actions
const CHECK_STATUS   = 'book-store-app/categories/CHECK_STATUS';

let initialState ={
    categories:[]
}
// Reducer
export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
      // do reducer stuff
      case CHECK_STATUS:
       return "Under construction"
      default: return state;
    }
  }
  
  // Action Creators
  export function checkStatus() {
    return { type: CHECK_STATUS };
  }