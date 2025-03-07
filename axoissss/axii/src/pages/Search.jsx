import axios from "axios";
import { useState } from "react";

const Search = () => {
    const [empno, setEmpno] = useState(""); // Removed extra space in initial state
    const [mydata, setMydata] = useState([]);

    const hs = async () => {
        let api = `http://localhost:3000/students?eno=${Number(empno)}`; // Fixed query parameter
        const res = await axios.get(api);
        setMydata(res.data);
    };

    const ans = mydata.map((key) => {
        return (
            <tr key={key.id}>
                <td>{key.eno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
            </tr>
        );
    });

    return (
        <>
            <center>
                <h1>Search Here</h1>
                Enter Emp no: 
                <input type="text" value={empno} onChange={(e) => setEmpno(e.target.value)} />
                <br /> <br />
                <button onClick={hs}>Search</button>
                <hr />

                <table border="1">
                    <thead>
                        <tr >
                            <th>Emp no</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody >
                        {mydata.length > 0 ? ans : <tr><td colSpan="4">No Data Found</td></tr>}
                    </tbody>
                </table>
            </center>
        </>
    );
};

export default Search;
