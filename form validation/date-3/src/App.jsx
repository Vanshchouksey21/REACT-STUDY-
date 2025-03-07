import { useContext } from "react";
import { myContext } from "./Logincontext";
import Authapp from "./Authapp";
import Unauthapp from "./Unauthapp";

function App() {
  const { user } = useContext(myContext);

  return (
    <>
      <center>
      <h1 style={{color:"red"}}>Hello</h1>
      </center>
      {user?.auth ? <Authapp /> : <Unauthapp />}
    </>
  );
}

export default App;
