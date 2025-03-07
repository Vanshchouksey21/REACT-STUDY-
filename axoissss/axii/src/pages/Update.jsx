import { useState , useEffect } from "react";
import axios from "axios";
import img1 from "../img/delete.jpg"
import img2 from "../img/edit.jpeg"
import {  useNavigate } from "react-router-dom";

const Update=()=>{
    const [mydata ,setMydata] =useState([]);
    const navigate = useNavigate();
    const loadData= async()=>{
        let api ="http://localhost:3000/students";
        const response= await axios.get(api);
        console.log(response.data)
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])

    const deletedata = async(key)=>{
        let api =`http://localhost:3000/students/${key}`
       const response = await axios.delete(api);
        alert("Record deleted");
        loadData();
   
    }
    
    const myEdit=(id)=>{
navigate(`/editdata/${id}`)
    }
    

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.eno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
                <td>
                  <a href="#">  <img src={img1} width={30} onClick={()=>{deletedata(key.id)}} /></a>
                </td>
                <td>
                    <a href="#" onClick={()=>{myEdit(key.id)}}><img src={img2} width={30} onClick={()=>{myEdit(key.id)}} /></a>
                </td>
    
            </tr>
            </>
        )
    })
    return(
        <>

        <center>
        <h1>Hello Update</h1>
        <table width="700px" border={2} cellPadding={10}>

<thead>

<tr>
  <th  bgcolor="red">Emp no</th>  
  <th  bgcolor="red">Name</th>  
  <th  bgcolor="red"> designation</th>
  <th  bgcolor="red"> Salary</th>
  <th  bgcolor="red"> Delete</th>
  <th  bgcolor="red"> Edit</th>


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

export default Update;