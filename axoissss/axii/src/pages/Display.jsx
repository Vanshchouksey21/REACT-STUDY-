import { useState, useEffect } from "react";

import axios from "axios";
const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData= async()=>{
        let api ="http://localhost:3000/students";
        const response= await axios.get(api);
        console.log(response.data)
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    },[])

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.eno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
    
            </tr>
            </>
        )
    })

    return(
        <>
    <center>

    <h1>Display data</h1>
        <table width="700px" border={2} cellPadding={10}>

        <thead>

        <tr>
          <th  bgcolor="red">Emp no</th>  
          <th  bgcolor="red">Name</th>  
          <th  bgcolor="red"> designation</th>
          <th  bgcolor="red"> Salary</th>

        </tr >

        </thead>

       <tbody bgcolor="yellow">
       
        {ans}
       

       </tbody>

        </table>
    </center>

        </>
    )
}

export default Display;