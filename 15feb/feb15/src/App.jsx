// event in react js 



function App() {


  const HandleInput=(e)=>{
    let name =e.target.name;
    let value = e.target.value;
    console.log({[name] : value})
  }

  return (
    <>
<h1>welcome   to react event </h1>
Enter city : <input type="text" name="my city" value="Bhopal" onChange={HandleInput} />


   </>
  )
}

export default App
