import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './todoSlice';

const App = () => {
  const [txtval, setTxtval] = useState(''); // Changed to an empty string instead of space

  const dispatch = useDispatch();
  const mytask = useSelector((state) => state.mytodo.task);

  let sno = 0;
  const ans = mytask.map((key, index) => { // Using index to generate serial number
    sno = index + 1; // Serial number based on the index
    return (
      <>
        <tr key={key.work + index}> {/* Added key prop for uniqueness */}
          <td>{sno}</td>
          <td>{key.work}</td>
        </tr>
      </>
    );
  });

  return (
    <center>
      <h1>WELCOME TO TODO LIST!</h1>
      ENTER YOUR TASK:
      <input
        type="text"
        value={txtval}
        onChange={(e) => { setTxtval(e.target.value); }} // Updated input value
      />
      <br /> <br />
      <button onClick={() => { dispatch(addTask({ work: txtval })); }}>ADD TASK</button>
      <hr />
      <table border={2}>
        <thead>
          <tr>
            <th style={{backgroundColor:"red"}}>S.NO</th>
            <th  style={{backgroundColor:"red"}}>MY TASK</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor:"yellow"}}>
          {ans}
        </tbody>
      </table>
    </center>
  );
};

export default App;
