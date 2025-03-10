import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: "mytodo",
  initialState: {
    task: [], 
  },
  reducers: {
    addTask: (state, action) => { 
      console.log(action.payload); 
      state.task.push(action.payload); 
    },
    deletetask:(state,actions)=>{
      state.task=state.task.filter((key)=>{
          if(key.id!=actions.payload.id)
          {
              return true
          }
          else{
              return false
          }
      })
        },
taskcomplete:(state , actions)=>{
  for(let i = 0 ; i<state.task.length ;++i){
    if(state.task[i].id == actions.payload.id){
      state.task[i].status="Completed";
    }
  }
},
taskIncomplete:(state , actions)=>{
  for(let i = 0 ; i<state.task.length ;++i){
    if(state.task[i].id == actions.payload.id){
      state.task[i].status="Incomplete";
    }
  }
},
editdatasave:(state , actions)=>{
  for(let i = 0 ; i<state.task.length ;++i){
    if(state.task[i].id == actions.payload.id){
      state.task[i].work=actions.payload.work;

    }
  }
}

  },
});

export const { addTask , deletetask , taskIncomplete , taskcomplete , editdatasave} = todoSlice.actions; 
export default todoSlice.reducer; 