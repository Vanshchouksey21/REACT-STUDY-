import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask , deletetask , taskIncomplete , taskcomplete , editdatasave } from './todoSlice';

const App = () => {
  const [txtval, setTxtval] = useState(''); 
  const [btn, setBtn] = useState(true); 
  const [wid, setWid] = useState(" "); 



  const dispatch = useDispatch();
  const mytask = useSelector((state) => state.mytodo.task);
  console.log(mytask);


  const editidata =(id , work)=>{
    setTxtval(work)
    setBtn(false) ; 
    setWid(id)

  }
  const editidatadispatch =()=>{
       dispatch(editidata({id:wid ,work:txtval}))
       setBtn(true)
  }

  let sno = 0;
  const ans = mytask.map((key) => { 
    sno++;
    return (
      <>
        <tr> 
          <td>{sno}</td>
          <td>
  {key && key.status === "complete" ? (
    <span style={{ textDecoration: "line-through", color: "red" }}>
      {key.work}
    </span>
  ) : (
    key && key.work
  )}
</td>

          <td><button onClick={() => { dispatch(deletetask({ id: key.id })) }}>delete now</button></td>
          <td><button onClick={() => { dispatch(taskcomplete({ id: key.id })) }}>task complete</button></td>
          <td><button onClick={() => { dispatch(taskIncomplete({ id: key.id })) }}>task incomplete</button></td>
          <td><button onClick={()=>{editidata(key.id , key.work)}}>Edit data</button></td>
        </tr>
      </>
    );
  });

  return (
    <div style={{ backgroundColor: "#F0F8FF", border: "2px solid black", height: "100vh" }}>
      <center>
        <h1>WELCOME TO TODO LIST!</h1>
        ENTER YOUR TASK:
        <input style={{ borderRadius: "50px", padding: "5px 20px ", backgroundColor: "cyan" }}
          type="text"
          value={txtval}
          onChange={(e) => { setTxtval(e.target.value); }} 
        />
        <br /> <br />


        {btn ? (<>
          <button style={{ padding: "5px 20px", borderRadius: "50px", backgroundColor: "#4681f4" }} 
          onClick={() => { dispatch(addTask({ id: Date.now(), work: txtval, status: "incomplete" })); }}>
          ADD TASK
        </button></>) :(<><button onClick={()=>{editidatadispatch}}>EDIT TASK </button></>)}
        

        
        <hr />
        <table border={2} width={500}>
          <thead>
            <tr>
              <th style={{ backgroundColor: "red" }}>S.NO</th>
              <th style={{ backgroundColor: "red" }}>MY TASK</th>
              <th style={{ backgroundColor: "red" }}></th>
              <th style={{ backgroundColor: "red" }}></th>
              <th style={{ backgroundColor: "red" }}></th>
              <th style={{ backgroundColor: "red" }}></th>

            </tr>
          </thead>
          <tbody style={{ backgroundColor: "yellow" }}>
            {ans}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default App;
