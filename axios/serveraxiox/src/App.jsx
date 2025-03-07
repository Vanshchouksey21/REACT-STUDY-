import { useEffect, useState } from 'react';
import axios from "axios" ;


function App() {
  const [mydata, setMydata] = useState([]);
  const loadData=()=>{
    let api ="https://jsonplaceholder.typicode.com/todos";
    axios.get(api).then((res)=>{
      console.log(res.data);
      setMydata(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  },[]);

  return (
    <>
     <h1>My data </h1>
    </>
  )
}

export default App
