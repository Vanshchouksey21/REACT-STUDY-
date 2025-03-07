// props driling -- pass the state  , from one component to another component !!!!!!
// Centeral 

import { useState } from "react";
import Cmp1 from "./Cmp1";

function App() {
 
  const [user , setUser] = useState("vansh")

  return (
    <>  
     
     <h1>My Progeam App : {user}</h1>

     <Cmp1 user={user}  />
   </>
  )
}

export default App ;
