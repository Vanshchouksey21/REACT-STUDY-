import { useEffect, useState } from 'react'


function App() {
  
// const [count ,setCount] =useState(0);
// const [multi, setMulti] =useState(0);

const [eno ,setEno] = useState("");
const [name ,setName] = useState("");
const [city ,setCity] = useState("");
// const [sly ,setSly] = useState("");

const hs=()=>{
  console.log({Name:eno, City:name , Fees :city})
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













   <h1>Application Form</h1>

   Enter Name: <input type="text" value={eno}  onChange={(e)=>{setEno(e.target.value)}}/>
   <br /> <br />

   Enter  City : <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}/>
   <br /> <br />
   Enter  Fees : <input type="text" value={city}  onChange={(e)=>{setCity(e.target.value)}}/>
   <br /> <br />

   {/* Enter Your Salary : <input type="text" value={sly}  onChange={(e)=>{setSly(e.target.value)}}/> */}

   <br /> <br />
   <button onClick={hs}>
    submit
   </button>

 </center>
    </>
  )
}

export default App ;
