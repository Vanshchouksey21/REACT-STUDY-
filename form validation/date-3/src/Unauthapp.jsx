import { useState, useContext } from "react";
import { myContext } from "./Logincontext";

const Unauthapp = () => {
    const [val, setVal] = useState("");
    const { login } = useContext(myContext);

    return (
        <>
         <center style={{color:"red"}}>
         Enter your name: 
            <input type="text" onChange={(e) => setVal(e.target.value)} />
            <button  onClick={() => login(val)}>Login</button>
         </center>
        </>
    );
}

export default Unauthapp;
