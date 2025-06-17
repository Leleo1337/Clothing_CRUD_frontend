import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from './pages/Login.tsx'

function App() {
   return (
      <>
         <BrowserRouter basename="/">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/Create" element={<Create />} />
               <Route path="/Edit/:id" element={<Edit />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
