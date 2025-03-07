import { configureStore } from '@reduxjs/toolkit';
import myReducer from './todoSlice'; // Import the reducer for your todo slice

const store = configureStore({
  reducer: {
    mytodo: myReducer, // Adding the todo reducer to the store
  },
});

export default store;
