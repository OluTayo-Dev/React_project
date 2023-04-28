import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
     <BrowserRouter>

        <Routes>

           <Route path="/Home" element={<Home />} />
           <Route path="/Create" element={<Create />} />
           <Route path="/Signup" element={<Signup />} />
       
        </Routes>

     </BrowserRouter> 
  </div> 
  );
}

export default App;
