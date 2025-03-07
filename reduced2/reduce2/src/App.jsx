import React from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import { changeColor } from './colorSlice'
import { useState } from 'react'

const App = () => {
  const [val ,setval] = useState("");
  const myclr = useSelector(state=>state.mycolor.color)
 const  dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome to color Program </h1>
      <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}}/>
      <button onClick={()=>{
        dispatch(changeColor(val))}}> Change color </button>

      <div style={{height:"300px" , width:"300px" , backgroundColor:myclr}}></div>



    </div>
  )
}

export default App