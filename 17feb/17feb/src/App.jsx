//state management

import { useState } from 'react'



function App() {
  const [color,setColor]=useState(0)

  const myclr=()=>{
    if(color<=0){
      alert("cant decrement ")
    }
    else{
     setColor( color-1);
    }
  }



  

  return (
    <>
      {/* <div style={{display :"flex" , justifyContent:"center" ,color:color}} >

      <h1 > My Color : {color}</h1>
      <button onClick={()=>{setColor('red')}}  style={{color:color ,width:"120px" ,height:"50px" , position:"absolute"  ,left:"905px" , top:"20px"}}>Default</button>
      </div>
    



    <div style={{display :"flex" , justifyContent:"center" , padding:"20px" , gap:"20px"}}>
    
    <button onClick={()=>{setColor('green')}}  style={{color:color}}>Click Here </button>
     
     <button onClick={()=>{setColor('Blue' )}}   style={{color:color}}>Click Here </button>

     <button onClick={()=>{setColor('yellow' )}}   style={{color:color}}>Click Here </button>

     <button onClick={()=>{setColor('Black' )}}   style={{color:color}}>Click Here </button>

     <button onClick={()=>{setColor('pink' )}}   style={{color:color}}>Click Here </button>

     <button onClick={()=>{setColor('orange' )}}   style={{color:color}}>Click Here </button>

     <button onClick={()=>{setColor('wheat' )}}   style={{color:color}}>Click Here </button>
     
    </div> */}



<div  style={{ display:"flex" , justifyContent:"center", alignItems:"center", border:"2px solid black" , width:"300px"}}>
<center>
<h1 > My count : {color}</h1>
<div style={{display :"flex" , justifyContent:"center" , padding:"20px" , gap:"20px"}}>
  <button onClick={()=>{setColor(color+1)}}>
    increment
  </button>
  <button onClick={()=>{myclr()}}>
    decrement
  </button>
</div>
</center>
</div>


    </>
  )
}

export default App
