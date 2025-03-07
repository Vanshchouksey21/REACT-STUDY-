import { useState , createContext , useContext } from "react";
import Logincontext from "./Logincontext";



const Unauthapp = () => {
    
    

    
    const [name , setName ] = useState("")
  return (
  <>

    Enter your name : <input type="text"  onChange={(e)=>{
        setName(e.target.value)
        console.log(name);
    }}/>
    <button>Login now </button>
  
  </>
  )
}

export default Unauthapp ;
