import Cmp1 from "./cmp1";

import { useState , createContext } from "react";

const Mycontext = createContext();

function App() {
 const [user , setUser] = useState("YELLOW");

 

  return (
    <>  
     
   <center>
   <h1>My Program App welcome {user} </h1>
     <button onClick={()=>{setUser("RED")}}>click here</button>
     <Mycontext.Provider value={{user ,setUser}}>
      
     <Cmp1   />
      </Mycontext.Provider>

   </center>
   </>
  )
}


export default App ;
export {Mycontext};
