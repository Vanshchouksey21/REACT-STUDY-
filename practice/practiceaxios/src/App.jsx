import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";
const App=()=>{
   const myval=useSelector(state=>state.mycounter.count);
   const dispatch =useDispatch();
  return(
    <>
        <h1>Welcome To Coutner Program!</h1>
        <button onClick={()=>{dispatch(increment())}}> Increment </button>

        <h1> {myval} </h1>

        <button onClick={()=>{dispatch(decrement())}}> Decrement </button>
        
    </>
  )
}
export default App;