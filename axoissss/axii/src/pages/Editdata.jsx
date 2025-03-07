import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const Editdata =()=>{
    const {id}=useParams();
    const [empdata,setempdata]=useState({});

    const loaddata=async()=>{
        let api=`http://localhost:3000/students/${id}`;
        let response=await axios.get(api);
        setempdata(response.data);
    }

    useEffect(()=>{
        loaddata();
    },[])

    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setempdata(values=>({...values,[name]:value}));
        console.log(empdata);
    }

    const handlesubmit=async()=>{
        let api=`http://localhost:3000/students/${id}`;
        const response=await axios.put(api,empdata);
        alert("record updated !!");
    }
    return(
        <>
        <h1>edit employee details : {id}</h1>
        edit empno : <input type="text" name="eno" value={empdata.eno} onChange={handleinput} />
        <br />
        edit designation: <input type="text" name="designation" value={empdata.designation} onChange={handleinput} />
        <br />
        edit name: <input type="text" name="name" value={empdata.name} onChange={handleinput} />
        <br />
       
        edit salary : <input type="number" name="salary" value={empdata.salary} onChange={handleinput} />
        <br />
        <button onClick={handlesubmit}>edit save</button>
        </>
    )
}

export default Editdata;