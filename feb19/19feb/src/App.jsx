import { useEffect, useState } from 'react';
import axios from "axios" ;


function App() {
  
const [input , setInput] = useState({})
const hi=(e)=>{
  let name = e.target.name;
  let value = e.target.value;
  setInput(values=>({...values , [name] : value}));
  console.log(input);

}

const hs=()=>{
  console.log(input)
}






// useEffect(()=>{
//   setMulti(count*2)
// },[count])
  return (
    <>
 <center>

 {/* <h1 style={{color:"red" }}>
   my count : {count}
   </h1>
   <h1 style={{color:"green" }}> multiplication : {multi}</h1>
   <button style={{backgroundColor:"red" }} onClick={()=>{setCount(count+1)}}>click here </button> */}













   <h1 style={{color:"red"}}>Application Form</h1>

   Enter rno: <input type="text" name="rollno"  onChange={hi}/>
   <br /> <br />

   Enter  Name : <input type="text" name="name"  onChange={hi}/>
   <br /> <br />
   Enter  city : <input type="text" name="city" onChange={hi}/>
   <br /> <br />

   Enter Your fees : <input type="text" name="fees"  onChange={hi}/>

   <br /> <br />
   <button onClick={hs}>
    submit
   </button>

 </center>
    </>
  )
}

export default App ;
