import { useContext } from "react";
import { myContext } from "./Logincontext";

const Authapp = () => {
  const{user ,  logout} = useContext(myContext)
    
    return (
        <>
          <center style={{color:"red"}}>
          <h1>Welcome {user.name}!</h1>
          <button onClick={logout}>Logout</button>
          </center>
        </>
    );
}

export default Authapp;
