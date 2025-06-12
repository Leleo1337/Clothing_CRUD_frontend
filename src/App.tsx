import { BrowserRouter, Routes, Route } from "react-router";
import "./app.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
   return (
      <>
         <BrowserRouter basename="/">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Create" element={<Create />} />
               <Route path="/Edit/:id" element={<Edit />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
