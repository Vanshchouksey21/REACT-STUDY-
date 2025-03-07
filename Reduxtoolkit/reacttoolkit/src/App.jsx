import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice';
const App = () => {
  const myval = useSelector(state => state.myCounter.count);
  const dispatch=useDispatch();
  return (
    <div>
<h1>Welcom to counter program</h1>
<button onClick={()=>{dispatch(increment())}}>increment</button>
<h1>{myval}</h1>
<button onClick={()=>{dispatch(decrement())}}>decrement</button>

    </div>
  )
}

export default App