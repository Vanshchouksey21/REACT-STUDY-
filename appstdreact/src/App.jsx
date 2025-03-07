

import Emptable from "./Emptable"
import Empdesign from "./Empdesign"








const App=()=>{
  const ans=Emptable.map((key)=><Empdesign 
en={key.empno} 
nm={key.name}
ct={key.city}
sl={key.salaray}/> );

  return(
   <>
   <table border="2" cellPadding="2" cellSpacing="2"  height="250px" width="500px">
<tr>

  <th bgcolor="red" >empno</th>
  <th    bgcolor="red">name</th>
  <th    bgcolor="red">city</th>
  <th    bgcolor="red">salary</th>
</tr>
{ans}
   </table>


</>
  )
}
export default App ;