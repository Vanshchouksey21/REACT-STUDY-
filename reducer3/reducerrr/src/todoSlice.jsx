import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: "mytodo",
  initialState: {
    task: [], // Initial empty task array
  },
  reducers: {
    addTask: (state, action) => { 
      console.log(action.payload); // For debugging purposes
      state.task.push(action.payload); // Adding the new task to the state
    },
  },
});

export const { addTask } = todoSlice.actions; // Export the action creator
export default todoSlice.reducer; // Export the reducer to be used in the store
