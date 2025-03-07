// import Cmp3 from "./cpm3";
import { useContext } from "react";
import { Mycontext } from "./App";


const Cmp2=()=>{
    const{ user , setUser} =useContext(Mycontext);
    return(
        <>
<h1>CYBROM :{user}</h1>
<button onClick={()=>{setUser("PINK")}}>click here </button>

{/* <Cmp3/> */}

        </>
    )
}

export default Cmp2 ;