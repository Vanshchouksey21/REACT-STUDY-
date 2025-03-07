import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Update from "./pages/update";
import Editdata from "./pages/Editdata";




function App() {
 
  return (
    <>
   <center>
   <h1 style={{color:"red"}}>Hello User</h1>
   </center>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="insert" element={<Insert/>} />
        <Route path="display" element={<Display/>} />
        <Route path="search" element={<Search/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="update" element={<Update/>} />
        <Route path="editdata/:id" element={<Editdata/>}/>







           
         
        </Route>
      </Routes>
     
    </BrowserRouter> 

    </>
  )
}

export default App;