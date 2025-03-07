import axios from "axios";
import { useState } from "react"

const Insert=()=>{

    const [input,setInput]= useState({});

    
    const handelInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values,[name]:value}));

       console.log(input);
    }

    const handelSubmit=async()=>{
        let api="http://localhost:3000/students";
        const response=await axios.post(api,input)
            alert("data  is saved sucessfully !!!");
        
   
    }


    return(
    <>
    <center >
    <h1>Insert Data </h1>
    <br/>
    <br />

    Emp No: <input type="text" name="eno" onChange={handelInput} />
    <br/> <br />
    Name: <input type="text" name="name" onChange={handelInput} />
    <br/> <br />
    designation: <input type="text"  name="designation" onChange={handelInput}/>
    <br/> <br />
    salary: <input type="text" name="salary" onChange={handelInput}/>
    <br /> <br />
    
    <button onClick={handelSubmit}>Submit</button>
    </center>
    </>
    )
}

export default  Insert;